import { Page, Locator } from '@playwright/test';

export class Selectors {

    static emailInput = (page: Page): Locator => page.locator('#Email');
    static passwordInput = (page: Page): Locator => page.locator('#Password');
    static userNameInput = (page: Page): Locator => page.locator('#FirstName');
    static noAccountMessage = (page: Page): Locator => page.locator('li', { hasText: 'No customer account found' });
    static incorrectCredentialsMessage = (page: Page): Locator => page.locator('li', { hasText: 'The credentials provided are incorrect' });

    static saveProfileButton = (page: Page): Locator => page.locator('input[name="save-info-button"]');
    static submitButton = (page: Page): Locator => page.getByRole('button', { name: 'Log in' });
    static userProfileLink = (page: Page): Locator => page.getByRole('link', { name: /account/i });
    static userProfileHeading = (page: Page): Locator => page.getByRole('heading', { level: 1, name: /customer info/i });

}
