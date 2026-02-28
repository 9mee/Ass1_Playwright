import { test, expect } from '@playwright/test';

test('Login and verify Products page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});