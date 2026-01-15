import { setWorldConstructor, World, IWorldOptions} from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import BrowserManager from '../support/browser_manager';
import LoginPage from '../pages/login_page';
import DashboardPage from '../pages/dashboard_page';
import UserProfilePage from '../pages/user_profile_page';

export default class CustomWorld extends World {

    private _browser!: Browser;
    private _context!: BrowserContext;
    private _page!: Page;

    private _loginPage!: LoginPage;
    private _dashboardPage!: DashboardPage;
    private _userProfilePage!: UserProfilePage;

    private _userName!: string;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        this._browser = await BrowserManager.getBrowser();
        this._context = await this._browser.newContext();
        this._page = await this._context.newPage();
    }

    get context(): BrowserContext {
        return this._context;
    }

    set context(browserContext: BrowserContext) {
        this._context = browserContext;
    }

    get page(): Page {
        return this._page;
    }

    set page(page: Page) {
        this._page = page;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    get dashboardPage(): DashboardPage {
        if (!this._dashboardPage) {
            this._dashboardPage = new DashboardPage(this.page);
        }
        return this._dashboardPage;
    }

    get userProfilePage(): UserProfilePage {
        if (!this._userProfilePage) {
            this._userProfilePage = new UserProfilePage(this.page);
        }
        return this._userProfilePage;
    }
}

setWorldConstructor(CustomWorld);