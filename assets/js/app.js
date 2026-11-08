/* ============================================================
   App — router, dashboard, settings
   ============================================================ */
(function () {
  "use strict";

  var BLUEPRINT = [
    {
      key: "TWK", nama: "Tes Wawasan Kebangsaan", total: 30,
      items: [
        { id: "pancasila", nama: "Pancasila", n: 10 },
        { id: "uud", nama: "UUD 1945", n: 10 },
        { id: "sejarah", nama: "Sejarah Indonesia", n: 5 },
        { id: "bindo", nama: "Bahasa Indonesia", n: 5 }
      ]
    },
    {
      key: "TKT", nama: "Tes Kompetensi Teknis", total: 25,
      items: [
        { id: "kepegawaian", nama: "Peraturan Kepegawaian", n: 10 },
        { id: "pelayanan", nama: "Pelayanan Publik", n: 5 },
        { id: "good-governance", nama: "Good Governance", n: 5 },
        { id: "kebijakan", nama: "Kebijakan Publik", n: 5 }
      ]
    },
    {
      key: "TSI", nama: "Tes Substansi Instansi", total: 30,
      items: [
        { id: "renstra", nama: "Renstra & Perencanaan Pembangunan Daerah", n: 15 },
        { id: "sotk", nama: "SOTK", n: 15 }
      ]
    },
    {
      key: "TKP", nama: "Tes Kompetensi Penunjang", total: 15,
      items: [
        { id: "inggris", nama: "Bahasa Inggris", n: 10 },
        { id: "literasi", nama: "Literasi Digital", n: 5 }
      ]
    }
  ];

  var KELOMPOK = {
    TWK: { nama: "Tes Wawasan Kebangsaan", badge: "badge-twk" },
    TKT: { nama: "Tes Kompetensi Teknis", badge: "badge-tkt" },
    TSI: { nama: "Tes Substansi Instansi", badge: "badge-tsi" },
    TKP: { nama: "Tes Kompetensi Penunjang", badge: "badge-tkp" }
  };

  var BOCORAN = [
    { t: "Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani", m: "fr-bocoran", tag: "Bocoran + FR" },
    { t: "JPT Madya, JPT Pratama, Administrator, Pengawas", m: "kepegawaian", tag: "Bocoran" },
    { t: "Kenaikan pangkat saat angka kredit terpenuhi", m: "kepegawaian", tag: "Bocoran" },
    { t: "RPJMD, RPJPD, Renstra, Musrenbang", m: "renstra", tag: "Bocoran" },
    { t: "PLH, PJ, dan PLT — beda dan contohnya", m: "kepegawaian", tag: "Bocoran" },
    { t: "Pemberhentian dengan hormat tidak atas permintaan sendiri", m: "kepegawaian", tag: "Bocoran" },
    { t: "Pengamalan sila ke-2 dan ke-5 yang sering tertukar", m: "pancasila", tag: "Bocoran" },
    { t: "Isi Pembukaan UUD 1945 alinea 1–4", m: "uud", tag: "Bocoran" },
    { t: "Duta & konsul diangkat oleh siapa; pasal-pasal UUD", m: "uud", tag: "Bocoran" },
    { t: "Dewan era Soeharto & urutan presiden pasca-reformasi", m: "sejarah", tag: "Bocoran" },
    { t: "Sekretaris DPRD termasuk jabatan apa", m: "fr-bocoran", tag: "Bocoran + FR" },
    { t: "Gubernur sebagai wakil pemerintah pusat", m: "fr-bocoran", tag: "Bocoran + FR" },
    { t: "Jumlah kabupaten/kota di Jawa Tengah", m: "fr-bocoran", tag: "Bocoran" },
    { t: "Badan vs Dinas: pelaksana atau penunjang?", m: "sotk", tag: "Bocoran + FR" },
    { t: "Literasi digital: studi kasus HOTS dan 4 pilar", m: "literasi", tag: "Bocoran + FR" },
    { t: "Grammar in/on/at, tenses, countable/uncountable", m: "inggris", tag: "Bocoran" }
  ];

  function materis() {
    var src = window.UPKP_MATERI || {};
    return Object.keys(src).map(function (k) { return src[k]; }).sort(function (a, b) { return a.urutan - b.urutan; });
  }

  function findMateri(id) {
    return (window.UPKP_MATERI || {})[id] || null;
  }

  function allQuestions() {
    return (window.SOAL_TRYOUT || []).concat(window.SOAL_LATIHAN || []);
  }

  function readiness() {
    var total = materis().length || 1;
    var readPct = (Store.readCount() / total) * 100;
    var attempts = Store.attempts().filter(function (a) { return a.mode === "tryout"; });
    var best = 0;
    attempts.forEach(function (a) { best = Math.max(best, (a.score.benar / a.score.total) * 100); });
    if (!attempts.length) return Math.round(readPct * 0.75);
    return Math.round(readPct * 0.45 + best * 0.55);
  }

  function totalAnswered() {
    var n = 0;
    Store.attempts().forEach(function (a) { n += (a.score.benar + a.score.salah); });
    return n;
  }

  function resumeBanner() {
    var s = Store.getSession();
    if (!s || s.finished) return "";
    var label = s.mode === "tryout" ? "Tryout Penuh" : "Latihan " + (s.materiNama || "");
    return '<div class="resume-banner">' + UI.icon("clock", 17) +
      "<span>Sesi <b>" + UI.esc(label) + "</b> masih berjalan — " +
      (s.mode === "tryout" ? "waktu terus berjalan." : "jawaban sudah tersimpan otomatis.") + "</span>" +
      '<span class="spacer"></span>' +
      '<a class="btn btn-sm btn-primary" href="#/sesi">Lanjutkan</a>' +
      '<button class="btn btn-sm btn-ghost" data-abandon-session>Akhiri sesi</button>' +
      "</div>";
  }

  function noticeBanner() {
    return '<aside class="official-notice" role="note" aria-label="Pemberitahuan penting">' +
      '<div class="on-badge">' + UI.icon("info", 16) + " Pemberitahuan</div>" +
      '<p class="on-title">Bukan Aplikasi Resmi BKN</p>' +
      '<p class="on-text"><strong>Hanya buatan individu.</strong> Aplikasi ini tidak berafiliasi dengan Badan Kepegawaian Negara (BKN) maupun instansi pemerintah mana pun.</p>' +
      '<div class="on-author">' +
        '<span class="on-author-label">Konseptor &amp; Pengembang</span>' +
        '<strong class="on-author-name">Mohammad Lubna Kamal, A.Md.Kom.</strong>' +
        '<span class="on-author-unit">(RSUD dr. M. Ashari Pemalang)</span>' +
      "</div>" +
    "</aside>";
  }

  function hero() {
    var m = materis();
    var read = Store.readCount();
    return '<section class="hero">' +
      '<div class="hero-inner">' +
        '<div>' +
          '<span class="eyebrow">UPKP Tingkat 3 · D3 s.d. S3</span>' +
          '<h1 class="display">Belajar terarah,<br>berlatih dengan standar CAT.</h1>' +
          '<p class="lede">' + m.length + ' modul materi yang diperluas dari kisi-kisi resmi, field report, dan bocoran — dipadukan dengan tryout 100 soal HOTS berwaktu serta pembahasan per opsi.</p>' +
          '<div class="hero-meta">' +
            '<span class="chip">' + UI.icon("file", 14) + "100 soal · blueprint resmi</span>" +
            '<span class="chip">' + UI.icon("clock", 14) + "90 menit</span>" +
            '<span class="chip">' + UI.icon("book", 14) + m.length + " modul materi</span>" +
            '<span class="chip">' + UI.icon("layers", 14) + "200 bank soal</span>" +
          "</div>" +
          '<div class="result-actions">' +
            '<a class="btn btn-primary btn-lg" href="#/tryout">' + UI.icon("play", 17) + "Mulai Tryout</a>" +
            '<a class="btn btn-lg" href="#/materi">' + UI.icon("book", 17) + "Jelajahi Materi</a>" +
          "</div>" +
        "</div>" +
        '<div class="readiness">' + UI.ring(readiness()) +
          '<span class="label">Indeks Kesiapan</span>' +
          '<span class="hint">' + read + " dari " + m.length + " modul selesai dibaca<br>+ skor tryout terbaik</span>" +
        "</div>" +
      "</div>" +
    "</section>";
  }

  function stats() {
    var m = materis().length;
    var attempts = Store.attempts();
    var tryouts = attempts.filter(function (a) { return a.mode === "tryout"; });
    var best = 0;
    tryouts.forEach(function (a) { best = Math.max(best, a.score.benar); });
    var latihan = attempts.filter(function (a) { return a.mode === "latihan"; }).length;
    return '<div class="grid grid-4">' +
      '<div class="stat"><span class="k">Modul selesai</span><span class="v">' + Store.readCount() + '<small> / ' + m + "</small></span><span class=\"d\">Tandai selesai setelah membaca</span></div>" +
      '<div class="stat accent"><span class="k">Tryout terbaik</span><span class="v">' + best + '<small> / 100</small></span><span class="d">' + (tryouts.length ? tryouts.length + " percobaan tercatat" : "Belum pernah tryout") + "</span></div>" +
      '<div class="stat"><span class="k">Sesi latihan</span><span class="v">' + latihan + "</span><span class=\"d\">Latihan per materi</span></div>" +
      '<div class="stat"><span class="k">Soal dikerjakan</span><span class="v">' + totalAnswered() + "</span><span class=\"d\">Benar + salah, tanpa penalti</span></div>" +
    "</div>";
  }

  function continueCard() {
    var p = Store.progress();
    var next = p.last ? findMateri(p.last) : null;
    if (!next) {
      var first = materis().filter(function (x) { return !Store.isRead(x.id); })[0] || materis()[0];
      next = first;
    }
    if (!next) return "";
    return '<a class="card card-pad card-hover" href="#/materi/' + next.id + '" style="display:block;text-decoration:none">' +
      '<div class="row-between" style="align-items:flex-start">' +
        '<div><span class="eyebrow">Lanjut belajar</span>' +
        '<h3 class="h2" style="margin-top:8px">' + UI.esc(next.judul) + "</h3>" +
        '<p class="small" style="margin:6px 0 0">' + UI.esc(next.ringkas) + "</p></div>" +
        '<span class="badge ' + (KELOMPOK[next.kelompok] ? KELOMPOK[next.kelompok].badge : "") + '">' + next.kelompok + "</span>" +
      "</div>" +
      '<div class="row" style="margin-top:16px">' +
        '<span class="chip">' + UI.icon("clock", 14) + UI.esc(next.estimasi || "20 menit") + " baca</span>" +
        '<span class="chip">' + UI.icon("book", 14) + next.sections.length + " bagian</span>" +
        '<span class="link-arrow" style="margin-left:auto">Buka modul ' + UI.icon("arrowRight", 15) + "</span>" +
      "</div>" +
    "</a>";
  }

  function bocoranCard() {
    var items = BOCORAN.slice(0, 8).map(function (b) {
      return '<a href="#/materi/' + b.m + '" style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--border);text-decoration:none;color:inherit">' +
        '<span style="color:var(--brass);flex:0 0 auto;margin-top:1px">' + UI.icon("key", 15) + "</span>" +
        '<span style="flex:1"><span style="font-size:12.5px;line-height:1.45;display:block">' + UI.esc(b.t) + "</span></span>" +
        '<span class="badge" style="flex:0 0 auto;font-size:9px">' + UI.esc(b.tag) + "</span></a>";
    }).join("");
    return '<div class="card card-pad">' +
      '<div class="row-between"><div><span class="eyebrow">Prioritas</span><h3 class="h2" style="margin-top:8px">Bocoran yang sering muncul</h3></div>' +
      '<span class="badge badge-warn">' + BOCORAN.length + " item</span></div>" +
      '<p class="small" style="margin:8px 0 6px">Topik yang paling sering disebut peserta. Sudah dijahit ke modul terkait.</p>' +
      '<div style="margin-top:6px">' + items + "</div>" +
      '<a class="link-arrow" href="#/materi/fr-bocoran" style="margin-top:12px">Lihat semua pengayaan ' + UI.icon("arrowRight", 15) + "</a>" +
    "</div>";
  }

  function blueprintTable() {
    var rows = "";
    BLUEPRINT.forEach(function (g) {
      g.items.forEach(function (it, i) {
        rows += "<tr>" +
          (i === 0 ? '<td rowspan="' + g.items.length + '"><span class="badge ' + KELOMPOK[g.key].badge + '">' + g.key + "</span><br><span class=\"tiny\">" + g.nama + "</span></td>" : "") +
          "<td>" + it.nama + "</td>" +
          '<td class="num">' + it.n + "</td>" +
          "<td>" + (i === 0 ? '<span class="tiny">' + g.total + " soal</span>" : "") + "</td>" +
        "</tr>";
      });
    });
    return '<div class="tbl-wrap"><table class="blueprint"><thead><tr><th style="width:170px">Kelompok</th><th>Materi</th><th style="width:80px;text-align:center">Soal</th><th style="width:90px">Subtotal</th></tr></thead><tbody>' +
      rows +
      '<tr><td colspan="2" style="text-align:right;font-weight:700">Total</td><td class="num" style="font-weight:800">100</td><td><span class="badge badge-ok">90 menit</span></td></tr>' +
      "</tbody></table></div>";
  }

  function howTo() {
    return '<div class="grid grid-3">' +
      '<div class="card card-pad"><span class="module-num">1</span><h4 style="margin:10px 0 4px;font-family:var(--serif);font-size:17px">Baca yang prioritas</h4><p class="small">Mulai dari modul yang paling sering keluar menurut bocoran. Tandai selesai agar progres terukur.</p></div>' +
      '<div class="card card-pad"><span class="module-num">2</span><h4 style="margin:10px 0 4px;font-family:var(--serif);font-size:17px">Latih per materi</h4><p class="small">Pembahasan muncul langsung setelah menjawab — termasuk alasan tiap opsi salah dan variasi soal.</p></div>' +
      '<div class="card card-pad"><span class="module-num">3</span><h4 style="margin:10px 0 4px;font-family:var(--serif);font-size:17px">Uji dengan tryout</h4><p class="small">100 soal, 90 menit, tanpa penalti. Review hasil untuk menemukan pola kesalahan.</p></div>' +
    "</div>";
  }

  function renderBeranda() {
    UI.crumbs([{ label: "Beranda" }]);
    UI.setNav("beranda");
    document.getElementById("view").innerHTML =
      resumeBanner() + noticeBanner() + hero() + stats() +
      '<div class="split" style="margin-top:22px">' +
        '<div class="stack">' + continueCard() +
          '<div><div class="section-head"><h2>Blueprint resmi ujian</h2><span class="small">UPKP D3–S3 · 100 soal</span></div>' +
          blueprintTable() + "</div>" +
        "</div>" +
        bocoranCard() +
      "</div>" +
      '<div class="section-head"><h2>Alur belajar yang disarankan</h2></div>' + howTo();

    bindCommon();
  }

  function renderSettings() {
    UI.crumbs([{ label: "Beranda", href: "#/" }, { label: "Pengaturan" }]);
    UI.setNav("pengaturan");
    var s = Store.settings();
    var mCount = materis().length;
    var tCount = (window.SOAL_TRYOUT || []).length;
    var lCount = (window.SOAL_LATIHAN || []).length;
    var integrity = mCount === 14 && tCount === 100 && lCount === 100;
    document.getElementById("view").innerHTML =
      '<div class="section-head" style="margin-top:0"><div><span class="eyebrow">Preferensi</span><h1 class="h1" style="margin-top:8px">Pengaturan</h1></div></div>' +
      '<div class="split"><div class="card card-pad">' +
        '<div class="setting-row"><div><h4>Mode gelap</h4><p>Nyaman untuk belajar malam. Tersimpan otomatis.</p></div>' +
          '<label class="switch"><input type="checkbox" id="setDark"' + (s.theme === "dark" ? " checked" : "") + '><span></span></label></div>' +
        '<div class="setting-row"><div><h4>Kurangi animasi</h4><p>Menonaktifkan transisi dan animasi dekoratif.</p></div>' +
          '<label class="switch"><input type="checkbox" id="setMotion"' + (s.reduceMotion ? " checked" : "") + '><span></span></label></div>' +
        '<div class="setting-row"><div><h4>Ekspor data belajar</h4><p>Unduh progres dan riwayat dalam format JSON.</p></div>' +
          '<button class="btn btn-sm" id="exportBtn">' + UI.icon("download", 15) + "Ekspor</button></div>" +
        '<div class="setting-row"><div><h4>Hapus semua data</h4><p>Progres, riwayat, dan sesi aktif akan hilang permanen.</p></div>' +
          '<button class="btn btn-sm btn-danger" id="resetBtn">' + UI.icon("trash", 15) + "Reset</button></div>" +
      "</div>" +
      '<div class="stack">' +
        '<div class="card card-pad"><span class="eyebrow">Pemeriksaan data</span>' +
          '<div style="margin-top:12px" class="stack">' +
            '<div class="row-between"><span class="small">Modul materi</span><span class="badge ' + (mCount === 14 ? "badge-ok" : "badge-warn") + '">' + mCount + " / 14</span></div>" +
            '<div class="row-between"><span class="small">Soal tryout</span><span class="badge ' + (tCount === 100 ? "badge-ok" : "badge-warn") + '">' + tCount + " / 100</span></div>" +
            '<div class="row-between"><span class="small">Soal latihan</span><span class="badge ' + (lCount === 100 ? "badge-ok" : "badge-warn") + '">' + lCount + " / 100</span></div>" +
            '<div class="row-between"><span class="small">Penyimpanan lokal</span><span class="badge ' + (Store.available ? "badge-ok" : "badge-bad") + '">' + (Store.available ? "Aktif" : "Tidak tersedia") + "</span></div>" +
          "</div>" +
        "</div>" +
        '<div class="card card-pad"><span class="eyebrow">Tentang</span><p class="small" style="margin-top:10px">Aplikasi ini disusun dari kisi-kisi UPKP Tingkat 3, MATERI UDIN &amp; UPKP 2026, Ringkasan Materi FR, dan Kisi-kisi Bocoran. Bukan aplikasi resmi BKN. Selalu cocokkan regulasi terbaru pada sumber resmi.</p>' +
        '<p class="tiny" style="margin:0">' + (integrity ? "Semua komponen data lengkap." : "Beberapa komponen data belum lengkap.") + "</p></div>" +
      "</div></div>";

    var dark = document.getElementById("setDark");
    if (dark) dark.addEventListener("change", function () {
      Store.saveSettings({ theme: dark.checked ? "dark" : "light" });
      applyTheme();
    });
    var motion = document.getElementById("setMotion");
    if (motion) motion.addEventListener("change", function () {
      Store.saveSettings({ reduceMotion: motion.checked });
      applyMotion();
    });
    var exp = document.getElementById("exportBtn");
    if (exp) exp.addEventListener("click", function () {
      var blob = new Blob([Store.exportJSON()], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "upkp-progres-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      UI.toast("Data belajar diekspor");
    });
    var reset = document.getElementById("resetBtn");
    if (reset) reset.addEventListener("click", function () {
      UI.confirm({
        title: "Hapus semua data?",
        body: "Progres membaca, riwayat tryout, dan sesi aktif akan dihapus permanen dari perangkat ini.",
        confirmText: "Ya, hapus semua",
        danger: true,
        onConfirm: function () {
          Store.resetAll();
          applyTheme(); applyMotion();
          UI.toast("Semua data telah dihapus");
          location.hash = "#/";
          setTimeout(function () { location.reload(); }, 300);
        }
      });
    });
    bindCommon();
  }

  function render404() {
    document.getElementById("view").innerHTML =
      '<div class="empty" style="margin-top:40px"><div class="e-icon">' + UI.icon("compass", 26) + "</div>" +
      "<h3>Halaman tidak ditemukan</h3><p>Tautan yang Anda buka tidak tersedia atau sudah berubah.</p>" +
      '<a class="btn btn-primary" href="#/">Kembali ke Beranda</a></div>';
    UI.crumbs([{ label: "Tidak ditemukan" }]);
  }

  function applyTheme() {
    var s = Store.settings();
    document.documentElement.setAttribute("data-theme", s.theme === "dark" ? "dark" : "light");
  }
  function applyMotion() {
    var s = Store.settings();
    document.documentElement.style.scrollBehavior = s.reduceMotion ? "auto" : "";
    document.body.classList.toggle("reduce-motion", !!s.reduceMotion);
  }

  function bindCommon() {
    var ab = document.querySelector("[data-abandon-session]");
    if (ab) ab.addEventListener("click", function () {
      UI.confirm({
        title: "Akhiri sesi?",
        body: "Jawaban pada sesi ini tidak akan dinilai dan tidak masuk riwayat.",
        confirmText: "Ya, akhiri",
        danger: true,
        onConfirm: function () {
          Store.clearSession();
          UI.toast("Sesi diakhiri");
          route();
        }
      });
    });
  }

  function parseHash() {
    var h = (location.hash || "").replace(/^#/, "");
    if (!h || h === "/") return { page: "beranda" };
    var parts = h.split("/").filter(Boolean);
    return { page: parts[0] || "beranda", param: parts[1] || null };
  }

  function route() {
    var r = parseHash();
    applyTheme();
    document.body.classList.remove("nav-open");
    var scrim = document.getElementById("scrim");
    if (scrim) scrim.hidden = true;
    var menuBtn = document.getElementById("menuBtn");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");

    if (r.page === "beranda") return renderBeranda();
    if (r.page === "materi") {
      if (r.param) {
        if (!findMateri(r.param)) return render404();
        return Materi.renderDetail(r.param);
      }
      return Materi.renderIndex();
    }
    if (r.page === "latihan") return Quiz.renderLatihanIndex();
    if (r.page === "tryout") return Quiz.renderTryoutBriefing();
    if (r.page === "sesi") return Quiz.renderSession();
    if (r.page === "hasil") return Hasil.render(r.param);
    if (r.page === "riwayat") return Hasil.renderRiwayat();
    if (r.page === "pengaturan") return renderSettings();
    return render404();
  }

  function boot() {
    applyTheme(); applyMotion();
    if (document.body.classList.contains("reduce-motion")) {
      document.documentElement.style.scrollBehavior = "auto";
    }
    var themeBtn = document.getElementById("themeBtn");
    if (themeBtn) themeBtn.addEventListener("click", function () {
      var s = Store.settings();
      Store.saveSettings({ theme: s.theme === "dark" ? "light" : "dark" });
      applyTheme();
      UI.toast(s.theme === "dark" ? "Mode terang aktif" : "Mode gelap aktif");
    });
    var menuBtn = document.getElementById("menuBtn");
    var scrim = document.getElementById("scrim");
    if (menuBtn) menuBtn.addEventListener("click", function () {
      var open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (scrim) scrim.hidden = !open;
    });
    if (scrim) scrim.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      scrim.hidden = true;
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-nav]");
      if (a && window.innerWidth <= 960) {
        document.body.classList.remove("nav-open");
        if (scrim) scrim.hidden = true;
      }
    });
    window.addEventListener("hashchange", function () { route(); UI.scrollTop(); });
    route();
  }

  window.App = {
    BLUEPRINT: BLUEPRINT,
    KELOMPOK: KELOMPOK,
    materis: materis,
    findMateri: findMateri,
    allQuestions: allQuestions,
    route: route
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
