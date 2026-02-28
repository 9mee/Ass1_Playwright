import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  retries: 1,

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['html'],
    ['list']
  ],
});