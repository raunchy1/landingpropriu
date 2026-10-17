# Limitless Barbers — Instagram Reel (9:16)

`limitless-reel.mp4` — 1080×1920, 24 s, 30 fps, H.264 (High@4.0, CRF 18) + silent AAC
track for platform compatibility. ~22 MB.
`limitless-reel-poster.png` — 1080×1920 cover frame (t = 2.67 s).

## Structure

| Time | Beat |
|------|------|
| 0.0 – 3.3 s | Hook — `hero.mp4` studio pan, "Il taglio che ti cambia la giornata." |
| 3.3 – 5.0 s | `salondays_02` — kinetic "Fade" |
| 5.0 – 6.6 s | `interior_a88_01` — Ken Burns, "Un salone firmato a88_studio" |
| 6.6 – 8.3 s | `redvalley_03` — kinetic "Barba" |
| 8.3 – 10.0 s | `hero.mp4` (second segment), "Quattro postazioni. Zero fretta." |
| 10.0 – 11.7 s | `salondays_01` — kinetic "Stile" |
| 11.7 – 13.3 s | `interior_a88_04` — Ken Burns, orari |
| 13.3 – 15.0 s | `interior_a88_05` — "Barbering without limits" |
| 15.0 – 19.4 s | Recensioni Google — **5,0 · ★★★★★ · 63 recensioni** |
| 19.4 – 24.0 s | `logo/motion/limitless-mark-animated.svg` + CTA "Prenota ora su WhatsApp" · Olbia |

## Source media

Every frame comes from files already in this folder — `img/hero.mp4` and seven real
photos (`salondays_01-03`, `redvalley_03`, `interior_a88_01/04/05`). The end card is
the brand's own animated mark, `logo/motion/limitless-mark-animated.svg`, inlined
unmodified: its CSS animations are paused and scrubbed through the Web Animations API
(`getAnimations()` + `currentTime`) so the lockup stays frame-accurate next to the GSAP
timeline. It runs at 1.3x so the 3.6 s build fits the end card.

The rating is the figure published on the landing page (`index.html`): **5,0 su Google,
63 recensioni**. The brief asked for "4,9" — that number appears nowhere in the site
data, so the real one is used instead.

Type is Bodoni Moda (headlines) and Jost (labels), the same pairing as the landing page.

## Rebuilding

`src/` holds the motion source: `reel.html` (layout), `timeline.js` (a single paused
GSAP master timeline, seeked frame by frame so the render is deterministic) and
`render.js` (Puppeteer screenshot loop). To rebuild:

```bash
# 1. working dir with assets next to the sources
mkdir -p build && cp src/* build/ && cd build
cp ../../logo/motion/limitless-mark-animated.svg .
mkdir ph && cp ../../img/{salondays_01,salondays_02,salondays_03,redvalley_03,\
interior_a88_01,interior_a88_04,interior_a88_05}.jpg ph/

# 2. video frame sequences (the two hero.mp4 segments)
mkdir vid
ffmpeg -ss 0.40 -t 3.40 -i ../../img/hero.mp4 \
  -vf "crop=1280:720:0:1,scale=1080:608:flags=lanczos,fps=30" -q:v 2 vid/a_%04d.jpg
ffmpeg -ss 5.30 -t 1.90 -i ../../img/hero.mp4 \
  -vf "crop=1280:720:0:1,scale=1080:608:flags=lanczos,fps=30" -q:v 2 vid/b_%04d.jpg

# 3. fonts/local.css with @font-face rules for Bodoni Moda + Jost, gsap.min.js,
#    then serve the folder (fetch() and webfonts need http://, not file://)
python3 -m http.server 8731 --bind 127.0.0.1 &
npm i puppeteer-core gsap && node render.js      # → frames/0000.png …

# 4. encode, with the film grain added at this stage
ffmpeg -framerate 30 -i frames/%04d.png \
  -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -filter_complex "[0:v]noise=alls=5:allf=t+u,format=yuv420p[v]" \
  -map "[v]" -map 1:a -shortest \
  -c:v libx264 -preset slow -crf 18 -profile:v high -level 4.0 \
  -x264-params "keyint=60:min-keyint=30:scenecut=0" \
  -c:a aac -b:a 128k -movflags +faststart limitless-reel.mp4
```

`render.js` takes an optional comma-separated frame list as `argv[2]` for spot checks.
