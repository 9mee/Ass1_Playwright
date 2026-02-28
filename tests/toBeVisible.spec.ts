import { test, expect } from '@playwright/test';

test('toBeVisible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('do not match');
  const usernameField = page.locator('[data-test="username"]');
  await expect(usernameField).toHaveClass(/error/);
  const closeErrorButton = page.locator('[data-test="error-button"]');
  await closeErrorButton.click();
  await expect(errorMessage).not.toBeVisible();
});