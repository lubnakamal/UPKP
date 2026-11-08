/* ============================================================
   Store — localStorage persistence, settings, progress, attempts
   ============================================================ */
(function () {
  "use strict";

  var NS = "upkp.v1.";
  var memory = {};
  var available = (function () {
    try {
      var k = NS + "__t";
      localStorage.setItem(k, "1");
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  })();

  function rawGet(key) {
    if (!available) return memory[key] == null ? null : memory[key];
    try { return localStorage.getItem(NS + key); } catch (e) { return null; }
  }
  function rawSet(key, val) {
    if (!available) { memory[key] = val; return; }
    try { localStorage.setItem(NS + key, val); } catch (e) { memory[key] = val; }
  }
  function rawDel(key) {
    if (!available) { delete memory[key]; return; }
    try { localStorage.removeItem(NS + key); } catch (e) { delete memory[key]; }
  }
  function read(key, fallback) {
    var v = rawGet(key);
    if (v == null) return fallback;
    try { return JSON.parse(v); } catch (e) { return fallback; }
  }
  function write(key, val) {
    try { rawSet(key, JSON.stringify(val)); } catch (e) { /* ignore quota */ }
  }

  var DEFAULTS = { theme: "light", reduceMotion: false };

  var Store = {
    available: available,

    /* ---------- settings ---------- */
    settings: function () {
      var s = read("settings", null);
      return Object.assign({}, DEFAULTS, s || {});
    },
    saveSettings: function (patch) {
      var s = Object.assign({}, Store.settings(), patch || {});
      write("settings", s);
      return s;
    },

    /* ---------- reading progress ---------- */
    progress: function () {
      var p = read("progress", { read: [], last: null, lastAt: null });
      if (!p || !Array.isArray(p.read)) p = { read: [], last: null, lastAt: null };
      // Buang referensi modul yang sudah tidak ada (mis. modul yang dihapus).
      var M = window.UPKP_MATERI;
      if (M && Object.keys(M).length) {
        p.read = p.read.filter(function (id) { return !!M[id]; });
        if (p.last && !M[p.last]) p.last = null;
      }
      return p;
    },
    isRead: function (id) {
      return Store.progress().read.indexOf(id) !== -1;
    },
    toggleRead: function (id) {
      var p = Store.progress();
      var i = p.read.indexOf(id);
      if (i === -1) p.read.push(id); else p.read.splice(i, 1);
      write("progress", p);
      return i === -1;
    },
    setLastMaterial: function (id) {
      var p = Store.progress();
      p.last = id;
      p.lastAt = Date.now();
      write("progress", p);
    },
    readCount: function () { return Store.progress().read.length; },

    /* ---------- active session ---------- */
    getSession: function () { return read("session", null); },
    saveSession: function (s) { write("session", s); },
    clearSession: function () { rawDel("session"); },

    /* ---------- attempts ---------- */
    attempts: function () {
      var a = read("attempts", []);
      return Array.isArray(a) ? a : [];
    },
    addAttempt: function (attempt) {
      var list = Store.attempts();
      list.unshift(attempt);
      if (list.length > 60) list = list.slice(0, 60);
      write("attempts", list);
      return attempt;
    },
    getAttempt: function (id) {
      var list = Store.attempts();
      for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
      return null;
    },
    removeAttempt: function (id) {
      write("attempts", Store.attempts().filter(function (a) { return a.id !== id; }));
    },
    bestScore: function (mode) {
      var best = 0;
      Store.attempts().forEach(function (a) {
        if ((!mode || a.mode === mode) && a.score && a.score.benar > best) best = a.score.benar;
      });
      return best;
    },

    /* ---------- misc ---------- */
    resetAll: function () {
      ["settings", "progress", "session", "attempts"].forEach(rawDel);
    },
    exportJSON: function () {
      return JSON.stringify({
        version: 1,
        exportedAt: new Date().toISOString(),
        settings: Store.settings(),
        progress: Store.progress(),
        attempts: Store.attempts()
      }, null, 2);
    }
  };

  window.Store = Store;
})();
