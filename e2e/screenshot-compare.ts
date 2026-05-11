import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  // Live page shows section
  const live = await ctx.newPage();
  await live.goto('http://localhost:4200/live');
  await live.waitForLoadState('networkidle');
  await live.waitForTimeout(800);
  await live.evaluate(() => window.scrollTo(0, 380));
  await live.waitForTimeout(200);
  await live.screenshot({ path: 'e2e/screenshots/compare-live.png', clip: { x: 260, y: 380, width: 1180, height: 400 } });

  // Shop tickets tab
  const shop = await ctx.newPage();
  await shop.goto('http://localhost:4200/shop');
  await shop.waitForLoadState('networkidle');
  await shop.waitForTimeout(600);
  await shop.locator('.tab-btn:has-text("Tickets")').click();
  await shop.waitForTimeout(400);
  await shop.screenshot({ path: 'e2e/screenshots/compare-shop-tickets.png', clip: { x: 260, y: 200, width: 1180, height: 450 } });

  await browser.close();
})();
