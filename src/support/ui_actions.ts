import { Locator } from '@playwright/test';

export default class UIActions {

    static async fillInput(locator: Locator, value: string) {
        await locator.clear();
        await locator.fill(value);
    }

    static async click(locator: Locator) {
        await locator.click();
    }
}