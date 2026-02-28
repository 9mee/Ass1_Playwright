import { test, expect } from '@playwright/test';

test('Filter and Cart functionality', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Sort: Low to High
  await page.selectOption('.product_sort_container', 'lohi');

  // Add Backpack
  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Add Bike Light
  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  // Remove Backpack
  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});