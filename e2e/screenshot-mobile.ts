import { webkit, devices } from '@playwright/test';

(async () => {
  const browser = await webkit.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4200/home');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'e2e/screenshots/home-mobile-full.png', fullPage: true });
  await browser.close();
})();
