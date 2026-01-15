import { Given, When, Then } from '@cucumber/cucumber';
import CustomWorld from '../world';
import { users } from '../../data/user';
import { Selectors } from '../../support/selectors';
import { expect } from '@playwright/test';

Given('the user is on the login page', async function(this: CustomWorld) {
    await this.loginPage?.open();
});

When('the user logs in with valid credentials', async function(this: CustomWorld){
    await this.loginPage?.login(users.validUser.email, users.validUser.password);
});

Then('the user should see the dashboard', async function(this: CustomWorld) {
    await this.dashboardPage?.expectLoaded();
});

When('the user logs in with a non-existent account', async function(this: CustomWorld){
    await this.loginPage?.login(users.nonExistent.email, users.nonExistent.password);
});

Then('the error message "No customer account found" should be shown', async function(this: CustomWorld) {
    await expect(Selectors.noAccountMessage(this.loginPage.page)).toBeVisible();
});

When('the user logs in with an incorrect password', async function(this: CustomWorld){
    await this.loginPage?.login(users.incorrectPassword.email, users.incorrectPassword.password);
});

Then('the error message "The credentials provided are incorrect" should be shown', async function(this: CustomWorld) {
    await expect(Selectors.incorrectCredentialsMessage(this.loginPage?.page)).toBeVisible();
});