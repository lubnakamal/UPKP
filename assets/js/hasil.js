/* ============================================================
   Hasil — score, review & pembahasan, riwayat & analitik
   ============================================================ */
(function () {
  "use strict";

  var reviewFilter = "semua";
  var currentAttempt = null;

  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function tone(p) { return p >= 75 ? "high" : p >= 50 ? "mid" : "low"; }

  function barRows(rows) {
    return '<div class="bars">' + rows.map(function (r) {
      var p = pct(r.benar, r.total);
      return '<div class="bar-row ' + tone(p) + '"><span class="bl">' + UI.esc(r.nama) + '</span>' +
        '<span class="bt"><i style="width:' + p + '%"></i></span>' +
        '<span class="bv">' + r.benar + "/" + r.total + "</span></div>";
    }).join("") + "</div>";
  }

  function byTipe(attempt) {
    var map = {};
    (attempt.qids || []).forEach(function (id) {
      var q = Quiz.questionById(id);
      if (!q) return;
      var t = q.tipe || "HOTS";
      if (!map[t]) map[t] = { nama: t, total: 0, benar: 0 };
      map[t].total++;
      if (attempt.answers[id] === q.kunci) map[t].benar++;
    });
    return Object.keys(map).map(function (k) { return map[k]; });
  }

  function render(id) {
    var a = id ? Store.getAttempt(id) : null;
    if (!a) {
      UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Hasil" }]);
      document.getElementById("view").innerHTML =
        '<div class="empty" style="margin-top:30px"><div class="e-icon">' + UI.icon("chart", 26) + "</div>" +
        "<h3>Hasil tidak ditemukan</h3><p>Hasil mungkin sudah dihapus, atau tautan tidak lengkap.</p>" +
        '<a class="btn btn-primary" href="#/riwayat">Buka riwayat</a></div>';
      return;
    }
    currentAttempt = a;
    reviewFilter = "semua";
    var s = a.score;
    var percent = pct(s.benar, s.total);
    var isTryout = a.mode === "tryout";

    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: isTryout ? "Tryout" : "Latihan", href: isTryout ? "#/tryout" : "#/latihan" }, { label: "Hasil" }]);
    UI.setNav(isTryout ? "tryout" : "latihan");

    var bars;
    var barTitle;
    if (isTryout) {
      bars = App.BLUEPRINT.map(function (g) {
        var x = s.perKelompok[g.key] || { total: 0, benar: 0 };
        return { nama: g.key + " · " + g.nama.replace("Tes ", ""), total: x.total, benar: x.benar };
      }).filter(function (r) { return r.total > 0; });
      barTitle = "Capaian per kelompok ujian";
    } else {
      bars = byTipe(a);
      barTitle = "Capaian per jenis soal";
    }

    var weak = [];
    if (isTryout) {
      Object.keys(s.perMateri).forEach(function (k) {
        var m = s.perMateri[k];
        weak.push({ id: k, nama: m.nama, p: pct(m.benar, m.total), benar: m.benar, total: m.total });
      });
      weak.sort(function (x, y) { return x.p - y.p; });
    }

    var actions =
      '<div class="result-actions">' +
        '<button class="btn btn-primary" id="reviewBtn" type="button">' + UI.icon("book", 16) + " Buka pembahasan</button>" +
        '<button class="btn" id="retryBtn">' + UI.icon("refresh", 16) + " Ulangi " + (isTryout ? "tryout" : "latihan") + "</button>" +
        '<a class="btn" href="#/riwayat">' + UI.icon("chart", 16) + " Riwayat</a>" +
      "</div>";

    var body =
      '<div class="score-hero">' +
        '<div class="score-big"><div class="lbl">Skor akhir</div><div class="num">' + s.benar + '<small> / ' + s.total + "</small></div>" +
        '<div class="of">' + percent + "% benar · " + UI.fmtDuration(a.durationSec) + "</div></div>" +
        "<div><div class=\"row-between\" style=\"margin-bottom:10px\"><h2 class=\"h3\">" + barTitle + "</h2>" +
        '<span class="chip ' + (percent >= 75 ? "chip-ok" : percent >= 50 ? "" : "chip-bad") + '">' + percent + "%</span></div>" +
        (bars.length ? barRows(bars) : '<p class="small">Tidak ada data.</p>') +
        "</div>" +
      "</div>" +
      '<div class="grid grid-4">' +
        '<div class="stat"><span class="k">Benar</span><span class="v" style="color:var(--ok)">' + s.benar + "</span><span class=\"d\">Tanpa pengurangan nilai</span></div>" +
        '<div class="stat"><span class="k">Salah</span><span class="v" style="color:var(--bad)">' + s.salah + "</span><span class=\"d\">Perlu dibaca ulang</span></div>" +
        '<div class="stat"><span class="k">Kosong</span><span class="v">' + s.kosong + "</span><span class=\"d\">Tidak dijawab</span></div>" +
        '<div class="stat"><span class="k">Durasi</span><span class="v" style="font-size:22px">' + UI.fmtDuration(a.durationSec) + "</span><span class=\"d\">" + UI.fmtDate(new Date(a.finishedAt).toISOString()) + "</span></div>" +
      "</div>" +
      actions +
      (isTryout && weak.length ?
        '<div class="card card-pad" style="margin-top:18px"><div class="row-between" style="margin-bottom:10px"><h3 class="h3">Materi yang perlu diprioritaskan</h3><span class="tiny">Diurutkan dari capaian terendah</span></div>' +
        '<div class="pill-list">' + weak.slice(0, 6).map(function (w) {
          return '<a class="pill" href="#/materi/' + w.id + '" style="text-decoration:none">' + UI.esc(w.nama) + " · " + w.benar + "/" + w.total + "</a>";
        }).join("") + "</div></div>" : "") +
      '<div class="divider-text" id="reviewSection">Review &amp; pembahasan</div>' +
      '<div class="review-toolbar">' +
        '<div class="seg" role="tablist" aria-label="Filter review">' +
          ["semua", "benar", "salah", "kosong"].map(function (f) {
            return '<button data-rfilter="' + f + '" class="' + (reviewFilter === f ? "on" : "") + '">' + f.charAt(0).toUpperCase() + f.slice(1) + "</button>";
          }).join("") +
        "</div>" +
        '<span class="small" id="reviewCount"></span>' +
        '<span class="spacer"></span>' +
        '<span class="tiny">' + UI.icon("info", 13) + " Klik soal untuk membuka pembahasan.</span>" +
      "</div>" +
      '<div id="reviewList"></div>';

    document.getElementById("view").innerHTML =
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">' + (isTryout ? "Tryout selesai" : "Latihan selesai") + "</span>" +
      '<h1 class="h1" style="margin-top:8px">' + UI.esc(a.materiNama) + "</h1></div></div>" + body;

    paintReview();

    var reviewToolbar = document.querySelector(".review-toolbar");
    if (reviewToolbar) reviewToolbar.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-rfilter]") : null;
      if (!b || !reviewToolbar.contains(b)) return;
      reviewFilter = b.getAttribute("data-rfilter");
      reviewToolbar.querySelectorAll("[data-rfilter]").forEach(function (x) {
        x.classList.toggle("on", x === b);
      });
      paintReview();
    });

    var reviewBtn = document.getElementById("reviewBtn");
    if (reviewBtn) reviewBtn.addEventListener("click", function () {
      UI.scrollToEl(document.getElementById("reviewSection"));
    });
    var retry = document.getElementById("retryBtn");
    if (retry) retry.addEventListener("click", function () {
      if (a.mode === "tryout") { location.hash = "#/tryout"; }
      else Quiz.begin("latihan", a.materi);
    });
  }

  function paintReview() {
    var a = currentAttempt;
    if (!a) return;
    var list = document.getElementById("reviewList");
    if (!list) return;
    var items = [];
    (a.qids || []).forEach(function (id, i) {
      var q = Quiz.questionById(id);
      if (!q) return;
      var picked = a.answers[id] || null;
      var status = !picked ? "kosong" : picked === q.kunci ? "benar" : "salah";
      if (reviewFilter !== "semua" && status !== reviewFilter) return;
      items.push({ q: q, picked: picked, status: status, i: i });
    });

    document.getElementById("reviewCount").textContent = items.length + " soal ditampilkan";

    if (!items.length) {
      list.innerHTML = '<div class="empty"><div class="e-icon">' + UI.icon("check", 24) + "</div><h3>Tidak ada soal pada filter ini</h3><p>Ubah filter untuk melihat soal lain.</p></div>";
      return;
    }

    list.innerHTML = items.map(function (it) {
      var q = it.q;
      var tagCls = it.status === "benar" ? "badge-ok" : it.status === "salah" ? "badge-bad" : "badge-warn";
      var tagTxt = it.status === "benar" ? "Benar" : it.status === "salah" ? "Salah" : "Kosong";
      return '<details class="review-item card">' +
        '<summary><span class="rnum">' + String(it.i + 1).padStart(2, "0") + "</span>" +
          '<span class="rq">' + q.pertanyaan +
            '<span class="rtags"><span class="badge ' + tagCls + '">' + tagTxt + "</span>" +
            '<span class="badge ' + "badge-" + q.kelompok.toLowerCase() + '">' + q.kelompok + "</span>" +
            '<span class="badge">' + UI.esc(q.tipe || "HOTS") + "</span>" +
            '<span class="tiny" style="align-self:center">Kunci ' + q.kunci + (it.picked ? " · Jawaban Anda " + it.picked : "") + "</span></span>" +
          "</span></summary>" +
        '<div class="review-body">' +
          (q.stimulus ? '<div class="stimulus"><span class="s-label">Stimulus</span>' + q.stimulus + "</div>" : "") +
          '<div class="options" style="margin-bottom:6px">' + UI.optionList(q, it.picked, { locked: true, showKey: true }) + "</div>" +
          UI.feedbackHTML(q, it.picked) +
        "</div>" +
      "</details>";
    }).join("");
  }

  /* ---------- riwayat & analitik ---------- */

  function renderRiwayat() {
    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Riwayat & Analitik" }]);
    UI.setNav("riwayat");
    var attempts = Store.attempts();

    if (!attempts.length) {
      document.getElementById("view").innerHTML =
        '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Progres</span><h1 class="h1" style="margin-top:8px">Riwayat &amp; Analitik</h1></div></div>' +
        '<div class="empty"><div class="e-icon">' + UI.icon("chart", 26) + "</div><h3>Belum ada riwayat</h3>" +
        "<p>Selesaikan satu tryout atau latihan. Hasil dan analitik per materi akan muncul di sini.</p>" +
        '<div class="row" style="justify-content:center"><a class="btn btn-primary" href="#/tryout">Mulai Tryout</a><a class="btn" href="#/latihan">Latihan</a></div></div>';
      return;
    }

    var tryouts = attempts.filter(function (a) { return a.mode === "tryout"; });
    var latihan = attempts.filter(function (a) { return a.mode === "latihan"; });
    var avg = 0;
    if (tryouts.length) {
      avg = Math.round(tryouts.reduce(function (s, a) { return s + pct(a.score.benar, a.score.total); }, 0) / tryouts.length);
    }
    var last = attempts[0];
    var lastPct = pct(last.score.benar, last.score.total);

    /* mastery per materi across all attempts */
    var mastery = {};
    attempts.forEach(function (a) {
      Object.keys(a.score.perMateri || {}).forEach(function (k) {
        var m = a.score.perMateri[k];
        if (!mastery[k]) mastery[k] = { nama: m.nama, total: 0, benar: 0 };
        mastery[k].total += m.total;
        mastery[k].benar += m.benar;
      });
    });
    var mastRows = Object.keys(mastery).map(function (k) {
      var m = mastery[k];
      return { id: k, nama: m.nama, total: m.total, benar: m.benar };
    }).sort(function (a, b) { return pct(a.benar, a.total) - pct(b.benar, b.total); });

    var rows = attempts.map(function (a) {
      var p = pct(a.score.benar, a.score.total);
      return "<tr>" +
        "<td>" + UI.fmtDate(new Date(a.finishedAt).toISOString()) + "</td>" +
        '<td><span class="badge ' + (a.mode === "tryout" ? "badge-twk" : "badge-tkt") + '">' + (a.mode === "tryout" ? "Tryout" : "Latihan") + "</span></td>" +
        "<td>" + UI.esc(a.materiNama) + "</td>" +
        '<td><span class="score-pill">' + a.score.benar + "<small>/" + a.score.total + "</small></span></td>" +
        '<td><span class="badge ' + (p >= 75 ? "badge-ok" : p >= 50 ? "badge-warn" : "badge-bad") + '">' + p + "%</span></td>" +
        "<td>" + UI.fmtDuration(a.durationSec) + "</td>" +
        '<td><a class="btn btn-sm" href="#/hasil/' + a.id + '">Buka</a></td>' +
      "</tr>";
    }).join("");

    var trendBars = tryouts.slice(0, 8).reverse().map(function (a, i) {
      var p = pct(a.score.benar, a.score.total);
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex:1;min-width:34px">' +
        '<div style="font-size:10px;color:var(--muted)">' + p + "</div>" +
        '<div style="width:100%;height:' + Math.max(6, p) + 'px;max-height:90px;background:' + (p >= 75 ? "var(--ok)" : p >= 50 ? "var(--brass-bright)" : "var(--bad)") + ';border-radius:4px 4px 0 0"></div>' +
        '<div style="font-size:9px;color:var(--muted-2)">' + (i + 1) + "</div></div>";
    }).join("");

    document.getElementById("view").innerHTML =
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Progres</span><h1 class="h1" style="margin-top:8px">Riwayat &amp; Analitik</h1>' +
      '<p class="lede" style="margin-top:8px">Lihat pola kekuatan dan kelemahan dari setiap percobaan.</p></div></div>' +
      '<div class="grid grid-4">' +
        '<div class="stat"><span class="k">Total percobaan</span><span class="v">' + attempts.length + "</span><span class=\"d\">" + tryouts.length + " tryout · " + latihan.length + " latihan</span></div>" +
        '<div class="stat accent"><span class="k">Rata-rata tryout</span><span class="v">' + avg + '<small> %</small></span><span class="d">Dari ' + tryouts.length + " percobaan</span></div>" +
        '<div class="stat"><span class="k">Percobaan terakhir</span><span class="v">' + last.score.benar + '<small> / ' + last.score.total + "</small></span><span class=\"d\">" + UI.esc(last.materiNama) + "</span></div>" +
        '<div class="stat"><span class="k">Capaian terakhir</span><span class="v">' + lastPct + '<small> %</small></span><span class="d">' + (lastPct >= 75 ? "Siap diuji" : lastPct >= 50 ? "Perlu penguatan" : "Prioritaskan materi dasar") + "</span></div>" +
      "</div>" +
      '<div class="split" style="margin-top:22px">' +
        '<div class="card card-pad"><div class="row-between" style="margin-bottom:8px"><h2 class="h3">Penguasaan per materi</h2><span class="tiny">Akumulasi semua percobaan</span></div>' +
          (mastRows.length ? barRows(mastRows.map(function (m) { return { nama: m.nama, benar: m.benar, total: m.total }; })) : '<p class="small">Belum ada data.</p>') +
        "</div>" +
        '<div class="card card-pad"><div class="row-between" style="margin-bottom:14px"><h2 class="h3">Tren tryout</h2><span class="tiny">8 terakhir</span></div>' +
          (tryouts.length ? '<div style="display:flex;align-items:flex-end;gap:8px;height:130px">' + trendBars + "</div>" : '<p class="small">Belum ada tryout.</p>') +
        "</div>" +
      "</div>" +
      '<div class="section-head"><h2>Semua percobaan</h2><span class="small">' + attempts.length + " entri</span></div>" +
      '<div class="tbl-wrap history"><table><thead><tr><th>Waktu</th><th>Mode</th><th>Materi</th><th>Skor</th><th>Capaian</th><th>Durasi</th><th></th></tr></thead><tbody>' + rows + "</tbody></table></div>";
  }

  window.Hasil = { render: render, renderRiwayat: renderRiwayat };
})();
