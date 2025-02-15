import { expect } from "@playwright/test";
import * as constants from '../resources/constants';

/**
 * Function to validate the user registration
 * @param message - message to validate
 */
export function validateUserRegistration(message: string) {
    expect(message).toContain(constants.SUCCESS_SIGNIN_MESSAGE);
}