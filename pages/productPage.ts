import {Page, Locator, expect} from '@playwright/test';
import { HelperBase } from './helperBase';

export class ProductPage extends HelperBase {

    readonly headingText: Locator;
    readonly productLink: Locator;
    readonly quantityInput: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartLink: Locator;
    readonly proceedToCheckoutButton: Locator;
  
    constructor(page: Page) {
      super(page);
      this.productLink = page.locator("//a[@href='/product_details/3']");
      this.quantityInput = page.locator('#quantity');
      this.addToCartButton = page.locator("//button[contains(@class,'cart')]");
      this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
      this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    }
  
    /**
     * Add product to cart with random quantity between 1 to 20
     */
    async addProductToCart() {
        const randomQuantity = Math.floor(Math.random() * 20) + 1;
        await expect(this.productLink).toBeVisible();
        await this.productLink.click();
        await expect(this.quantityInput).toBeVisible();
        await this.quantityInput.click();
        await this.quantityInput.fill(randomQuantity.toString());
        await this.addToCartButton.click();
    } 
    
    /**
     * Proceed to checkout
     */
    async proceedToCheckout() {
        await expect(this.viewCartLink).toBeVisible();
        await this.viewCartLink.click();
        await this.proceedToCheckoutButton.click();
      }
}