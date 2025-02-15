import { Page, Locator, expect } from '@playwright/test';
import { HelperBase } from './helperBase';
import UserDetail from '../models/userDetail';

export class RegistrationPage extends HelperBase {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signUpButton: Locator;
    readonly passwordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreationMessage: Locator;
    readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signUpButton = page.getByRole('button', { name: 'Signup' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.stateInput = page.getByRole('textbox', { name: 'State *' });
    this.cityInput = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.accountCreationMessage = page.locator("//p[contains(text(),'Congratulations')]");
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  /**
   * Fill sign up details
   * @param userDetails user details such as name, email
   */
  async fillSignUpDetails(userDetails: UserDetail) {
    await expect(this.nameInput).toBeVisible();
    await this.nameInput.click();
    await this.nameInput.fill(userDetails.firstName);
    await this.emailInput.click();
    await this.emailInput.fill(userDetails.email);
    await this.signUpButton.click();
  }

  /**
   * Fill user account details
   * @param userDetails user details such as password, first name, last name, address, state, city, zipcode, mobile number
   */
  async fillAccountDetails(userDetails: UserDetail) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.click();
    await this.passwordInput.fill('Exercise@123');
    await this.firstNameInput.click();
    await this.firstNameInput.fill(userDetails.firstName);
    await this.lastNameInput.click();
    await this.lastNameInput.fill(userDetails.lastName);
    await this.addressInput.click();
    await this.addressInput.fill(userDetails.address);
    await this.stateInput.click();
    await this.stateInput.fill(userDetails.state);
    await this.cityInput.click();
    await this.cityInput.fill(userDetails.city);
    await this.zipcodeInput.click();
    await this.zipcodeInput.fill(userDetails.pincode);
    await this.mobileNumberInput.click();
    await this.mobileNumberInput.fill(userDetails.mobileNumber);
    await this.createAccountButton.click();
  }

  /**
   * Fetch account creation message
   * @returns account creation message
   */
  async getAccountCreationMessage(): Promise<string> {
    await expect(this.accountCreationMessage).toBeVisible();
    const message = await this.accountCreationMessage.textContent();
    await this.continueButton.click();

    return message!;
  }

}