import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  // Live page - scroll to show show rows with buttons
  const live = await ctx.newPage();
  await live.goto('http://localhost:4200/live');
  await live.waitForLoadState('networkidle');
  await live.waitForTimeout(1500);
  await live.evaluate(() => window.scrollTo(0, 400));
  await live.waitForTimeout(300);
  await live.screenshot({ path: 'e2e/screenshots/live-buttons.png' });

  // Shop page - click Tickets tab first
  const shop = await ctx.newPage();
  await shop.goto('http://localhost:4200/shop');
  await shop.waitForLoadState('networkidle');
  await shop.waitForTimeout(1000);
  // Click tickets tab
  const ticketsTab = shop.locator('text=/ticket/i').first();
  if (await ticketsTab.count() > 0) await ticketsTab.click();
  await shop.waitForTimeout(500);
  await shop.screenshot({ path: 'e2e/screenshots/shop-tickets.png' });

  await browser.close();
})();
