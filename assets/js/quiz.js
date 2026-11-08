/* ============================================================
   Quiz — CAT tryout, latihan per materi, timer, autosave
   ============================================================ */
(function () {
  "use strict";

  var TRYOUT_SECONDS = 90 * 60;
  var timerId = null;
  var keyHandler = null;
  var QINDEX = null;

  function bank(mode) {
    return mode === "tryout" ? (window.SOAL_TRYOUT || []) : (window.SOAL_LATIHAN || []);
  }

  function questionById(id) {
    if (!QINDEX) {
      QINDEX = {};
      (window.SOAL_TRYOUT || []).concat(window.SOAL_LATIHAN || []).forEach(function (q) { QINDEX[q.id] = q; });
    }
    return QINDEX[id] || null;
  }

  function uid() {
    return "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function materiName(id) {
    var m = (window.UPKP_MATERI || {})[id];
    return m ? m.judul : id;
  }

  function badgeFor(k) { return "badge-" + String(k).toLowerCase(); }

  /* ---------- briefing ---------- */

  function renderTryoutBriefing() {
    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "CAT Tryout" }]);
    UI.setNav("tryout");
    var session = Store.getSession();
    var active = session && session.mode === "tryout" && !session.finished;
    var attempts = Store.attempts().filter(function (a) { return a.mode === "tryout"; });
    var best = 0;
    attempts.forEach(function (a) { best = Math.max(best, a.score.benar); });

    var rows = App.BLUEPRINT.map(function (g) {
      return '<tr><td><span class="badge ' + App.KELOMPOK[g.key].badge + '">' + g.key + "</span></td><td>" + g.nama + "</td><td class=\"num\">" + g.total + "</td></tr>";
    }).join("");

    document.getElementById("view").innerHTML =
      (active ? '<div class="resume-banner">' + UI.icon("clock", 17) + "<span>Ada tryout yang belum selesai. Waktu tetap berjalan.</span><span class=\"spacer\"></span><a class=\"btn btn-sm btn-primary\" href=\"#/sesi\">Lanjutkan</a><button class=\"btn btn-sm btn-ghost\" id=\"dropSession\">Batalkan</button></div>" : "") +
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Simulasi resmi</span><h1 class="h1" style="margin-top:8px">CAT Tryout — 100 soal</h1>' +
      '<p class="lede" style="margin-top:8px">Simulasi lengkap dengan komposisi resmi UPKP Tingkat 3, timer 90 menit, dan pembahasan mendalam setelah submit.</p></div></div>' +
      '<div class="split">' +
        '<div class="card card-pad">' +
          '<div class="grid grid-3" style="gap:10px;margin-bottom:18px">' +
            '<div class="stat" style="border:0;padding:0"><span class="k">Jumlah soal</span><span class="v">100</span></div>' +
            '<div class="stat" style="border:0;padding:0"><span class="k">Waktu</span><span class="v">90<small> mnt</small></span></div>' +
            '<div class="stat" style="border:0;padding:0"><span class="k">Penilaian</span><span class="v">1<small> / soal</small></span></div>' +
          "</div>" +
          '<h2 class="h3" style="margin-bottom:10px">Aturan pengerjaan</h2>' +
          '<ul class="small" style="line-height:1.8">' +
            "<li>Timer berjalan sejak tryout dimulai dan <b>tidak bisa dijeda</b>.</li>" +
            "<li>Jawaban tersimpan otomatis di perangkat. Sesi bisa dilanjutkan jika halaman tertutup.</li>" +
            "<li>Tidak ada pengurangan nilai untuk jawaban salah.</li>" +
            "<li>Anda dapat menandai soal <b>ragu-ragu</b> dan berpindah bebas antar soal.</li>" +
            "<li>Saat waktu habis, jawaban dikumpulkan otomatis.</li>" +
            "<li>Pembahasan terbuka setelah tryout selesai.</li>" +
          "</ul>" +
          '<div class="result-actions">' +
            '<button class="btn btn-primary btn-lg" id="startTryout">' + UI.icon("play", 17) + (active ? "Mulai ulang tryout" : "Mulai Tryout Sekarang") + "</button>" +
            (attempts.length ? '<a class="btn btn-lg" href="#/riwayat">' + UI.icon("chart", 17) + " Lihat riwayat</a>" : "") +
          "</div>" +
          (attempts.length ? '<p class="tiny" style="margin-top:10px">Tryout terbaik: <b>' + best + " / 100</b> · " + attempts.length + " percobaan</p>" : "") +
        "</div>" +
        '<div class="stack">' +
          '<div class="card card-pad"><span class="eyebrow">Komposisi</span><div class="tbl-wrap" style="margin-top:12px"><table class="tbl"><thead><tr><th>Kel.</th><th>Kelompok</th><th style="text-align:center">Soal</th></tr></thead><tbody>' + rows +
          '<tr><td></td><td style="font-weight:700">Total</td><td class="num" style="font-weight:800">100</td></tr></tbody></table></div></div>' +
          '<div class="card card-pad"><span class="eyebrow">Cakupan materi</span><div class="stack" style="margin-top:10px">' +
            App.BLUEPRINT.map(function (g) {
              return '<div><div class="tiny" style="margin-bottom:3px;font-weight:700;letter-spacing:.08em">' + g.key + "</div><div class=\"pill-list\">" +
                g.items.map(function (it) { return '<span class="pill">' + it.nama + "</span>"; }).join("") + "</div></div>";
            }).join("") +
          "</div></div>" +
        "</div>" +
      "</div>";

    var start = document.getElementById("startTryout");
    if (start) start.addEventListener("click", function () { begin("tryout", null); });
    var drop = document.getElementById("dropSession");
    if (drop) drop.addEventListener("click", function () {
      UI.confirm({
        title: "Batalkan sesi tryout?",
        body: "Jawaban pada sesi ini akan hilang dan tidak masuk riwayat.",
        confirmText: "Ya, batalkan",
        danger: true,
        onConfirm: function () { Store.clearSession(); UI.toast("Sesi dibatalkan"); route(); }
      });
    });
  }

  /* ---------- latihan index ---------- */

  function renderLatihanIndex() {
    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Latihan per Materi" }]);
    UI.setNav("latihan");
    var groups = App.BLUEPRINT.map(function (g) { return g.key; });
    var bankAll = bank("latihan");
    var counts = {};
    bankAll.forEach(function (q) { counts[q.materi] = (counts[q.materi] || 0) + 1; });
    var attempts = Store.attempts().filter(function (a) { return a.mode === "latihan"; });
    var lastByMateri = {};
    attempts.forEach(function (a) { if (!lastByMateri[a.materi]) lastByMateri[a.materi] = a; });

    var sections = groups.map(function (g) {
      var items = App.BLUEPRINT.filter(function (x) { return x.key === g; })[0].items;
      return '<div class="section-head"><div><h2><span class="badge ' + App.KELOMPOK[g].badge + '">' + g + "</span> " + App.KELOMPOK[g].nama + "</h2></div></div>" +
        '<div class="section-picker">' + items.map(function (it) {
          var n = counts[it.id] || 0;
          var last = lastByMateri[it.id];
          return '<button class="pick" data-latihan="' + it.id + '">' +
            '<span class="p-mark">' + n + "</span>" +
            "<span style=\"flex:1\"><b>" + it.nama + "</b><span>" + n + " soal HOTS · pembahasan per opsi</span></span>" +
            (last ? '<span class="badge badge-ok">' + last.score.benar + "/" + last.score.total + "</span>" : '<span class="p-go">→</span>') +
          "</button>";
        }).join("") + "</div>";
    }).join("");

    document.getElementById("view").innerHTML =
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Latihan terarah</span><h1 class="h1" style="margin-top:8px">Latihan per Materi</h1>' +
      '<p class="lede" style="margin-top:8px">Pilih satu materi, jawab, lalu baca pembahasan yang menjelaskan alasan setiap opsi — plus variasi soal yang mungkin muncul.</p></div>' +
      '<div class="row"><span class="chip">' + bankAll.length + " soal latihan</span></div></div>" + sections;

    document.querySelectorAll("[data-latihan]").forEach(function (b) {
      b.addEventListener("click", function () { begin("latihan", b.getAttribute("data-latihan")); });
    });
  }

  /* ---------- session lifecycle ---------- */

  function begin(mode, materiId) {
    var active = Store.getSession();
    if (active && !active.finished) {
      var label = active.mode === "tryout"
        ? "Tryout"
        : 'Latihan "' + (active.materiNama || "") + '"';
      UI.confirm({
        title: "Ganti sesi yang sedang berjalan?",
        body: label + " yang sedang berjalan akan dibuang dan tidak dinilai.",
        confirmText: "Ya, ganti sesi",
        cancelText: "Batal",
        danger: true,
        onConfirm: function () { startSession(mode, materiId); }
      });
      return;
    }
    startSession(mode, materiId);
  }

  function startSession(mode, materiId) {
    var qs = bank(mode).filter(function (q) { return mode === "tryout" || q.materi === materiId; });
    if (!qs.length) { UI.toast("Belum ada soal untuk materi ini", "bad"); return; }
    var now = Date.now();
    var session = {
      id: uid(),
      mode: mode,
      materi: materiId,
      materiNama: materiId ? materiName(materiId) : "Tryout Penuh",
      qids: qs.map(function (q) { return q.id; }),
      answers: {},
      flags: {},
      index: 0,
      startedAt: now,
      endsAt: mode === "tryout" ? now + TRYOUT_SECONDS * 1000 : null,
      finished: false
    };
    Store.saveSession(session);
    location.hash = "#/sesi";
    if ((location.hash || "").indexOf("#/sesi") !== -1) renderSession();
  }

  function attemptFromSession(s) {
    var benar = 0, salah = 0, kosong = 0;
    var perKelompok = {}, perMateri = {};
    s.qids.forEach(function (id) {
      var q = questionById(id);
      if (!q) return;
      var picked = s.answers[id];
      var k = q.kelompok, m = q.materi;
      if (!perKelompok[k]) perKelompok[k] = { total: 0, benar: 0 };
      if (!perMateri[m]) perMateri[m] = { total: 0, benar: 0, nama: materiName(m) };
      perKelompok[k].total++; perMateri[m].total++;
      if (!picked) kosong++;
      else if (picked === q.kunci) { benar++; perKelompok[k].benar++; perMateri[m].benar++; }
      else salah++;
    });
    var finishedAt = Date.now();
    var duration = Math.min(
      Math.round((finishedAt - s.startedAt) / 1000),
      s.mode === "tryout" ? TRYOUT_SECONDS : 24 * 3600
    );
    return {
      id: s.id,
      mode: s.mode,
      materi: s.materi,
      materiNama: s.materiNama,
      startedAt: s.startedAt,
      finishedAt: finishedAt,
      durationSec: duration,
      qids: s.qids,
      answers: s.answers,
      flags: s.flags || {},
      score: { total: s.qids.length, benar: benar, salah: salah, kosong: kosong, perKelompok: perKelompok, perMateri: perMateri }
    };
  }

  function submit(auto) {
    var s = Store.getSession();
    if (!s) { location.hash = "#/"; return; }
    var answered = Object.keys(s.answers).length;
    var unanswered = s.qids.length - answered;
    function doFinish() {
      var attempt = attemptFromSession(s);
      Store.addAttempt(attempt);
      Store.clearSession();
      stopTimer();
      location.hash = "#/hasil/" + attempt.id;
      if ((location.hash || "").indexOf("#/hasil/") !== -1) Hasil.render(attempt.id);
    }
    if (auto) {
      doFinish();
      UI.toast("Waktu habis — jawaban dikumpulkan otomatis", "warn");
      return;
    }
    UI.confirm({
      title: "Kumpulkan jawaban?",
      body: "Anda telah menjawab <b>" + answered + "</b> dari " + s.qids.length + " soal." +
        (unanswered ? " Masih ada <b>" + unanswered + " soal kosong</b>." : " Semua soal sudah dijawab.") +
        " Jawaban tidak dapat diubah setelah dikumpulkan.",
      confirmText: "Ya, kumpulkan",
      cancelText: "Periksa lagi",
      onConfirm: doFinish
    });
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  /* ---------- timer ---------- */

  function startTimer(s) {
    stopTimer();
    if (s.mode !== "tryout") return;
    function tick() {
      var el = document.getElementById("timer");
      var remaining = Math.max(0, Math.floor((s.endsAt - Date.now()) / 1000));
      if (el) {
        el.querySelector("[data-time]").textContent = UI.fmtClock(remaining);
        el.classList.toggle("warn", remaining <= 600 && remaining > 300);
        el.classList.toggle("danger", remaining <= 300);
      }
      if (remaining <= 0) {
        stopTimer();
        if (Store.getSession() && Store.getSession().id === s.id) {
          if (document.getElementById("timer")) submit(true);
        }
      }
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  /* ---------- render session ---------- */

  function renderSession() {
    var s = Store.getSession();
    UI.setNav(s && s.mode === "latihan" ? "latihan" : "tryout");
    if (!s || s.finished) {
      document.getElementById("view").innerHTML =
        '<div class="empty" style="margin-top:30px"><div class="e-icon">' + UI.icon("clock", 26) + "</div>" +
        "<h3>Tidak ada sesi aktif</h3><p>Mulai tryout penuh atau pilih materi untuk latihan.</p>" +
        '<div class="row" style="justify-content:center"><a class="btn btn-primary" href="#/tryout">Mulai Tryout</a><a class="btn" href="#/latihan">Latihan per Materi</a></div></div>';
      UI.crumbs([{ label: "Sesi" }]);
      stopTimer();
      return;
    }
    if (s.mode === "tryout" && s.endsAt && Date.now() >= s.endsAt) {
      submit(true);
      return;
    }
    if (s.index >= s.qids.length) s.index = s.qids.length - 1;

    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: s.mode === "tryout" ? "Tryout" : "Latihan" }, { label: s.materiNama }]);

    var q = questionById(s.qids[s.index]);
    var answeredCount = Object.keys(s.answers).length;

    document.getElementById("view").innerHTML =
      '<div class="quiz-top">' +
        '<div class="qt-left"><span class="badge ' + (s.mode === "tryout" ? "badge-twk" : "badge-tkt") + '">' + (s.mode === "tryout" ? "TRYOUT" : "LATIHAN") + "</span>" +
          '<div><div class="qt-title">' + UI.esc(s.materiNama) + '</div><div class="qt-sub">Soal ' + (s.index + 1) + " dari " + s.qids.length + " · " + answeredCount + " terjawab</div></div></div>" +
        '<div class="row" style="gap:8px">' +
          (s.mode === "tryout" ? '<div class="timer" id="timer" role="timer" aria-label="Sisa waktu">' + UI.icon("clock", 15) + '<span data-time>--:--</span></div>' : '<span class="chip">' + UI.icon("bulb", 14) + "Pembahasan langsung</span>") +
          '<button class="btn btn-sm btn-primary" id="submitBtn">Kumpulkan</button>' +
        "</div>" +
      "</div>" +
      '<div class="quiz-shell">' +
        '<div id="qcard" class="qcard card"></div>' +
        '<aside class="navigator card" aria-label="Navigasi soal">' +
          '<div class="nav-title">Navigasi soal</div>' +
          '<div class="nav-grid" id="navGrid"></div>' +
          '<div class="nav-legend"><span><i class="dot a"></i>Terjawab</span><span><i class="dot f"></i>Ragu-ragu</span><span><i class="dot"></i>Belum</span></div>' +
          '<div class="nav-progress"><div class="bar"><i id="navBar" style="width:0%"></i></div><div class="lbl"><span id="navLbl">0 / ' + s.qids.length + "</span><span>terjawab</span></div></div>" +
          '<button class="btn btn-sm btn-block btn-ghost" id="flagBtn" style="margin-top:12px">' + UI.icon("flag", 15) + " Tandai ragu-ragu</button>" +
        "</aside>" +
      "</div>";

    paintQuestion();
    paintNavigator();
    startTimer(s);
    bindSessionEvents();
    bindKeyboard();
  }

  function paintQuestion() {
    var s = Store.getSession();
    if (!s) return;
    var q = questionById(s.qids[s.index]);
    var host = document.getElementById("qcard");
    if (!q || !host) return;

    var picked = s.answers[q.id] || null;
    var isLatihan = s.mode === "latihan";
    var locked = isLatihan && !!picked;
    var last = s.index === s.qids.length - 1;

    host.innerHTML =
      '<div class="qhead"><span class="qno">Soal ' + (s.index + 1) + "</span>" +
        '<span class="badge ' + badgeFor(q.kelompok) + '">' + q.kelompok + "</span>" +
        '<span class="badge">' + UI.esc(q.materiLabel || materiName(q.materi)) + "</span>" +
        '<span class="qtype" style="margin-left:auto">' + UI.esc(q.tipe || "HOTS") + "</span>" +
      "</div>" +
      (q.stimulus ? '<div class="stimulus"><span class="s-label">Stimulus</span>' + q.stimulus + "</div>" : "") +
      '<div class="qtext">' + q.pertanyaan + "</div>" +
      '<div class="options" role="radiogroup" aria-label="Pilihan jawaban">' + UI.optionList(q, picked, { locked: locked }) + "</div>" +
      (isLatihan && picked ? UI.feedbackHTML(q, picked) : "") +
      '<div class="qfoot">' +
        '<button class="btn btn-sm" id="prevBtn"' + (s.index === 0 ? " disabled" : "") + ">" + UI.icon("arrowLeft", 15) + " Sebelumnya</button>" +
        (s.index === 0 ? "" : "") +
        (isLatihan && picked && last
          ? '<button class="btn btn-sm btn-primary" id="finishBtn">' + UI.icon("check", 15) + " Selesaikan latihan</button>"
          : (last
            ? '<button class="btn btn-sm btn-primary" id="nextBtn">' + (isLatihan ? "Selesai" : "Soal terakhir") + " " + UI.icon("arrowRight", 15) + "</button>"
            : '<button class="btn btn-sm btn-primary" id="nextBtn">Berikutnya ' + UI.icon("arrowRight", 15) + "</button>")) +
        '<span class="hint" style="margin-left:auto">' +
          (isLatihan ? (picked ? "Pembahasan terbuka — baca variasi soalnya." : "Pilih jawaban untuk melihat pembahasan.") : "Pilih jawaban, lalu lanjut. Pembahasan di akhir.") +
        "</span>" +
      "</div>";

    host.querySelectorAll("[data-opt]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (isLatihan && Store.getSession().answers[q.id]) return;
        var cur = Store.getSession();
        cur.answers[q.id] = b.getAttribute("data-opt");
        Store.saveSession(cur);
        paintQuestion();
        paintNavigator();
        if (isLatihan) UI.scrollTop();
      });
    });

    var prev = document.getElementById("prevBtn");
    if (prev) prev.addEventListener("click", function () { go(-1); });
    var next = document.getElementById("nextBtn");
    if (next) next.addEventListener("click", function () {
      if (s.index < s.qids.length - 1) go(1);
      else if (isLatihan) submit();
      else UI.toast("Ini soal terakhir. Periksa jawaban lalu kumpulkan.", "warn");
    });
    var finish = document.getElementById("finishBtn");
    if (finish) finish.addEventListener("click", function () { submit(); });
  }

  function paintNavigator() {
    var s = Store.getSession();
    if (!s) return;
    var grid = document.getElementById("navGrid");
    if (!grid) return;
    grid.innerHTML = s.qids.map(function (id, i) {
      var cls = "";
      if (s.answers[id]) cls += " answered";
      if (s.flags && s.flags[id]) cls += " flagged";
      if (i === s.index) cls += " current";
      return '<button data-jump="' + i + '" class="' + cls + '" aria-label="Soal ' + (i + 1) + (s.answers[id] ? ", terjawab" : ", belum") + (s.flags && s.flags[id] ? ", ragu-ragu" : "") + '">' + (i + 1) + "</button>";
    }).join("");
    grid.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        var cur = Store.getSession();
        cur.index = Number(b.getAttribute("data-jump"));
        Store.saveSession(cur);
        renderSession();
        UI.scrollTop();
      });
    });
    var answered = Object.keys(s.answers).length;
    var bar = document.getElementById("navBar");
    var lbl = document.getElementById("navLbl");
    if (bar) bar.style.width = Math.round((answered / s.qids.length) * 100) + "%";
    if (lbl) lbl.textContent = answered + " / " + s.qids.length;
    var flagBtn = document.getElementById("flagBtn");
    if (flagBtn) {
      var qid = s.qids[s.index];
      var on = s.flags && s.flags[qid];
      flagBtn.innerHTML = UI.icon("flag", 15) + (on ? " Hapus tanda ragu" : " Tandai ragu-ragu");
      flagBtn.classList.toggle("btn-brass", !!on);
    }
  }

  function go(delta) {
    var s = Store.getSession();
    if (!s) return;
    var i = s.index + delta;
    if (i < 0 || i >= s.qids.length) return;
    s.index = i;
    Store.saveSession(s);
    renderSession();
    UI.scrollTop();
  }

  function bindSessionEvents() {
    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn) submitBtn.addEventListener("click", function () { submit(false); });
    var flag = document.getElementById("flagBtn");
    if (flag) flag.addEventListener("click", function () {
      var s = Store.getSession();
      var id = s.qids[s.index];
      s.flags = s.flags || {};
      if (s.flags[id]) delete s.flags[id]; else s.flags[id] = true;
      Store.saveSession(s);
      paintNavigator();
      UI.toast(s.flags[id] ? "Ditandai ragu-ragu" : "Tanda ragu dihapus");
    });
  }

  function bindKeyboard() {
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!document.getElementById("qcard")) return;
      var s = Store.getSession();
      if (!s) return;
      var q = questionById(s.qids[s.index]);
      if (!q) return;
      var key = e.key.toUpperCase();
      if (/^[1-5]$/.test(key)) {
        var letter = UI.letters[Number(key) - 1];
        if (q.opsi[letter]) {
          var isLatihan = s.mode === "latihan";
          if (isLatihan && s.answers[q.id]) return;
          s.answers[q.id] = letter;
          Store.saveSession(s);
          paintQuestion(); paintNavigator();
          if (isLatihan) UI.scrollTop();
          e.preventDefault();
        }
      } else if (key === "ARROWRIGHT" || e.key === "ArrowRight") {
        if (s.index < s.qids.length - 1) { go(1); e.preventDefault(); }
      } else if (e.key === "ArrowLeft") {
        if (s.index > 0) { go(-1); e.preventDefault(); }
      } else if (key === "F") {
        var id = s.qids[s.index];
        s.flags = s.flags || {};
        if (s.flags[id]) delete s.flags[id]; else s.flags[id] = true;
        Store.saveSession(s); paintNavigator();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", keyHandler);
  }

  window.Quiz = {
    renderTryoutBriefing: renderTryoutBriefing,
    renderLatihanIndex: renderLatihanIndex,
    renderSession: renderSession,
    begin: begin,
    questionById: questionById,
    submit: submit,
    stopTimer: stopTimer
  };
})();
