import { Page } from "playwright";
import UIActions from "../support/ui_actions";
import { Selectors } from "../support/selectors";
import { env } from "../support/env";


export default class LoginPage {
    
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        const loginUrl: string = `${env.baseUrl}/login`;
        await this.page.goto(loginUrl);
    }

    async login(email: string, password: string) {
        await UIActions.fillInput(Selectors.emailInput(this.page), email);
        await UIActions.fillInput(Selectors.passwordInput(this.page), password);
        await UIActions.click(Selectors.submitButton(this.page));
    }
}