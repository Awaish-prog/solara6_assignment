import { Given, When, Then } from '@cucumber/cucumber';
import CustomWorld from '../world';
import UIActions from '../../support/ui_actions';
import { Selectors } from '../../support/selectors';
import { expect } from '@playwright/test';

When('the user opens their profile', async function(this: CustomWorld) {
    await UIActions.click(Selectors.userProfileLink(this.dashboardPage.page));
});

Then('the user should be navigated to the user profile page', async function(this: CustomWorld) {
    await expect(Selectors.userProfileHeading(this.userProfilePage.page)).toBeVisible();
});

Given('the user is on the user profile page', async function(this: CustomWorld) {
    await this.userProfilePage.open();
});

When('the user updates their name', async function(this: CustomWorld) {
    const newUserName: string = `User_${Date.now()}`;
    this.userName = newUserName;
    await UIActions.fillInput(Selectors.userNameInput(this.userProfilePage.page), newUserName);
    await UIActions.click(Selectors.saveProfileButton(this.userProfilePage.page));
});


Then('the updated name should be saved successfully', async function(this: CustomWorld) {
    await this.userProfilePage.refresh();
    await expect(Selectors.userNameInput(this.userProfilePage.page)).toHaveValue(this.userName);
});