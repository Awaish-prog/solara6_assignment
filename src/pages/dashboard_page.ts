import { Page, BrowserContext, expect } from "playwright/test";
import { Selectors } from "../support/selectors";
import UIActions from "../support/ui_actions";
import { env } from "../support/env";


export default class DashboardPage {

    private _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    get page(): Page {
        return this._page
    }

    async open() {
        const baseUrl: string = env.baseUrl ?? "";
        this._page.goto(baseUrl); 
    }

    async expectLoaded() {
        const baseUrl: string = env.baseUrl ?? "";
        await expect(this.page).toHaveURL(baseUrl);
        await expect(
            Selectors.userProfileLink(this.page)
        ).toBeVisible();
    }

    async clickOnUserEmail() {
        await UIActions.click(Selectors.userProfileLink(this.page));
    }
}