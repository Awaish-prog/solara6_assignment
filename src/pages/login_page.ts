import { Page } from '@playwright/test';
import UIActions from '../support/ui_actions';
import { Selectors } from '../support/selectors';
import { env } from '../support/env';


export default class LoginPage {
    
    private page: Page;
    private url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = `${env.baseUrl}/login`;
    }

    async open() {
        await this.page.goto(this.url);
    }

    async login(email: string, password: string) {
        await UIActions.fillInput(Selectors.emailInput(this.page), email);
        await UIActions.fillInput(Selectors.passwordInput(this.page), password);
        await UIActions.click(Selectors.submitButton(this.page));
    }
}