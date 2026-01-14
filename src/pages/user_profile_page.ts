import { BrowserContext, Page } from "playwright";
import { env } from "../support/env";


export default class UserProfilePage {

    private _page: Page;
    
    constructor(page: Page) {
        this._page = page;
    }

    get page(): Page {
        return this._page;
    }

    async open() {
        const profileUrl: string = `${env.baseUrl}/customer/info`
        await this._page.goto(profileUrl);
    }

    async refresh() {
        await this._page.reload();
    }

    
}