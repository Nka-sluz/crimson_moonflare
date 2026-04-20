const puppeteer = require('puppeteer');
const path = require('path');

const PAGES = [
  {
    file: 'crimson-moonflare.html',
    output: 'export-home.png',
    hideNav: false,
    fullPage: false,
    width: 1440,
    height: 900,
  },
  {
    file: 'who-we-are.html',
    output: 'export-who-we-are.png',
    hideNav: true,
    fullPage: true,
    width: 1440,
    height: 900,
  },
  {
    file: 'music.html',
    output: 'export-music.png',
    hideNav: true,
    fullPage: false,
    width: 1440,
    height: 900,
  },
];

async function exportPage(browser, config) {
  const page = await browser.newPage();

  await page.setViewport({
    width: config.width,
    height: config.height,
    deviceScaleFactor: 2, // 2× resolution for crisp output
  });

  const url = 'file:///' + path.resolve(config.file).replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Wait for web fonts and animations to settle
  await new Promise(r => setTimeout(r, 1200));

  if (config.hideNav) {
    await page.evaluate(() => {
      // Zero out the nav width CSS variable so all offsets collapse
      document.documentElement.style.setProperty('--nav-w', '0px');

      // Hide the nav element itself
      const nav = document.querySelector('nav');
      if (nav) nav.style.display = 'none';
    });
  }

  if (config.fullPage) {
    // Unlock body scroll so Puppeteer can measure full height
    await page.evaluate(() => {
      document.documentElement.style.overflow = 'visible';
      document.body.style.overflow = 'visible';
    });
  }

  await page.screenshot({
    path: config.output,
    fullPage: config.fullPage,
  });

  await page.close();
  console.log(`  ✓  ${config.output}`);
}

(async () => {
  console.log('\nCrimson Moonflare — PNG export\n');

  const browser = await puppeteer.launch({ headless: true });

  for (const config of PAGES) {
    process.stdout.write(`  Exporting ${config.file}...\n`);
    await exportPage(browser, config);
  }

  await browser.close();
  console.log('\nDone. Check the export-*.png files in this folder.\n');
})().catch(err => {
  console.error('\nExport failed:', err.message);
  process.exit(1);
});
