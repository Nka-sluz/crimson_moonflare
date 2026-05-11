import { test, expect } from '@playwright/test';

const staticRoutes = [
  { name: 'Home',    path: '/home'    },
  { name: 'Bio',     path: '/bio'     },
  { name: 'Music',   path: '/music'   },
  { name: 'Live',    path: '/live'    },
  { name: 'News',    path: '/news'    },
  { name: 'Shop',    path: '/shop'    },
  { name: 'Contact', path: '/contact' },
];

for (const route of staticRoutes) {
  test(`${route.name} page loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', err => errors.push(err.message));

    await page.goto(route.path);
    await page.waitForLoadState('networkidle');

    await expect(page).not.toHaveTitle(/error/i);
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
  });

  test(`${route.name} page has no layout overflow`, async ({ page }) => {
    await page.goto(route.path);
    await page.waitForLoadState('networkidle');

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll, 'horizontal scroll detected').toBe(false);
  });
}

test('root redirects to /home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/home/);
});

test('nav links are visible and clickable', async ({ page }) => {
  await page.goto('/home');
  await page.waitForLoadState('networkidle');

  const navLinks = page.locator('nav a, header a');
  const count = await navLinks.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    await expect(navLinks.nth(i)).toBeVisible();
  }
});

test('news article page loads with id param', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/news');
  await page.waitForLoadState('networkidle');

  const firstArticleLink = page.locator('a[href*="/news/"]').first();
  const hasArticleLinks = (await firstArticleLink.count()) > 0;

  if (hasArticleLinks) {
    await firstArticleLink.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toMatch(/\/news\/.+/);
  } else {
    await page.goto('/news/1');
    await page.waitForLoadState('networkidle');
  }

  expect(errors).toHaveLength(0);
});

test('shop merch detail page loads with id param', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/shop');
  await page.waitForLoadState('networkidle');

  const firstMerchLink = page.locator('a[href*="/merch/"]').first();
  const hasMerchLinks = (await firstMerchLink.count()) > 0;

  if (hasMerchLinks) {
    await firstMerchLink.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toMatch(/\/merch\/.+/);
  } else {
    await page.goto('/merch/1');
    await page.waitForLoadState('networkidle');
  }

  expect(errors).toHaveLength(0);
});

test('ticket checkout page loads with city param', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/live');
  await page.waitForLoadState('networkidle');

  const firstTicketLink = page.locator('a[href*="/tickets/"]').first();
  const hasTicketLinks = (await firstTicketLink.count()) > 0;

  if (hasTicketLinks) {
    await firstTicketLink.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toMatch(/\/tickets\/.+/);
  } else {
    await page.goto('/tickets/zurich');
    await page.waitForLoadState('networkidle');
  }

  expect(errors).toHaveLength(0);
});

test('past-show page loads with id param', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/past-show/1');
  await page.waitForLoadState('networkidle');
  expect(errors).toHaveLength(0);
});
