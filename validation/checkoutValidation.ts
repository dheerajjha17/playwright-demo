import { expect } from "@playwright/test";
import * as constants from '../resources/constants';

/**
 * Function to validate the order placement
 * @param message - message to validate
 */
export function validateOrderPlacement(message: string) {
    expect(message).toContain(constants.SUCCESS_ORDER_PLACE_MESSAGE);
}