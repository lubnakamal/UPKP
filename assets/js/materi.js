/* ============================================================
   Materi — index, reader, table of contents, progress
   ============================================================ */
(function () {
  "use strict";

  var filter = "SEMUA";
  var query = "";
  var spy = null;

  function list() {
    var src = window.UPKP_MATERI || {};
    return Object.keys(src).map(function (k) { return src[k]; })
      .sort(function (a, b) { return a.urutan - b.urutan; });
  }

  function kelompokName(k) {
    if (k === "PENGAYAAN") return "Pengayaan & Field Report";
    return (window.App && App.KELOMPOK[k] ? App.KELOMPOK[k].nama : k);
  }

  function badgeClass(k) {
    return "badge-" + String(k).toLowerCase();
  }

  function card(m) {
    var read = Store.isRead(m.id);
    return '<a class="module-card" href="#/materi/' + m.id + '">' +
      '<div class="top"><span class="module-num">' + String(m.urutan).padStart(2, "0") + "</span>" +
      '<span class="badge ' + badgeClass(m.kelompok) + '">' + (m.kelompok === "PENGAYAAN" ? "FR" : m.kelompok) + "</span></div>" +
      "<h3>" + UI.esc(m.judul) + "</h3>" +
      "<p>" + UI.esc(m.ringkas) + "</p>" +
      '<div class="meta"><span>' + UI.icon("clock", 13) + " " + UI.esc(m.estimasi || "20 menit") + " · " + m.sections.length + " bagian</span>" +
      (read ? '<span class="badge badge-ok">Selesai</span>' : '<span class="arrow">→</span>') +
      "</div></a>";
  }

  function renderIndex() {
    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Materi Pembelajaran" }]);
    UI.setNav("materi");
    var all = list();
    var groups = ["TWK", "TKT", "TSI", "TKP", "PENGAYAAN"];
    var filtered = all.filter(function (m) {
      var okF = filter === "SEMUA" || m.kelompok === filter;
      if (!okF) return false;
      if (!query) return true;
      var hay = (m.judul + " " + m.ringkas + " " + JSON.stringify(m.sections)).toLowerCase();
      return hay.indexOf(query.toLowerCase()) !== -1;
    });

    var body = "";
    if (!filtered.length) {
      body = '<div class="empty"><div class="e-icon">' + UI.icon("search", 24) + '</div><h3>Tidak ada materi yang cocok</h3><p>Coba kata kunci lain atau ubah filter kelompok ujian.</p><button class="btn" id="clearFilter">Hapus filter</button></div>';
    } else {
      groups.forEach(function (g) {
        var items = filtered.filter(function (m) { return m.kelompok === g; });
        if (!items.length) return;
        body += '<div class="section-head"><div><h2>' + kelompokName(g) + "</h2>" +
          '<p class="small" style="margin:4px 0 0">' + items.length + " modul</p></div>" +
          (g === "PENGAYAAN" ? '<span class="badge badge-warn">Prioritas bocoran</span>' : "") + "</div>" +
          '<div class="module-grid">' + items.map(card).join("") + "</div>";
      });
    }

    document.getElementById("view").innerHTML =
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Perpustakaan</span>' +
      '<h1 class="h1" style="margin-top:8px">Materi Pembelajaran</h1>' +
      '<p class="lede" style="margin-top:8px">Empat belas modul yang diperluas dari kisi-kisi, field report, dan bocoran — bukan sekadar daftar poin.</p></div>' +
      '<div class="row"><span class="chip">' + Store.readCount() + " / " + all.length + " selesai</span></div></div>" +
      '<div class="filterbar">' +
        '<div class="search">' + UI.icon("search", 16) +
          '<input id="materiSearch" type="search" placeholder="Cari materi, istilah, atau regulasi…" value="' + UI.esc(query) + '" aria-label="Cari materi">' +
        "</div>" +
        '<div class="seg" role="tablist" aria-label="Filter kelompok">' +
          ["SEMUA", "TWK", "TKT", "TSI", "TKP", "PENGAYAAN"].map(function (k) {
            return '<button data-filter="' + k + '" class="' + (filter === k ? "on" : "") + '" role="tab" aria-selected="' + (filter === k) + '">' + (k === "PENGAYAAN" ? "FR" : k) + "</button>";
          }).join("") +
        "</div>" +
      "</div>" + body;

    var input = document.getElementById("materiSearch");
    if (input) {
      input.addEventListener("input", function () {
        query = input.value;
        var pos = input.selectionStart;
        renderIndex();
        var ni = document.getElementById("materiSearch");
        if (ni) { ni.focus(); try { ni.setSelectionRange(pos, pos); } catch (e) {} }
      });
    }
    document.querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.getAttribute("data-filter");
        renderIndex();
      });
    });
    var clear = document.getElementById("clearFilter");
    if (clear) clear.addEventListener("click", function () { filter = "SEMUA"; query = ""; renderIndex(); });
  }

  function renderDetail(id) {
    var m = (window.UPKP_MATERI || {})[id];
    if (!m) return;
    Store.setLastMaterial(id);
    var all = list();
    var idx = all.findIndex(function (x) { return x.id === id; });
    var prev = idx > 0 ? all[idx - 1] : null;
    var next = idx < all.length - 1 ? all[idx + 1] : null;
    var isRead = Store.isRead(id);

    var sectionsHTML = m.sections.map(function (s, i) {
      return '<h2 id="bagian-' + (i + 1) + '">' + UI.esc(s.judul) + "</h2>" + s.html;
    }).join("");

    var toc = m.sections.map(function (s, i) {
      return '<li><a href="#bagian-' + (i + 1) + '" data-toc="' + (i + 1) + '">' + UI.esc(s.judul) + "</a></li>";
    }).join("");

    var ringkasan = (m.ringkasan && m.ringkasan.length)
      ? '<div class="callout kunci" style="margin-top:32px"><span class="c-label">Ringkasan 1 menit</span><ul style="margin-bottom:0">' +
        m.ringkasan.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul></div>"
      : "";

    var dasar = (m.dasarHukum && m.dasarHukum.length)
      ? '<div class="callout dasar"><span class="c-label">Dasar hukum &amp; rujukan</span><ul style="margin-bottom:0">' +
        m.dasarHukum.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul></div>"
      : "";

    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Materi", href: "#/materi" }, { label: m.judul }]);
    UI.setNav("materi");

    document.getElementById("view").innerHTML =
      '<div class="materi-head">' +
        '<div class="row"><span class="badge ' + badgeClass(m.kelompok) + '">' + (m.kelompok === "PENGAYAAN" ? "PENGAYAAN · FR" : m.kelompok) + "</span>" +
        '<span class="tiny">Modul ' + String(m.urutan).padStart(2, "0") + " dari " + all.length + "</span>" +
        (isRead ? '<span class="badge badge-ok">Sudah dibaca</span>' : "") + "</div>" +
        '<h1 class="h1">' + UI.esc(m.judul) + "</h1>" +
        '<p class="lede" style="margin:0 0 14px">' + UI.esc(m.ringkas) + "</p>" +
        '<div class="materi-meta">' +
          "<span>" + UI.icon("clock", 14) + UI.esc(m.estimasi || "20 menit") + " baca</span>" +
          "<span>" + UI.icon("book", 14) + m.sections.length + " bagian</span>" +
          "<span>" + UI.icon("target", 14) + "TWK · TKT · TSI · TKP</span>" +
        "</div>" +
      "</div>" +
      '<div class="reader">' +
        '<div class="reader-body">' +
          (m.tujuan && m.tujuan.length
            ? '<div class="callout dasar" style="margin-top:0"><span class="c-label">Tujuan belajar</span><ul style="margin-bottom:0">' +
              m.tujuan.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>"
            : "") +
          '<div class="prose" id="proseBody">' + sectionsHTML + ringkasan + dasar + "</div>" +
          '<div class="reader-foot">' +
            '<label class="done-check"><input type="checkbox" id="markRead"' + (isRead ? " checked" : "") + "> Tandai modul ini selesai</label>" +
            '<div class="next-prev">' +
              (prev ? '<a class="btn btn-sm" href="#/materi/' + prev.id + '">' + UI.icon("arrowLeft", 15) + " Sebelumnya</a>" : "") +
              (next ? '<a class="btn btn-sm" href="#/materi/' + next.id + '">Berikutnya ' + UI.icon("arrowRight", 15) + "</a>" : "") +
            "</div>" +
          "</div>" +
          '<div class="card card-pad" style="margin-top:18px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">' +
            '<div style="flex:1;min-width:220px"><b style="font-family:var(--serif);font-size:17px">Uji pemahaman modul ini</b>' +
            '<p class="small" style="margin:3px 0 0">Latihan singkat dengan pembahasan per opsi dan variasi soal.</p></div>' +
            '<a class="btn btn-primary" href="#/latihan">' + UI.icon("play", 15) + " Mulai latihan</a>" +
          "</div>" +
        "</div>" +
        '<aside class="toc" aria-label="Daftar isi"><div class="toc-title">Daftar isi</div><ol>' + toc + "</ol>" +
          '<div class="read-progress">' + Store.readCount() + " dari " + all.length + " modul selesai</div>" +
        "</aside>" +
      "</div>";

    var mark = document.getElementById("markRead");
    if (mark) mark.addEventListener("change", function () {
      var nowRead = Store.toggleRead(id);
      UI.toast(nowRead ? "Modul ditandai selesai" : "Tanda selesai dihapus");
      var badgeHost = document.querySelector(".materi-head .row");
      if (nowRead) {
        if (badgeHost && !badgeHost.querySelector(".badge-ok")) {
          var b = document.createElement("span");
          b.className = "badge badge-ok";
          b.textContent = "Sudah dibaca";
          badgeHost.appendChild(b);
        }
      } else if (badgeHost) {
        var old = badgeHost.querySelector(".badge-ok");
        if (old) old.remove();
      }
    });

    document.querySelectorAll("[data-toc]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById("bagian-" + a.getAttribute("data-toc"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    setupScrollSpy();
  }

  function setupScrollSpy() {
    if (spy) { spy.disconnect(); spy = null; }
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-toc]"));
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) { map["bagian-" + a.getAttribute("data-toc")] = a; });
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          var act = map[en.target.id];
          if (act) act.classList.add("active");
        }
      });
    }, { rootMargin: "-90px 0px -70% 0px", threshold: 0 });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  window.Materi = { renderIndex: renderIndex, renderDetail: renderDetail, list: list };
})();
