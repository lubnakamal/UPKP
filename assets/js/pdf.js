/* ============================================================
   PDF Export — menyusun seluruh materi pembelajaran menjadi satu
   berkas PDF. Ditulis mandiri (tanpa library/CDN) agar tetap
   berjalan offline pada protokol file://.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- geometri halaman (A4, satuan poin) ---------- */
  var W = 595.28;      // lebar halaman
  var H = 841.89;      // tinggi halaman
  var M = 56;          // margin kiri/kanan
  var MT = 66;         // jarak konten dari atas
  var MB = 58;         // batas bawah konten
  var CW = W - M * 2;  // lebar kolom konten

  /* ---------- palet (mengikuti design system) ---------- */
  function fmt(n) {
    var r = Math.round(n * 1000) / 1000;
    return String(r);
  }
  function col(hex) {
    var n = parseInt(hex.slice(1), 16);
    return fmt(((n >> 16) & 255) / 255) + " " + fmt(((n >> 8) & 255) / 255) + " " + fmt((n & 255) / 255);
  }
  var C = {
    ink: col("#14202b"),
    inkSoft: col("#2c3a47"),
    muted: col("#5c6a76"),
    muted2: col("#7d8894"),
    border: col("#e2dac9"),
    navy: col("#1e3a5f"),
    brass: col("#9a6b1f"),
    brassBright: col("#c9a227"),
    teal: col("#1f5f5b"),
    bad: col("#9c3b2c"),
    warn: col("#8a6412"),
    surface2: col("#faf6ec"),
    surface3: col("#f2ecdd"),
    rowAlt: col("#f7f3e9"),
    brassTint: col("#f7efd8"),
    tealTint: col("#e3f0ee"),
    badTint: col("#f8e7e3"),
    navyTint: col("#e8edf4"),
    warnTint: col("#f9efd5"),
    white: "1 1 1"
  };

  var VARIANTS = {
    kunci: { tint: C.brassTint, bar: C.brassBright, label: C.brass },
    jebakan: { tint: C.badTint, bar: C.bad, label: C.bad },
    contoh: { tint: C.tealTint, bar: C.teal, label: C.teal },
    dasar: { tint: C.navyTint, bar: C.navy, label: C.navy },
    catatan: { tint: C.warnTint, bar: C.warn, label: C.warn },
    default: { tint: C.surface2, bar: C.muted, label: C.muted }
  };

  /* ---------- pengukuran teks (canvas) ---------- */
  var mctx = null;
  var wcache = {};
  function measureCtx() {
    if (!mctx) mctx = document.createElement("canvas").getContext("2d");
    return mctx;
  }
  function fontSpec(style, size) {
    var serif = style.charAt(0) === "s";
    var s = serif ? style.slice(1) : style;
    var bold = s.indexOf("b") >= 0;
    var italic = s.indexOf("i") >= 0;
    var fam = serif ? "'Times New Roman', Times, serif" : "Arial, Helvetica, sans-serif";
    return (italic ? "italic " : "") + (bold ? "bold " : "") + size + "px " + fam;
  }
  function textWidth(str, style, size) {
    var key = style + "|" + size + "|" + str;
    var v = wcache[key];
    if (v != null) return v;
    var c = measureCtx();
    c.font = fontSpec(style, size);
    v = c.measureText(str).width;
    wcache[key] = v;
    return v;
  }

  /* ---------- encoding ke WinAnsi (cp1252) ---------- */
  var WIN = {
    0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
    0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a,
    0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
    0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
    0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c,
    0x017e: 0x9e, 0x0178: 0x9f
  };
  var FALLBACK = {
    0x2192: "->", 0x2190: "<-", 0x2191: "^", 0x2193: "v",
    0x2264: "<=", 0x2265: ">=", 0x2260: "!=", 0x2212: "-",
    0x2713: "v", 0x2714: "v", 0x2717: "x", 0x00a0: " ", 0x2011: "-"
  };
  function enc(str) {
    str = String(str);
    var out = "";
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      var code = str.charCodeAt(i);
      if (code === 10 || code === 13 || code === 9) { out += " "; continue; }
      if (code < 128) { out += ch; continue; }
      if (WIN[code] != null) { out += String.fromCharCode(WIN[code]); continue; }
      if (FALLBACK[code] != null) { out += FALLBACK[code]; continue; }
      if (code >= 160 && code <= 255) { out += ch; continue; }
      var base = ch.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (base && base.charCodeAt(0) < 128) { out += base; continue; }
      out += "?";
    }
    return out;
  }
  function pdfStr(str) {
    return str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }

  /* ---------- dokumen PDF ---------- */
  var FONTIDX = { r: 1, b: 2, i: 3, bi: 4, sr: 5, sb: 6, si: 7, sbi: 8 };
  var FONTNAME = [null, "Helvetica", "Helvetica-Bold", "Helvetica-Oblique",
    "Helvetica-BoldOblique", "Times-Roman", "Times-Bold", "Times-Italic", "Times-BoldItalic"];

  function Doc() {
    this.pages = [];
    this.ops = [];
  }
  Doc.prototype.newPage = function () {
    this.ops = [];
    this.pages.push(this.ops);
  };
  Doc.prototype.rect = function (x, yTop, w, h, color) {
    var y = H - yTop - h;
    this.ops.push(color + " rg " + fmt(x) + " " + fmt(y) + " " + fmt(w) + " " + fmt(h) + " re f");
  };
  Doc.prototype.line = function (x1, y1, x2, y2, lw, color) {
    this.ops.push(fmt(lw) + " w " + color + " RG " + fmt(x1) + " " + fmt(H - y1) +
      " m " + fmt(x2) + " " + fmt(H - y2) + " l S");
  };
  Doc.prototype.textAt = function (x, yTop, str, style, size, color) {
    var y = H - yTop;
    this.ops.push("BT /F" + FONTIDX[style] + " " + fmt(size) + " Tf " + color + " rg " +
      "1 0 0 1 " + fmt(x) + " " + fmt(y) + " Tm (" + pdfStr(enc(str)) + ") Tj ET");
  };

  /* ---------- status render ---------- */
  var R = null;

  function chrome() {
    var d = R.doc;
    if (R.header && R.running) {
      d.textAt(M, 42, R.running, "r", 8, C.muted2);
      d.line(M, 50, W - M, 50, 0.6, C.border);
    }
    if (R.footer) {
      d.line(M, H - 44, W - M, H - 44, 0.6, C.border);
      d.textAt(M, H - 32, "UPKP Tingkat 3 · Materi Pembelajaran", "r", 7.6, C.muted2);
      var lab = "Halaman " + (R.page + R.displayOffset);
      d.textAt(W - M - textWidth(lab, "r", 7.6), H - 32, lab, "r", 7.6, C.muted2);
    }
  }
  function beginPage() {
    R.doc.newPage();
    R.page++;
    R.y = MT;
    chrome();
  }
  function need(h) {
    if (!R.noBreak && R.y + h > H - MB) beginPage();
  }
  function putSegs(segs, x, size, color, lh, o) {
    if (!R.noBreak && R.y + lh > H - MB) beginPage();
    if (o && o.band) R.doc.rect(M, R.y, CW, lh + 0.6, o.band);
    if (o && o.bar) R.doc.rect(M, R.y, o.bar.w, lh + 0.6, o.bar.color);
    var cx = x;
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      R.doc.textAt(cx, R.y + size * 0.8, s.text, s.style, size, color);
      cx += textWidth(s.text, s.style, size);
    }
    R.y += lh;
  }
  function putLine(text, x, size, style, color, lh, o) {
    putSegs([{ text: text, style: style }], x, size, color, lh, o);
  }
  function bandOnly(h, o) {
    if (!R.noBreak && R.y + h > H - MB) beginPage();
    if (o && o.band) R.doc.rect(M, R.y, CW, h + 0.6, o.band);
    if (o && o.bar) R.doc.rect(M, R.y, o.bar.w, h + 0.6, o.bar.color);
    R.y += h;
  }

  /* ---------- pemenggalan baris ---------- */
  function wrapRuns(segs, maxW, size) {
    var lines = [], cur = [], curW = 0;
    function flush() { if (cur.length) lines.push(cur); cur = []; curW = 0; }
    for (var s = 0; s < segs.length; s++) {
      var seg = segs[s];
      var style = seg.style || "r";
      var words = String(seg.text).replace(/\s+/g, " ").split(" ");
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (!word) continue;
        var w = textWidth(word, style, size);
        var spaceW = cur.length ? textWidth(" ", style, size) : 0;
        if (curW + spaceW + w > maxW && cur.length) { flush(); spaceW = 0; }
        var last = cur[cur.length - 1];
        if (last && last.style === style) last.text += (spaceW ? " " : "") + word;
        else cur.push({ text: (spaceW ? " " : "") + word, style: style });
        curW += spaceW + w;
      }
    }
    flush();
    return lines;
  }

  /* ---------- parser HTML -> blok ---------- */
  function norm(runs) {
    var out = [];
    for (var i = 0; i < runs.length; i++) {
      var r = runs[i];
      var style = r.style || (r.bold ? (r.italic ? "bi" : "b") : (r.italic ? "i" : "r"));
      out.push({ text: r.text, style: style });
    }
    if (out.length) {
      out[0].text = out[0].text.replace(/^\s+/, "");
      var last = out[out.length - 1];
      last.text = last.text.replace(/\s+$/, "");
    }
    return out.filter(function (r) { return r.text !== ""; });
  }
  function inlineRuns(node, bold, italic, out) {
    out = out || [];
    var kids = node.childNodes;
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n.nodeType === 3) {
        var t = n.nodeValue.replace(/\s+/g, " ");
        if (t) out.push({ text: t, bold: !!bold, italic: !!italic });
      } else if (n.nodeType === 1) {
        var tag = n.tagName.toLowerCase();
        if (tag === "br") { out.push({ text: " ", bold: !!bold, italic: !!italic }); continue; }
        var b = bold, it = italic;
        if (tag === "b" || tag === "strong") b = true;
        if (tag === "i" || tag === "em") it = true;
        inlineRuns(n, b, it, out);
      }
    }
    return out;
  }
  function runsFromHTML(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return norm(inlineRuns(d));
  }
  function listItems(list, level, acc) {
    var ordered = list.tagName.toLowerCase() === "ol";
    Array.prototype.forEach.call(list.children, function (li) {
      if (li.tagName.toLowerCase() !== "li") return;
      var runs = [], nested = [];
      Array.prototype.forEach.call(li.childNodes, function (c) {
        if (c.nodeType === 1 && (c.tagName.toLowerCase() === "ul" || c.tagName.toLowerCase() === "ol")) nested.push(c);
        else runs = runs.concat(inlineRuns(c));
      });
      acc.push({ runs: norm(runs), level: level, ordered: ordered });
      nested.forEach(function (sub) { listItems(sub, level + 1, acc); });
    });
    return acc;
  }
  function tableBlock(table) {
    var rows = [];
    Array.prototype.forEach.call(table.querySelectorAll("tr"), function (tr) {
      var cells = [], header = false;
      Array.prototype.forEach.call(tr.children, function (cell) {
        if (cell.tagName.toLowerCase() === "th") header = true;
        cells.push({ segs: norm(inlineRuns(cell)) });
      });
      if (cells.length) rows.push({ header: header, cells: cells });
    });
    return { type: "table", rows: rows };
  }
  function calloutBlock(div) {
    var variant = "default";
    ["kunci", "jebakan", "contoh", "dasar", "catatan"].forEach(function (v) {
      if (div.classList.contains(v)) variant = v;
    });
    var label = "", blocks = [];
    Array.prototype.forEach.call(div.childNodes, function (c) {
      if (c.nodeType === 1 && c.classList && c.classList.contains("c-label")) {
        label = c.textContent.trim();
        return;
      }
      walk(c, blocks);
    });
    return { type: "callout", variant: variant, label: label, blocks: blocks };
  }
  function defItem(div) {
    var title = [], body = [];
    Array.prototype.forEach.call(div.childNodes, function (c) {
      if (c.nodeType === 1 && (c.tagName.toLowerCase() === "b" || c.tagName.toLowerCase() === "strong") && !title.length) {
        title = norm(inlineRuns(c));
      } else {
        body = body.concat(inlineRuns(c));
      }
    });
    return { title: title, body: norm(body) };
  }
  function walk(node, out) {
    var kids = node.childNodes;
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n.nodeType === 3) {
        if (n.nodeValue.replace(/\s+/g, "")) out.push({ type: "para", segs: norm(inlineRuns(n)) });
        continue;
      }
      if (n.nodeType !== 1) continue;
      var tag = n.tagName.toLowerCase();
      if (tag === "h2") out.push({ type: "heading", level: 2, segs: norm(inlineRuns(n)) });
      else if (tag === "h3") out.push({ type: "heading", level: 3, segs: norm(inlineRuns(n)) });
      else if (tag === "h4") out.push({ type: "heading", level: 4, segs: norm(inlineRuns(n)) });
      else if (tag === "p") out.push({ type: "para", lead: n.classList.contains("lead-in"), segs: norm(inlineRuns(n)) });
      else if (tag === "ul" || tag === "ol") out.push({ type: "list", items: listItems(n, 0, []) });
      else if (tag === "table") out.push(tableBlock(n));
      else if (tag === "div") {
        if (n.classList.contains("callout")) out.push(calloutBlock(n));
        else if (n.classList.contains("tbl-wrap")) {
          var t = n.querySelector("table");
          if (t) out.push(tableBlock(t));
        } else if (n.classList.contains("def-grid")) {
          var items = [];
          Array.prototype.forEach.call(n.querySelectorAll(".def"), function (d) { items.push(defItem(d)); });
          out.push({ type: "defs", items: items });
        } else if (n.classList.contains("def")) {
          out.push({ type: "defs", items: [defItem(n)] });
        } else walk(n, out);
      } else if (tag !== "br") {
        var runs = norm(inlineRuns(n));
        if (runs.length) out.push({ type: "para", segs: runs });
      }
    }
  }
  function parseHTML(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    var out = [];
    walk(d, out);
    return out;
  }

  /* ---------- perender blok ---------- */
  function renderHeading(text, level, o) {
    o = o || {};
    var scale = o.fontScale || 1;
    var size = (level === 2 ? 15.5 : level === 3 ? 12.4 : 10.8) * scale;
    var style = level === 4 ? "b" : "sb";
    var before = level === 2 ? 17 : level === 3 ? 12 : 9;
    var after = level === 2 ? 6 : 4;
    if (R.y > MT + 6) R.y += before;
    need(size * 2.4);
    var lines = wrapRuns([{ text: text, style: style }], CW - (o.indent || 0), size);
    for (var i = 0; i < lines.length; i++) putSegs(lines[i], M + (o.indent || 0), size, C.ink, size * 1.3, o);
    R.y += after;
  }
  function renderPara(segs, o) {
    o = o || {};
    var size = (o.size || 10.4) * (o.fontScale || 1);
    var lh = size * (o.lh || 1.55);
    var x = M + (o.indent || 0);
    var lines = wrapRuns(segs, CW - (o.indent || 0), size);
    for (var i = 0; i < lines.length; i++) putSegs(lines[i], x, size, o.color || C.inkSoft, lh, o);
    if (o.spaceAfter) R.y += o.spaceAfter;
  }
  function renderList(items, o) {
    o = o || {};
    var size = 10.2 * (o.fontScale || 1);
    var lh = size * 1.52;
    var counters = [];
    items.forEach(function (it) {
      var level = it.level || 0;
      var indent = (o.indent || 0) + 16 + level * 15;
      var marker;
      if (it.ordered) {
        counters[level] = (counters[level] || 0) + 1;
        marker = counters[level] + ".";
      } else {
        marker = level === 0 ? "\u2022" : "\u2013";
      }
      for (var d = level + 1; d < counters.length; d++) counters[d] = 0;
      var lines = wrapRuns(it.runs, CW - indent - 14, size);
      if (!lines.length) lines = [[]];
      lines[0] = [{ text: marker + "  ", style: "r" }].concat(lines[0]);
      for (var i = 0; i < lines.length; i++) putSegs(lines[i], M + indent, size, o.color || C.inkSoft, lh, o);
      R.y += 2;
    });
    R.y += 4;
  }
  function renderDefs(b, o) {
    o = o || {};
    b.items.forEach(function (it) {
      if (it.title && it.title.length) renderPara(it.title, { size: 10.4, color: C.ink, lh: 1.4, spaceAfter: 1, indent: o.indent || 0 });
      if (it.body && it.body.length) renderPara(it.body, { size: 10, color: C.inkSoft, lh: 1.5, spaceAfter: 6, indent: (o.indent || 0) + 10 });
    });
  }
  function renderCallout(b, o) {
    o = o || {};
    var v = VARIANTS[b.variant] || VARIANTS.default;
    var co = {
      band: v.tint,
      bar: { w: 3, color: v.bar },
      indent: (o.indent || 0) + 16,
      fontScale: 0.95
    };
    var pad = 9;
    bandOnly(pad, co);
    if (b.label) putLine(b.label.toUpperCase(), M + co.indent, 8.2, "b", v.label, 13, co);
    renderBlocks(b.blocks, co);
    bandOnly(pad, co);
    R.y += 14;
  }
  function renderTable(rows, o) {
    o = o || {};
    if (!rows.length) return;
    var size = 9.2 * (o.fontScale || 1);
    var lh = size * 1.42;
    var padX = 6, padY = 5;
    var ncol = 0;
    rows.forEach(function (r) { if (r.cells.length > ncol) ncol = r.cells.length; });
    if (!ncol) return;

    var nat = [], minW = [];
    for (var j = 0; j < ncol; j++) { nat.push(0); minW.push(0); }
    rows.forEach(function (r) {
      for (var j = 0; j < ncol; j++) {
        var cell = r.cells[j];
        if (!cell) continue;
        var csize = r.header ? size - 0.6 : size;
        var full = 0;
        cell.segs.forEach(function (s) {
          var t = r.header ? s.text.toUpperCase() : s.text;
          var style = r.header ? "b" : s.style;
          full += textWidth(t, style, csize);
          t.split(/\s+/).forEach(function (word) {
            if (!word) return;
            var ww = textWidth(word, style, csize) + padX * 2 + 3;
            if (ww > minW[j]) minW[j] = ww;
          });
        });
        if (full > nat[j]) nat[j] = full;
      }
    });
    var base = minW.reduce(function (a, b) { return a + b; }, 0) || 1;
    var widths;
    if (base < CW) {
      var totalNat = nat.reduce(function (a, b) { return a + b; }, 0) || 1;
      var extra = CW - base;
      widths = minW.map(function (w, j) { return w + (nat[j] / totalNat) * extra; });
    } else {
      widths = minW.map(function (w) { return (w / base) * CW; });
    }

    var header = rows[0] && rows[0].header ? rows[0] : null;
    var rowIdx = 0;

    function drawRow(row, isHeader) {
      var cellLines = [];
      for (var j = 0; j < ncol; j++) {
        var cell = row.cells[j] || { segs: [] };
        var segs = isHeader
          ? cell.segs.map(function (s) { return { text: s.text.toUpperCase(), style: "b" }; })
          : cell.segs;
        cellLines.push(wrapRuns(segs, Math.max(24, widths[j] - padX * 2), isHeader ? size - 0.6 : size));
      }
      var maxLines = 1;
      cellLines.forEach(function (l) { if (l.length > maxLines) maxLines = l.length; });
      var h = maxLines * lh + padY * 2;
      if (!R.noBreak && R.y + h > H - MB) {
        beginPage();
        if (header && !isHeader) drawRow(header, true);
      }
      if (isHeader) R.doc.rect(M, R.y, CW, h, C.surface3);
      else if (rowIdx % 2 === 1) R.doc.rect(M, R.y, CW, h, C.rowAlt);
      var cx = M;
      for (var j2 = 0; j2 < ncol; j2++) {
        var ty = R.y + padY;
        var lines = cellLines[j2];
        var csize = isHeader ? size - 0.6 : size;
        for (var li = 0; li < lines.length; li++) {
          var lx = cx + padX;
          var line = lines[li];
          for (var si = 0; si < line.length; si++) {
            var s = line[si];
            R.doc.textAt(lx, ty + csize * 0.8, s.text, s.style, csize, isHeader ? C.muted : C.inkSoft);
            lx += textWidth(s.text, s.style, csize);
          }
          ty += lh;
        }
        cx += widths[j2];
      }
      R.y += h;
      R.doc.line(M, R.y, M + CW, R.y, 0.5, C.border);
      rowIdx++;
    }

    rows.forEach(function (r) { drawRow(r, !!r.header); });
    R.y += 10;
  }
  function renderBlocks(blocks, o) {
    o = o || {};
    blocks.forEach(function (b) {
      if (b.type === "heading") {
        renderHeading(b.segs.map(function (s) { return s.text; }).join("").trim(), b.level, o);
      } else if (b.type === "para") {
        renderPara(b.segs, {
          size: b.lead ? 11.2 : 10.4,
          color: b.lead ? C.ink : C.inkSoft,
          lh: 1.55, spaceAfter: 8,
          indent: o.indent, band: o.band, bar: o.bar, fontScale: o.fontScale
        });
      } else if (b.type === "list") {
        renderList(b.items, { indent: o.indent, band: o.band, bar: o.bar, fontScale: o.fontScale });
      } else if (b.type === "table") {
        renderTable(b.rows, o);
      } else if (b.type === "callout") {
        renderCallout(b, o);
      } else if (b.type === "defs") {
        renderDefs(b, o);
      }
    });
  }

  /* ---------- perakitan modul ---------- */
  function pad2(n) { return String(n).padStart(2, "0"); }
  function kelompokLabel(k) {
    if (window.App && App.KELOMPOK && App.KELOMPOK[k]) return App.KELOMPOK[k].nama;
    if (k === "PENGAYAAN") return "Pengayaan & Field Report";
    return k;
  }
  function listBlock(arr) {
    return {
      type: "list",
      items: arr.map(function (t) { return { runs: runsFromHTML(t), level: 0, ordered: false }; })
    };
  }
  function renderModuleBody(m) {
    putLine("MODUL " + pad2(m.urutan) + "  \u00b7  " + kelompokLabel(m.kelompok), M, 8.2, "b", C.brass, 13);
    R.y += 5;
    var tl = wrapRuns([{ text: m.judul, style: "sb" }], CW, 23);
    tl.forEach(function (l) { putSegs(l, M, 23, C.ink, 28); });
    R.y += 3;
    renderPara([{ text: m.ringkas || "", style: "r" }], { size: 10.6, color: C.muted, lh: 1.55, spaceAfter: 7 });
    putLine((m.estimasi || "20 menit") + " baca  \u00b7  " + m.sections.length + " bagian", M, 8.6, "r", C.muted2, 13);
    R.y += 10;
    if (m.tujuan && m.tujuan.length) {
      renderCallout({ variant: "dasar", label: "Tujuan belajar", blocks: [listBlock(m.tujuan)] });
    }
    m.sections.forEach(function (s) {
      renderHeading(s.judul, 2, {});
      renderBlocks(parseHTML(s.html), {});
    });
    if (m.ringkasan && m.ringkasan.length) {
      renderCallout({ variant: "kunci", label: "Ringkasan 1 menit", blocks: [listBlock(m.ringkasan)] });
    }
    if (m.dasarHukum && m.dasarHukum.length) {
      renderCallout({ variant: "dasar", label: "Dasar hukum & rujukan", blocks: [listBlock(m.dasarHukum)] });
    }
  }

  /* ---------- sampul & daftar isi ---------- */
  function tanggalIndonesia() {
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var d = new Date();
    return d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();
  }
  function renderCover() {
    R.doc.newPage();
    R.page = 1;
    R.y = MT;
    R.noBreak = true;
    R.doc.rect(0, 0, W, 10, C.brassBright);
    R.doc.rect(0, 10, W, 6, C.navy);
    R.y = 168;
    putLine("PERSIAPAN UJIAN", M, 10, "b", C.brass, 16);
    R.y += 8;
    putSegs([{ text: "Materi", style: "sb" }], M, 40, C.ink, 46);
    putSegs([{ text: "Pembelajaran", style: "sb" }], M, 40, C.ink, 46);
    R.y += 10;
    putLine("UPKP Tingkat 3 \u2014 D3 s.d. S3", M, 14, "r", C.muted, 20);
    R.y += 8;
    R.doc.line(M, R.y, M + 96, R.y, 2, C.brass);
    R.y += 24;
    renderPara([{
      text: "Kumpulan lengkap 13 modul pembelajaran: Tes Wawasan Kebangsaan, Tes Kompetensi Teknis, " +
        "Tes Substansi Instansi, Tes Kompetensi Penunjang, serta modul pengayaan dari field report " +
        "dan bocoran kisi-kisi.",
      style: "r"
    }], { size: 11, color: C.inkSoft, lh: 1.6, spaceAfter: 20 });
    var rows = [
      ["TWK", "Tes Wawasan Kebangsaan", "Pancasila, UUD 1945, Sejarah, Bahasa Indonesia"],
      ["TKT", "Tes Kompetensi Teknis", "Kepegawaian, Pelayanan Publik, Good Governance, Kebijakan"],
      ["TSI", "Tes Substansi Instansi", "Renstra & Perencanaan Pembangunan, SOTK"],
      ["TKP", "Tes Kompetensi Penunjang", "Bahasa Inggris, Literasi Digital"]
    ];
    rows.forEach(function (r) {
      putLine(r[0], M, 10.5, "b", C.brass, 15);
      R.doc.textAt(M + 46, R.y - 15 + 12, r[1], "b", 11, C.ink);
      R.doc.textAt(M + 46, R.y - 15 + 26, r[2], "r", 9.2, C.muted);
      R.y += 34;
    });
    R.y = H - 150;
    R.doc.line(M, R.y - 12, W - M, R.y - 12, 0.6, C.border);
    putLine("Disusun oleh Mohammad Lubna Kamal, A.Md.Kom. \u00b7 RSUD dr. M. Ashari Pemalang", M, 9, "r", C.muted, 14);
    putLine("Bukan aplikasi resmi BKN. Materi untuk belajar mandiri.", M, 9, "r", C.muted2, 14);
    putLine("Diunduh " + tanggalIndonesia(), M, 9, "r", C.muted2, 14);
  }
  function renderTOC(modules) {
    R.doc.newPage();
    R.page = 2;
    R.y = MT;
    R.noBreak = true;
    putLine("DAFTAR MODUL", M, 9, "b", C.brass, 16);
    R.y += 4;
    putSegs([{ text: "Isi Materi", style: "sb" }], M, 22, C.ink, 28);
    R.y += 14;
    modules.forEach(function (m) {
      var y = R.y;
      R.doc.textAt(M, y + 11, pad2(m.urutan), "b", 9.5, C.brass);
      R.doc.textAt(M + 28, y + 11, m.judul, "b", 10.6, C.ink);
      var tw = textWidth(m.judul, "b", 10.6);
      var pageStr = String(m._pdfPage || "");
      var px = W - M - textWidth(pageStr, "b", 9.5);
      var startX = M + 28 + tw + 6;
      var avail = px - 10 - startX;
      if (avail > 24) {
        var dw = textWidth("\u00b7 ", "r", 8);
        var n = Math.floor(avail / dw);
        var dots = "";
        for (var i = 0; i < n; i++) dots += "\u00b7 ";
        R.doc.textAt(startX, y + 11, dots, "r", 8, C.muted2);
      }
      R.doc.textAt(px, y + 11, pageStr, "b", 9.5, C.brass);
      R.y += 22;
      R.doc.line(M, R.y - 7, W - M, R.y - 7, 0.5, C.border);
    });
  }

  /* ---------- build & unduh ---------- */
  function build() {
    var src = window.UPKP_MATERI || {};
    var modules = Object.keys(src).map(function (k) { return src[k]; })
      .sort(function (a, b) { return a.urutan - b.urutan; });

    var bodyDoc = new Doc();
    R = { doc: bodyDoc, y: MT, page: 0, displayOffset: 2, header: true, footer: true, running: "", noBreak: false };
    modules.forEach(function (m) {
      R.running = m.judul;
      beginPage();
      m._pdfPage = R.page + R.displayOffset;
      renderModuleBody(m);
    });

    var finalDoc = new Doc();
    R = { doc: finalDoc, y: MT, page: 0, displayOffset: 0, header: false, footer: true, running: "", noBreak: true };
    renderCover();
    renderTOC(modules);
    finalDoc.pages = finalDoc.pages.concat(bodyDoc.pages);
    return finalDoc;
  }

  function assemble(doc) {
    var pages = doc.pages;
    var pdf = "%PDF-1.4\n";
    pdf += "%" + String.fromCharCode(0xe2, 0xe3, 0xcf, 0xd3) + "\n";
    var offsets = [];

    function obj(num, body) {
      offsets[num] = pdf.length;
      pdf += num + " 0 obj\n" + body + "\nendobj\n";
    }

    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    var kids = pages.map(function (_, i) { return (11 + i * 2) + " 0 R"; }).join(" ");
    obj(2, "<< /Type /Pages /Kids [" + kids + "] /Count " + pages.length + " >>");
    for (var f = 1; f <= 8; f++) {
      obj(2 + f, "<< /Type /Font /Subtype /Type1 /BaseFont /" + FONTNAME[f] + " /Encoding /WinAnsiEncoding >>");
    }

    pages.forEach(function (ops, i) {
      var content = ops.join("\n");
      var pageObj = 11 + i * 2;
      var contentObj = 12 + i * 2;
      obj(pageObj, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + fmt(W) + " " + fmt(H) + "] " +
        "/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R /F4 6 0 R /F5 7 0 R /F6 8 0 R /F7 9 0 R /F8 10 0 R >> >> " +
        "/Contents " + contentObj + " 0 R >>");
      obj(contentObj, "<< /Length " + content.length + " >>\nstream\n" + content + "\nendstream");
    });

    var maxObj = 12 + (pages.length - 1) * 2;
    var xrefStart = pdf.length;
    var count = maxObj + 1;
    pdf += "xref\n0 " + count + "\n";
    pdf += "0000000000 65535 f \n";
    for (var n = 1; n <= maxObj; n++) {
      pdf += String(offsets[n] || 0).padStart(10, "0") + " 00000 n \n";
    }
    pdf += "trailer\n<< /Size " + count + " /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF";

    var bytes = new Uint8Array(pdf.length);
    for (var i2 = 0; i2 < pdf.length; i2++) bytes[i2] = pdf.charCodeAt(i2) & 0xff;
    return new Blob([bytes], { type: "application/pdf" });
  }

  function save(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  function downloadMateri(btn) {
    if (!window.UPKP_MATERI || !Object.keys(window.UPKP_MATERI).length) {
      if (window.UI) UI.toast("Materi belum tersedia", "bad");
      return;
    }
    if (btn) btn.disabled = true;
    if (window.UI) UI.toast("Menyusun PDF materi\u2026");
    setTimeout(function () {
      try {
        var blob = assemble(build());
        save(blob, "Materi-UPKP-Tingkat-3.pdf");
        if (window.UI) UI.toast("PDF materi berhasil diunduh");
      } catch (e) {
        if (window.UI) UI.toast("Gagal menyusun PDF", "bad");
        if (window.console) console.error(e);
      } finally {
        if (btn) btn.disabled = false;
      }
    }, 60);
  }

  window.PDFExport = { downloadMateri: downloadMateri, build: build };
})();
