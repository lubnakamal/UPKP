/* ============================================================
   UI kit — icons, formatters, toast, modal, shared renderers
   ============================================================ */
(function () {
  "use strict";

  var ICON_PATHS = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/><path d="M8 7h8M8 11h5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    play: '<path d="M8 5v14l11-7Z"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',
    alert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
    scale: '<path d="M12 3v18M5 7h14M7 7 4 14h6L7 7ZM17 7l-3 7h6l-3-7Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
    file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6"/>',
    print: '<path d="M6 9V3h12v6M6 18H4v-6h16v6h-2"/><rect x="6" y="14" width="12" height="7"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M14 9l2 2"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>'
  };

  function icon(name, size) {
    var p = ICON_PATHS[name] || ICON_PATHS.info;
    var s = size || 18;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function fmtDuration(sec) {
    sec = Math.max(0, Math.floor(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    if (h) return h + " jam " + m + " mnt";
    if (m) return m + " mnt " + s + " dtk";
    return s + " dtk";
  }

  function fmtDate(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) +
        " · " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    } catch (e) { return "-"; }
  }

  function ring(pct, size) {
    pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    var s = size || 132;
    return '<div class="ring" style="--p:' + pct + ';--size:' + s + 'px" role="img" aria-label="Kesiapan ' + pct + ' persen">' +
      '<svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="54"/>' +
      '<circle class="bar" cx="60" cy="60" r="54"/></svg>' +
      '<div class="val"><strong>' + pct + '<span style="font-size:15px">%</span></strong><span>Kesiapan</span></div></div>';
  }

  function toast(msg, kind) {
    var wrap = document.getElementById("toastWrap");
    if (!wrap) return;
    var el = document.createElement("div");
    el.className = "toast";
    var ic = kind === "bad" ? "alert" : kind === "warn" ? "info" : "check";
    el.innerHTML = icon(ic, 15) + "<span>" + esc(msg) + "</span>";
    wrap.appendChild(el);
    setTimeout(function () {
      el.style.transition = "opacity .25s, transform .25s";
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      setTimeout(function () { el.remove(); }, 260);
    }, 2600);
  }

  var modalRoot = null;
  function closeModal() {
    if (!modalRoot) return;
    modalRoot.hidden = true;
    modalRoot.innerHTML = "";
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKey);
  }
  function onModalKey(e) { if (e.key === "Escape") closeModal(); }

  function modal(opts) {
    modalRoot = modalRoot || document.getElementById("modalRoot");
    if (!modalRoot) return;
    var actions = (opts.actions || [{ label: "Tutup", cls: "btn-ghost" }]).map(function (a, i) {
      return '<button class="btn ' + (a.cls || "btn-ghost") + '" data-mact="' + i + '">' + esc(a.label) + "</button>";
    }).join("");
    modalRoot.innerHTML =
      '<div class="modal-backdrop" data-mclose></div>' +
      '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' +
        "<h3 id=\"modalTitle\">" + esc(opts.title || "") + "</h3>" +
        (opts.body || "") +
        '<div class="modal-actions">' + actions + "</div>" +
      "</div>";
    modalRoot.hidden = false;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onModalKey);

    modalRoot.querySelectorAll("[data-mact]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = (opts.actions || [{ label: "Tutup" }])[Number(b.getAttribute("data-mact"))];
        var keep = a && typeof a.onClick === "function" ? a.onClick() : false;
        if (!keep) closeModal();
      });
    });
    var back = modalRoot.querySelector("[data-mclose]");
    if (back) back.addEventListener("click", closeModal);
    var primary = modalRoot.querySelector(".modal-actions .btn-primary, .modal-actions .btn-danger");
    if (primary) primary.focus();
  }

  function confirm(opts) {
    modal({
      title: opts.title,
      body: '<p style="margin:0">' + (opts.body || "") + "</p>",
      actions: [
        { label: opts.cancelText || "Batal", cls: "btn-ghost" },
        { label: opts.confirmText || "Ya, lanjutkan", cls: opts.danger ? "btn-danger" : "btn-primary", onClick: opts.onConfirm }
      ]
    });
  }

  function crumbs(items) {
    var el = document.getElementById("crumbs");
    if (!el) return;
    el.innerHTML = items.map(function (it, i) {
      var last = i === items.length - 1;
      if (last) return '<span class="current" aria-current="page">' + esc(it.label) + "</span>";
      return '<a href="' + it.href + '">' + esc(it.label) + "</a>" + '<span class="sep">/</span>';
    }).join("");
  }

  function setNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === key);
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------- shared question feedback ---------- */

  function feedbackHTML(q, picked) {
    var key = q.kunci;
    var isRight = picked === key;
    var p = q.pembahasan || {};
    var html = '<div class="feedback">';

    if (picked) {
      html += '<div class="verdict ' + (isRight ? "ok" : "bad") + '">' +
        icon(isRight ? "check" : "x") +
        "<span>" + (isRight ? "Jawaban Anda benar" : "Jawaban Anda belum tepat") + "</span>" +
        '<span class="sub">Kunci: ' + key + " · Jawaban Anda: " + picked + "</span></div>";
    } else {
      html += '<div class="verdict bad">' + icon("info") + "<span>Tidak dijawab</span>" +
        '<span class="sub">Kunci: ' + key + "</span></div>";
    }

    if (p.inti) {
      html += '<div class="analysis-block"><h4>' + icon("bulb", 14) + "Inti pembahasan</h4><p>" + p.inti + "</p></div>";
    }
    if (p.benar) {
      html += '<div class="analysis-block"><h4>' + icon("check", 14) + "Mengapa kunci jawaban benar</h4><p>" + p.benar + "</p></div>";
    }
    if (p.opsi) {
      html += '<div class="analysis-block"><h4>' + icon("grid", 14) + 'Analisis setiap opsi</h4><div class="opt-reasons">';
      Object.keys(q.opsi).forEach(function (l) {
        var cls = l === key ? " is-key" : (l === picked ? " is-picked-wrong" : "");
        html += '<div class="opt-reason' + cls + '"><span class="rl">' + l + "</span><span>" + (p.opsi[l] || "—") + "</span></div>";
      });
      html += "</div></div>";
    }
    if (p.dasar && p.dasar.length) {
      html += '<div class="analysis-block"><h4>' + icon("scale", 14) + "Dasar hukum &amp; konsep</h4><ul>";
      p.dasar.forEach(function (d) { html += "<li>" + d + "</li>"; });
      html += "</ul></div>";
    }
    if (p.jebakan) {
      html += '<div class="callout jebakan"><span class="c-label">Jebakan soal</span><p>' + p.jebakan + "</p></div>";
    }
    if (q.variasi && q.variasi.length) {
      html += '<div class="analysis-block variasi"><h4>' + icon("spark", 14) + "Variasi soal setara &amp; pengembangan</h4><ul>";
      q.variasi.forEach(function (v) { html += "<li>" + v + "</li>"; });
      html += "</ul></div>";
    }

    html += "</div>";
    return html;
  }

  function optionList(q, picked, opts) {
    opts = opts || {};
    var locked = !!opts.locked;
    var showKey = !!opts.showKey;
    var out = "";
    Object.keys(q.opsi).forEach(function (l) {
      var cls = "opt";
      if (picked === l) cls += " selected";
      if (showKey && l === q.kunci) cls += " correct";
      if (showKey && picked === l && l !== q.kunci) cls += " wrong";
      out += '<button type="button" class="' + cls + '" data-opt="' + l + '"' +
        (locked ? " disabled" : "") + ' role="radio" aria-checked="' + (picked === l) + '">' +
        '<span class="letter">' + l + "</span><span>" + q.opsi[l] + "</span></button>";
    });
    return out;
  }

  window.UI = {
    icon: icon, esc: esc, letters: LETTERS,
    fmtClock: fmtClock, fmtDuration: fmtDuration, fmtDate: fmtDate,
    ring: ring, toast: toast, modal: modal, confirm: confirm, closeModal: closeModal,
    crumbs: crumbs, setNav: setNav, scrollTop: scrollTop,
    feedbackHTML: feedbackHTML, optionList: optionList
  };
})();
