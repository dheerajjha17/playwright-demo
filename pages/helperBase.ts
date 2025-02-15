import { Page } from "@playwright/test";

export class HelperBase {
    constructor(readonly page: Page) {
        this.page = page;
    }

    /**
     * common method to wait for a number of seconds
     * @param timeInSeconds ex - 1 ,2,3 seconds
     */
    async waitForNumberOfSeconds(timeInSeconds : number) {
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }

}
