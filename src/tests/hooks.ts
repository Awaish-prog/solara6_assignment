import { Before, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import CustomWorld from './world';
import BrowserManager from '../support/browser_manager';
import { users } from '../data/user';

setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
    await this.init();
});

Before({tags: '@authenticated'}, async function (this: CustomWorld) {
    await this.init();
    await this.loginPage.open();
    await this.loginPage.login(users.validUser.email, users.validUser.password);
    await this.dashboardPage.expectLoaded();
});

AfterAll(async function () {
    await BrowserManager.closeBrowser()
});