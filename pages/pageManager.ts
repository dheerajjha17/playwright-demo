import { Page } from '@playwright/test';
import {HomePage} from './homePage';
import {CheckoutPage} from './checkoutPage';
import {ProductPage} from './productPage';
import {RegistrationPage} from './registrationPage';

export class PageManager {
  private readonly _homePage: HomePage;
  private readonly _checkoutPage: CheckoutPage;
  private readonly _productPage: ProductPage;
  private readonly _registrationPage: RegistrationPage;

  constructor(readonly page: Page) {
    this.page = page;
    this._homePage = new HomePage(this.page);
    this._checkoutPage = new CheckoutPage(this.page);
    this._productPage = new ProductPage(this.page);
    this._registrationPage = new RegistrationPage(this.page);
  }

    homePageObject() {
    return this._homePage;
  }

    checkoutPageObject() {
    return this._checkoutPage;
  }

    productPageObject(){
    return this._productPage;
  }

    registrationPageObject(){
    return this._registrationPage;
  }

}
