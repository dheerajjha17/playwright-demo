import { faker } from '@faker-js/faker';
import UserDetail from '../models/userDetail';
import CardDetail from '../models/cardDetail';

/**
 * Function to generate random user data
 * @returns UserDetail object ppulated with random data
 */
export function generateRandomUserData(): UserDetail {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const address = faker.location.streetAddress();
  const state = faker.location.state();
  const city = faker.location.city();
  const pincode = faker.location.zipCode();
  const mobileNumber = faker.phone.number();
  const email = faker.internet.email();

  return new UserDetail(firstName, lastName, address, state, city, pincode, mobileNumber,email);
}

/**
 * Function to generate random card data
 * @returns CardDetail object populated with random data
 */
export function generateRandomCardDetail(): CardDetail {
    const name = faker.person.fullName();
    const cardNumber = parseInt(faker.finance.creditCardNumber('#### #### #### ####').replace(/\s/g, ''), 10);
    const cvv = parseInt(faker.finance.creditCardCVV(), 10);
    const month = faker.date.future().getMonth() + 1;
    const year = faker.date.future().getFullYear();
  
    return new CardDetail(name, cardNumber, cvv, month, year);
  }