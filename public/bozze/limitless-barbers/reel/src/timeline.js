/* Limitless Barbers — reel master timeline (deterministic, seek-driven) */
(() => {
  const FPS = 30, DUR = 24.0;
  const q  = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- split text into per-char animatable spans ---------- */
  function split(el) {
    const txt = el.textContent;
    el.textContent = '';
    const chars = [];
    for (const c of txt) {
      if (c === ' ') { el.appendChild(document.createTextNode(' ')); continue; }
      const outer = document.createElement('span');
      outer.className = 'ch';
      const inner = document.createElement('i');
      inner.textContent = c;
      outer.appendChild(inner);
      el.appendChild(outer);
      chars.push(inner);
    }
    return chars;
  }

  const SCENES = [
    { id: 's0', in: 0.00,  out: 3.30 },
    { id: 's1', in: 3.30,  out: 5.00 },
    { id: 's2', in: 5.00,  out: 6.60 },
    { id: 's3', in: 6.60,  out: 8.30 },
    { id: 's4', in: 8.30,  out: 10.00 },
    { id: 's5', in: 10.00, out: 11.70 },
    { id: 's6', in: 11.70, out: 13.30 },
    { id: 's7', in: 13.30, out: 15.00 },
    { id: 's8', in: 15.00, out: 19.40 },
    { id: 's9', in: 19.40, out: 24.00 }
  ];

  const tl = gsap.timeline({ paused: true });

  /* ---------- scene cross-cuts ---------- */
  SCENES.forEach((s, i) => {
    const el = q('#' + s.id);
    const fadeIn = i === 0 ? 0.26 : 0.20;
    const start  = i === 0 ? 0.00 : s.in - 0.14;
    tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: fadeIn, ease: 'power1.out' }, start);
    if (i < SCENES.length - 1) {
      tl.to(el, { opacity: 0, duration: 0.18, ease: 'power1.in' }, s.out - 0.02);
    }
  });

  /* ---------- beat accents on the hard cuts ---------- */
  const flash = q('#flash');
  [3.30, 6.60, 10.00, 13.30, 15.00, 19.40].forEach((t, i) => {
    tl.fromTo(flash, { opacity: 0 }, { opacity: 0.085, duration: 0.05, ease: 'none' }, t - 0.05)
      .to(flash, { opacity: 0, duration: 0.16, ease: 'power2.out' }, t);
    const bar = q(i % 2 ? '#bar2' : '#bar1');
    tl.fromTo(bar, { top: '-4px', opacity: 0.9 },
                   { top: '1924px', opacity: 0, duration: 0.42, ease: 'power2.out' }, t - 0.04);
  });

  /* ---------- Ken Burns helper ---------- */
  // Real photos keep moving through the cut: the tween starts before the scene
  // appears and ends after it leaves, so no frame is ever static.
  function ken(img, s, from, to) {
    tl.fromTo(img, from, { ...to, duration: (s.out - s.in) + 0.9, ease: 'none' }, s.in - 0.45);
  }

  const S = Object.fromEntries(SCENES.map(s => [s.id, s]));

  /* ================= 0 · HOOK ================= */
  tl.fromTo('#s0 .backdrop img', { scale: 1.10 }, { scale: 1.00, duration: 3.9, ease: 'none' }, 0);
  tl.fromTo('#s0 .window img',   { scale: 1.12, xPercent: -50, yPercent: -50 },
                                 { scale: 1.00, duration: 3.9, ease: 'none' }, 0);
  tl.fromTo('#s0 .window', { clipPath: 'inset(50% 0% 50% 0%)' },
                           { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, ease: 'power3.out' }, 0.06);
  tl.fromTo('#s0 .eyebrow', { opacity: 0, y: 16, letterSpacing: '0.58em' },
                            { opacity: 1, y: 0, letterSpacing: '0.42em', duration: 0.9, ease: 'power3.out' }, 0.18);
  tl.fromTo('#s0 .hook .mask > span', { yPercent: 115 },
                                      { yPercent: 0, duration: 0.82, ease: 'power3.out', stagger: 0.12 }, 0.62);
  tl.fromTo('#s0 .btm .rule', { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.out' }, 1.55);
  tl.fromTo('#s0 .btm .kicker', { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, 1.75);
  tl.to('#s0 .hook', { y: -28, duration: 0.5, ease: 'power2.in' }, 2.90);

  /* ================= big-word scenes (Fade / Barba / Stile) ================= */
  [['s1', 1.15], ['s3', -1.0], ['s5', 1.0]].forEach(([id, dir]) => {
    const s = S[id];
    const img = q(`#${id} .bleed img`);
    ken(img, s, { scale: 1.00, x: 0, y: 0, xPercent: -50, yPercent: -50 },
                { scale: 1.17, x: 22 * dir, y: -16 });

    const word = q(`#${id} .word`);
    const chars = split(q(`#${id} [data-split]`));
    tl.fromTo(chars, { yPercent: 118 }, { yPercent: 0, duration: 0.72, ease: 'power4.out', stagger: 0.05 }, s.in + 0.06);
    tl.fromTo(word, { scale: 1.07 }, { scale: 1.0, duration: 1.25, ease: 'power3.out' }, s.in + 0.06);
    tl.to(word, { y: -46, opacity: 0, duration: 0.28, ease: 'power2.in' }, s.out - 0.30);

    const sub = q(`#${id} .wordsub`);
    tl.fromTo(sub, { opacity: 0, y: 22, letterSpacing: '0.46em' },
                   { opacity: 1, y: 0, letterSpacing: '0.30em', duration: 0.8, ease: 'power3.out' }, s.in + 0.42);
    tl.to(sub, { opacity: 0, duration: 0.24, ease: 'power2.in' }, s.out - 0.28);
  });

  /* ================= framed photo scenes ================= */
  [['s2', 1], ['s6', -1]].forEach(([id, dir]) => {
    const s = S[id];
    tl.fromTo(`#${id} .backdrop img`, { scale: 1.00 }, { scale: 1.10, duration: (s.out - s.in) + 0.9, ease: 'none' }, s.in - 0.45);
    tl.fromTo(`#${id} .window img`, { scale: 1.16, x: 26 * dir, xPercent: -50, yPercent: -50 },
                                    { scale: 1.02, x: -14 * dir, duration: (s.out - s.in) + 0.9, ease: 'none' }, s.in - 0.45);
    tl.fromTo(`#${id} .window`, { clipPath: 'inset(0% 0% 100% 0%)' },
                                { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.68, ease: 'power3.out' }, s.in + 0.02);
    const cap = q(`#${id} .cap`);
    tl.fromTo(cap, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, s.in + 0.26);
    tl.to(cap, { opacity: 0, y: -22, duration: 0.26, ease: 'power2.in' }, s.out - 0.28);
  });

  /* ================= 4 · video window ================= */
  tl.fromTo('#s4 .backdrop img', { scale: 1.08 }, { scale: 1.00, duration: 2.6, ease: 'none' }, S.s4.in - 0.45);
  tl.fromTo('#s4 .window img', { scale: 1.10, xPercent: -50, yPercent: -50 },
                               { scale: 1.00, duration: 2.6, ease: 'none' }, S.s4.in - 0.45);
  tl.fromTo('#s4 .window', { clipPath: 'inset(0% 50% 0% 50%)' },
                           { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.62, ease: 'power3.out' }, S.s4.in + 0.02);
  tl.fromTo('#s4 .cap', { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, S.s4.in + 0.26);
  tl.to('#s4 .cap', { opacity: 0, y: -20, duration: 0.26, ease: 'power2.in' }, S.s4.out - 0.28);

  /* ================= 7 · signage ================= */
  ken(q('#s7 .bleed img'), S.s7, { scale: 1.14, xPercent: -50, yPercent: -50, x: 0 }, { scale: 1.00, x: -18 });
  tl.fromTo('#s7 .cap', { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, S.s7.in + 0.20);
  tl.to('#s7 .cap', { opacity: 0, y: -24, duration: 0.3, ease: 'power2.in' }, S.s7.out - 0.32);

  /* ================= 8 · Google rating (real data from the site) ========== */
  ken(q('#s8 .bleed img'), S.s8, { scale: 1.00, xPercent: -50, yPercent: -50 }, { scale: 1.13 });
  tl.fromTo('#s8 .eyebrow', { opacity: 0, y: 18, letterSpacing: '0.66em' },
                            { opacity: 1, y: 0, letterSpacing: '0.42em', duration: 0.9, ease: 'power3.out' }, 15.14);
  const scoreChars = split(q('#s8 .num'));
  tl.fromTo(scoreChars, { yPercent: 115, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 0.85, ease: 'power4.out', stagger: 0.09 }, 15.32);
  tl.fromTo('#s8 .stars span', { opacity: 0, scale: 0.4, y: 14 },
                               { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2.4)', stagger: 0.085 }, 15.95);
  tl.fromTo('#s8 .lab', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 16.40);
  tl.fromTo('#s8 .rev', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 16.62);
  tl.to(['#s8 .score', '#s8 .stars', '#s8 .lab', '#s8 .rev', '#s8 .eyebrow'],
        { y: -34, opacity: 0, duration: 0.40, ease: 'power2.in' }, 18.92);

  /* ================= 9 · animated logo + CTA ================= */
  // The end card runs the real brand animation from logo/motion: its CSS
  // animations are paused and scrubbed through the Web Animations API so the
  // mark stays frame-accurate alongside the GSAP timeline.
  const LOGO_T0 = 19.42, LOGO_RATE = 1.30, LOGO_DUR = 3.62;
  let logoAnims = [];

  function buildLogo(svgText) {
    const wrap = q('#logoWrap');
    wrap.innerHTML = svgText;
    const svg = wrap.querySelector('svg');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    logoAnims = wrap.getAnimations({ subtree: true });
    logoAnims.forEach(a => { a.pause(); a.currentTime = 0; });
    tl.fromTo('#s9 .glow', { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' }, 19.34);
  }

  function setLogo(t) {
    const lt = Math.max(0, Math.min(LOGO_DUR, (t - LOGO_T0) * LOGO_RATE));
    for (const a of logoAnims) a.currentTime = lt * 1000;
  }

  tl.fromTo('#s9 .cta', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 21.30);
  tl.fromTo('#s9 .wa', { opacity: 0, scale: 0.90, y: 20 },
                       { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'back.out(1.7)' }, 21.46);
  tl.fromTo('#s9 .wa', { boxShadow: '0 0 0 rgba(201,169,110,0)' },
                       { boxShadow: '0 0 46px rgba(201,169,110,.34)', duration: 1.1, ease: 'power2.out' }, 22.16);
  const olbiaChars = split(q('#s9 .place .serif'));
  tl.fromTo(olbiaChars, { yPercent: 115 }, { yPercent: 0, duration: 0.8, ease: 'power4.out', stagger: 0.07 }, 21.95);
  tl.fromTo('#s9 .addr', { opacity: 0, y: 18, letterSpacing: '0.50em' },
                         { opacity: 1, y: 0, letterSpacing: '0.30em', duration: 0.9, ease: 'power3.out' }, 22.30);

  /* ---------- per-frame media (video frame sequences) ---------- */
  const VID = {
    s0: { el: [q('#vb0'), q('#vs0')], prefix: 'a_', t0: 0.00, n: 102 },
    s4: { el: [q('#vb4'), q('#vs4')], prefix: 'b_', t0: 8.30, n: 57 }
  };
  function pad4(n) { return String(n).padStart(4, '0'); }

  function setMedia(t) {
    const pending = [];
    for (const k of Object.keys(VID)) {
      const v = VID[k];
      let idx = Math.floor((t - v.t0) * FPS) + 1;
      idx = Math.max(1, Math.min(v.n, idx));
      const src = `vid/${v.prefix}${pad4(idx)}.jpg`;
      for (const im of v.el) {
        if (!im.getAttribute('src').endsWith(src)) { im.src = src; }
        pending.push(im.decode().catch(() => {}));
      }
    }
    return Promise.all(pending);
  }

  /* ---------- public seek API used by the renderer ---------- */
  window.REEL = { FPS, DUR, TOTAL_FRAMES: Math.round(DUR * FPS) };
  window.reelInit = async () => {
    const svgText = await (await fetch('limitless-mark-animated.svg')).text();
    buildLogo(svgText);
    await document.fonts.ready;
    tl.pause(0);
  };
  window.reelSeek = async (t) => {
    await setMedia(t);
    setLogo(t);
    tl.time(Math.min(t, DUR - 0.001), true);
    return true;
  };
})();
