import { chromium, webkit, devices } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();

  // iPad Air = 820x1180
  const ipad = await browser.newContext({ viewport: { width: 820, height: 1180 } });

  const ipadLive = await ipad.newPage();
  await ipadLive.goto('http://localhost:4200/live');
  await ipadLive.waitForLoadState('networkidle');
  await ipadLive.waitForTimeout(800);
  await ipadLive.evaluate(() => window.scrollTo(0, 350));
  await ipadLive.waitForTimeout(200);
  await ipadLive.screenshot({ path: 'e2e/screenshots/ipad-live.png' });

  const ipadShop = await ipad.newPage();
  await ipadShop.goto('http://localhost:4200/shop');
  await ipadShop.waitForLoadState('networkidle');
  await ipadShop.waitForTimeout(600);
  await ipadShop.locator('.tab-btn:has-text("Tickets")').click();
  await ipadShop.waitForTimeout(400);
  await ipadShop.screenshot({ path: 'e2e/screenshots/ipad-shop-tickets.png' });

  await browser.close();

  // Mobile
  const wk = await webkit.launch();
  const mobile = await wk.newContext({ ...devices['iPhone 13'] });

  const mobShop = await mobile.newPage();
  await mobShop.goto('http://localhost:4200/shop');
  await mobShop.waitForLoadState('networkidle');
  await mobShop.waitForTimeout(600);
  await mobShop.locator('.tab-btn:has-text("Tickets")').click();
  await mobShop.waitForTimeout(400);
  await mobShop.screenshot({ path: 'e2e/screenshots/mobile-shop-tickets.png' });

  const mobLive = await mobile.newPage();
  await mobLive.goto('http://localhost:4200/live');
  await mobLive.waitForLoadState('networkidle');
  await mobLive.waitForTimeout(600);
  await mobLive.evaluate(() => window.scrollTo(0, 350));
  await mobLive.waitForTimeout(200);
  await mobLive.screenshot({ path: 'e2e/screenshots/mobile-live.png' });

  await wk.close();
})();
