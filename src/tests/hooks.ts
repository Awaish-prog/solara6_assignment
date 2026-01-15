import { Before, AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import CustomWorld from './world';
import BrowserManager from '../support/browser_manager';
import { users } from '../data/user';
import { env } from '../support/env';

setDefaultTimeout(Number(env.timeout));

Before(async function (this: CustomWorld) {
    await this.init();
});

Before({tags: '@authenticated'}, async function (this: CustomWorld) {
    await this.init();
    await this.loginPage.open();
    await this.loginPage.login(users.validUser.email, users.validUser.password);
    await this.dashboardPage.expectLoaded();
});

// BeforeAll(async function() {

//     try {
//         const browser = await BrowserManager.getBrowser();
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto(env.baseUrl, { timeout: Number(env.timeout) });
//     } catch (error) {
//         console.warn('First navigation failed');
//     }
// });

AfterAll(async function () {
    await BrowserManager.closeBrowser()
});