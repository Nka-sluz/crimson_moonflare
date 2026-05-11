import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 820, height: 1180 } });

  const shop = await ctx.newPage();
  await shop.goto('http://localhost:4200/shop');
  await shop.waitForLoadState('networkidle');
  await shop.waitForTimeout(800);
  await shop.locator('.tab-btn:has-text("Tickets")').click();
  await shop.waitForTimeout(600);
  // Crop just the ticket rows (below header, nav width ~220px)
  await shop.screenshot({ path: 'e2e/screenshots/ipad-shop-zoom.png', clip: { x: 220, y: 280, width: 600, height: 500 } });

  const live = await ctx.newPage();
  await live.goto('http://localhost:4200/live');
  await live.waitForLoadState('networkidle');
  await live.waitForTimeout(800);
  await live.evaluate(() => window.scrollTo(0, 320));
  await live.waitForTimeout(200);
  await live.screenshot({ path: 'e2e/screenshots/ipad-live-zoom.png', clip: { x: 220, y: 320, width: 600, height: 420 } });

  await browser.close();
})();
