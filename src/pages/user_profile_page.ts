import { Page } from '@playwright/test';
import { env } from '../support/env';


export default class UserProfilePage {

    private _page: Page;
    private url: string
    
    constructor(page: Page) {
        this._page = page;
        this.url = `${env.baseUrl}/customer/info`;
    }

    get page(): Page {
        return this._page;
    }

    async open() {
        await this._page.goto(this.url);
    }

    async refresh() {
        await this._page.reload();
    }

    
}