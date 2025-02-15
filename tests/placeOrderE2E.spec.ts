import { test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { generateRandomUserData, generateRandomCardDetail } from '../utils/dataGenerator';
import * as signinValidator from '../validation/registrationPageValidation';
import * as checkoutValidator from '../validation/checkoutValidation';

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

test('test', async ({ page }) => {

  const pageManager = new PageManager(page);
  const userDetails = generateRandomUserData();
  const cardDetails = generateRandomCardDetail();
  await pageManager.homePageObject().clickOnProductPage();
  await pageManager.productPageObject().addProductToCart();
  await pageManager.productPageObject().proceedToCheckout();
  await pageManager.checkoutPageObject().clickOnRegisterLogin();
  await pageManager.registrationPageObject().fillSignUpDetails(userDetails);
  await pageManager.registrationPageObject().fillAccountDetails(userDetails);
  const message = await pageManager.registrationPageObject().getAccountCreationMessage();
  signinValidator.validateUserRegistration(message);
  await pageManager.homePageObject().clickOnCartPage();
  await pageManager.checkoutPageObject().fillPaymentDetailsAndPlaceOrder(cardDetails);
  checkoutValidator.validateOrderPlacement(await pageManager.checkoutPageObject().getOrderPlacedMessage());
  await pageManager.homePageObject().clickOnLogout();
});