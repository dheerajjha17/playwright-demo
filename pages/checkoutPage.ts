import {Page, Locator, expect} from '@playwright/test';
import { HelperBase } from './helperBase';
import CardDetail from '../models/cardDetail';

export class CheckoutPage extends HelperBase {

    readonly lnkLogin : Locator;
    readonly proceedToCheckoutButton: Locator;
    readonly placeOrderLink: Locator;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvvInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly payAndConfirmOrderButton: Locator;
    readonly orderPlaceMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.lnkLogin = page.getByRole('link', { name: 'Register / Login' });
        this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
        this.placeOrderLink = page.getByRole('link', { name: 'Place Order' });
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvvInput = page.getByRole('textbox', { name: 'ex.' });
        this.monthInput = page.getByRole('textbox', { name: 'MM' });
        this.yearInput = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmOrderButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.orderPlaceMessage = page.locator("//p[contains(text(),'Congratulations')]");

    }

    /**
     * Click on Register/Login link
     */
    async clickOnRegisterLogin() {
        await expect(this.lnkLogin).toBeVisible();
        await this.lnkLogin.click();
    } 
    
    /**
     * Fill payment details and place order
     * @param cardDetails card details such as name, cvv, expiry
     */
    async fillPaymentDetailsAndPlaceOrder(cardDetails: CardDetail) {
        await this.proceedToCheckoutButton.click();
        await this.placeOrderLink.click();
        await this.nameOnCardInput.click();
        await this.nameOnCardInput.fill(cardDetails.name);
        await this.cardNumberInput.click();
        await this.cardNumberInput.fill(cardDetails.cardNumber.toString());
        await this.cvvInput.click();
        await this.cvvInput.fill(cardDetails.cvv.toString());
        await this.monthInput.click();
        await this.monthInput.fill(cardDetails.month.toString());
        await this.yearInput.click();
        await this.yearInput.fill(cardDetails.year.toString());
        await this.payAndConfirmOrderButton.click();
      }

    /**
     * Function to check if order placed message is visible
     * @returns order placed message
     */  
    async getOrderPlacedMessage(): Promise<string> {
        await expect(this.orderPlaceMessage).toBeVisible();
        const message = await this.orderPlaceMessage.textContent();
    
        return message!;
      }  
}