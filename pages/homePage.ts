import {Page, Locator, expect} from '@playwright/test';
import { HelperBase } from './helperBase';

export class HomePage extends HelperBase {

    readonly linkProducts : Locator;
    readonly linkCart : Locator;
    readonly linkLogout : Locator;

    constructor(page: Page) {
        super(page);
        this.linkProducts = page.locator("//a[@href='/products']");
        this.linkCart = page.locator("//a[@href='/view_cart']");
        this.linkLogout = page.locator("//a[@href='/logout']");
    }

    /**
     * Click on Products link
     */
    async clickOnProductPage() {
        await expect(this.linkProducts).toBeVisible();
        await this.linkProducts.click();
    }

    /**
     * Click on Cart link
     */
    async clickOnCartPage() {
        await expect(this.linkCart.first()).toBeVisible();
        await this.linkCart.first().click();
    }

    /**
     * Click on Logout link
     */
    async clickOnLogout() {
        await expect(this.linkLogout).toBeVisible();
        await this.linkLogout.click();
    }
}

