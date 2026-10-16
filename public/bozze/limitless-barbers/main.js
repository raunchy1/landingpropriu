/* Limitless Barbers — bozza WebSardegna
   Interazioni: header, menu mobile, reveal, anteprima servizi,
   lightbox galleria, orari (giorno corrente + stato apertura). */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- intro: marchio animato, una volta al caricamento ---------- */
  (function () {
    var root = document.documentElement;
    var intro = document.getElementById('intro');
    if (!intro) return;
    if (!root.classList.contains('intro')) { intro.remove(); return; }
    var done = false, t1, t2;
    var finish = function (fast) {
      if (done) return;
      done = true;
      clearTimeout(t1); clearTimeout(t2);
      if (fast) intro.classList.add('skip');
      root.classList.remove('intro', 'intro-go');
      root.classList.add('intro-done');
      setTimeout(function () { intro.remove(); }, fast ? 420 : 0);
    };
    var go = function () {
      root.classList.add('intro-go');
      t1 = setTimeout(function () { finish(false); }, 4700);
    };
    var im = intro.querySelector('img');
    if (im.complete) go();
    else {
      im.addEventListener('load', go);
      im.addEventListener('error', function () { finish(true); });
    }
    t2 = setTimeout(function () {
      if (!root.classList.contains('intro-go')) finish(true);
    }, 6000);
    intro.addEventListener('click', function () { finish(true); });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === ' ') finish(true);
    }, { once: true });
  })();

  /* ---------- header sticky ---------- */
  var head = document.getElementById('siteHead');
  var onScroll = function () {
    if (head) head.classList.toggle('is-stuck', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- menu mobile ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var closeMenu = function () {
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    if (burger) burger.setAttribute('aria-expanded', 'false');
  };
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = !document.body.classList.contains('menu-open');
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }

  /* ---------- reveal on scroll ----------
     Niente IntersectionObserver: gli elementi .rv-img sono ritagliati con
     clip-path e un osservatore puntato su di loro non scatterebbe mai.
     Un controllo su scroll, limitato da requestAnimationFrame, e' anche
     immune agli scatti di scroll molto rapidi o ai salti via ancora. */
  var pending = [];
  document.querySelectorAll('.rv, .rv-img').forEach(function (el) {
    pending.push({ el: el, probe: el.classList.contains('rv-img') ? (el.parentElement || el) : el });
  });

  if (reduce) {
    pending.forEach(function (it) { it.el.classList.add('in'); });
    pending = [];
  } else {
    var ticking = false;
    var checkReveal = function () {
      ticking = false;
      var limit = window.innerHeight * 0.92;
      for (var i = pending.length - 1; i >= 0; i--) {
        if (pending[i].probe.getBoundingClientRect().top < limit) {
          pending[i].el.classList.add('in');
          pending.splice(i, 1);
        }
      }
      if (!pending.length) {
        window.removeEventListener('scroll', queueReveal);
        window.removeEventListener('resize', queueReveal);
      }
    };
    var queueReveal = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(checkReveal);
    };
    window.addEventListener('scroll', queueReveal, { passive: true });
    window.addEventListener('resize', queueReveal);
    window.addEventListener('load', queueReveal);
    checkReveal();
  }

  /* ---------- anteprima servizi ---------- */
  var items = document.querySelectorAll('.svc-item');
  var frames = document.querySelectorAll('#svcPreview figure');
  var setPreview = function (i) {
    items.forEach(function (it, n) { it.classList.toggle('is-active', n === i); });
    frames.forEach(function (fg, n) { fg.classList.toggle('is-on', n === i); });
  };
  if (frames.length) {
    items.forEach(function (item, i) {
      item.addEventListener('mouseenter', function () { setPreview(i); });
      item.addEventListener('focusin', function () { setPreview(i); });
    });
  }

  /* ---------- lightbox galleria ---------- */
  var gallery = document.getElementById('gallery');
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var shots = [];
  var current = 0;
  var lastFocus = null;

  if (gallery && lb) {
    shots = Array.prototype.slice.call(gallery.querySelectorAll('img'));

    var show = function (i) {
      current = (i + shots.length) % shots.length;
      var img = shots[current];
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = img.alt || '';
    };
    var open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      document.getElementById('lbClose').focus();
    };
    var close = function () {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    gallery.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      open(Array.prototype.indexOf.call(gallery.children, btn));
    });
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lbNext').addEventListener('click', function () { show(current + 1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.tagName === 'FIGURE') close();
    });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* ---------- orari: oggi + stato apertura ---------- */
  /* Mar-Ven 08:30-19:30 · Sab 08:30-18:30 · Dom e Lun chiuso */
  var SCHEDULE = {
    0: null,
    1: null,
    2: [510, 1170],
    3: [510, 1170],
    4: [510, 1170],
    5: [510, 1170],
    6: [510, 1110]
  };

  var romeNow = function () {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit',
        minute: '2-digit', hour12: false
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var day = days[map.weekday];
      if (day === undefined) return null;
      var h = parseInt(map.hour, 10);
      if (h === 24) h = 0;
      return { day: day, minutes: h * 60 + parseInt(map.minute, 10) };
    } catch (err) {
      var d = new Date();
      return { day: d.getDay(), minutes: d.getHours() * 60 + d.getMinutes() };
    }
  };

  var now = romeNow();
  if (now) {
    var row = document.querySelector('.hours li[data-day="' + now.day + '"]');
    if (row) {
      row.classList.add('is-today');
      var tag = row.querySelector('.today-tag');
      if (tag) tag.hidden = false;
    }

    var pill = document.getElementById('statusPill');
    var label = document.getElementById('statusText');
    if (pill && label) {
      var today = SCHEDULE[now.day];
      var openNow = !!today && now.minutes >= today[0] && now.minutes < today[1];
      if (openNow) {
        pill.classList.add('is-open');
        label.textContent = 'Aperto ora · si chiude alle ' + (today[1] === 1110 ? '18:30' : '19:30');
      } else {
        pill.classList.add('is-shut');
        var names = { 2: 'martedì', 3: 'mercoledì', 4: 'giovedì', 5: 'venerdì', 6: 'sabato' };
        var next = null;
        if (today && now.minutes < today[0]) {
          next = 'oggi alle 08:30';
        } else {
          for (var k = 1; k <= 7 && !next; k++) {
            var d2 = (now.day + k) % 7;
            if (SCHEDULE[d2]) next = (k === 1 ? 'domani' : names[d2]) + ' alle 08:30';
          }
        }
        label.textContent = 'Chiuso ora · riapriamo ' + (next || 'martedì alle 08:30');
      }
    }
  }

  /* ---------- video hero: play difensivo ---------- */
  var video = document.querySelector('.hero video');
  if (video) {
    video.muted = true;
    video.setAttribute('muted', '');
    var tryPlay = function () {
      var p = video.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
    };
    tryPlay();
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) tryPlay();
    });
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true });
  }

  /* ---------- anno corrente eventuale ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
