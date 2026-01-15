import { Browser, chromium } from '@playwright/test';
import { env } from './env';

class BrowserManager {
  private static browser: Browser | null = null;

  static async getBrowser(): Promise<Browser> {
    if (!BrowserManager.browser) {
      BrowserManager.browser = await chromium.launch({ headless: env.headless });
    }
    return BrowserManager.browser;
  }

  static async closeBrowser() {
    if (BrowserManager.browser) {
      await BrowserManager.browser.close();
      BrowserManager.browser = null;
    }
  }
}

export default BrowserManager;
