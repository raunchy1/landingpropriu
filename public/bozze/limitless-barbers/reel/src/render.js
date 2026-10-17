const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'frames');
const PORT = process.env.PORT || 8731;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const f of fs.readdirSync(OUT)) fs.unlinkSync(path.join(OUT, f));

  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1',
           '--hide-scrollbars', '--disable-lcd-text', '--font-render-hinting=none',
           '--force-color-profile=srgb', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('PAGE ERROR:', e.message));
  page.on('console', m => { if (m.type() === 'error') console.error('CONSOLE:', m.text()); });

  await page.goto(`http://127.0.0.1:${PORT}/reel.html`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.reelInit());
  await new Promise(r => setTimeout(r, 400));

  const { FPS, TOTAL_FRAMES } = await page.evaluate(() => window.REEL);
  const only = process.argv[2] ? process.argv[2].split(',').map(Number) : null;
  const list = only || Array.from({ length: TOTAL_FRAMES }, (_, i) => i);

  const t0 = Date.now();
  for (const i of list) {
    await page.evaluate(t => window.reelSeek(t), i / FPS);
    await page.screenshot({
      path: path.join(OUT, String(i).padStart(4, '0') + '.png'),
      optimizeForSpeed: true
    });
    if (i % 60 === 0) {
      const el = (Date.now() - t0) / 1000;
      console.log(`frame ${i}/${TOTAL_FRAMES}  ${el.toFixed(1)}s`);
    }
  }
  console.log(`done ${list.length} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  await browser.close();
})();
