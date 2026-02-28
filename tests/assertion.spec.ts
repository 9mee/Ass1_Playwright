import { test, expect } from '@playwright/test';

test('Assertion checks - error and sorting', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Wrong password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('do not match');

  // Username should have error class
  await expect(page.locator('#user-name')).toHaveClass(/error/);

  // Login correctly
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Sort Low to High
  await page.selectOption('.product_sort_container', 'lohi');

  // First price should be $7.99
  await expect(
    page.locator('.inventory_item_price').first()
  ).toHaveText('$7.99');
});