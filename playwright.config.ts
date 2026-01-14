import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    headless: true,
  },
});
