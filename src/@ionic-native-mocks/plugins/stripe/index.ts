import { Stripe } from '@ionic-native/stripe';

export interface StripeCardTokenParams {
    /**
     * Card number
     */
    number: string;
    /**
     * Expiry month
     */
    expMonth: number;
    /**
     * Expiry year
     */
    expYear: number;
    /**
     * CVC / CVV
     */
    cvc?: string;
    /**
     * Cardholder name
     */
    name?: string;
    /**
     * Address line 1
     */
    address_line1?: string;
    /**
     * Address line 2
     */
    address_line2?: string;
    /**
     * City
     */
    address_city?: string;
    /**
     * State / Province
     */
    address_state?: string;
    /**
     * Country
     */
    address_country?: string;
    /**
     * Postal code / ZIP Code
     */
    postal_code?: string;
    /**
     * 3-letter ISO code for currency
     */
    currency?: string;
}
export interface StripeBankAccountParams {
    /**
     * Routing number.
     */
    routing_number: string;
    /**
     * Account number.
     */
    account_number: string;
    /**
     * Currency code. Example: `USD`.
     */
    currency: string;
    /**
     * Country code. Example: `US`.
     */
    country: string;
    /**
     * Account holder name.
     */
    account_holder_name?: string;
    /**
     * Account holder type. This can be `individual` or `company`.
     */
    account_holder_type?: string;
}

export class StripeMock extends Stripe {
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    setPublishableKey(publishableKey: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    createCardToken(params: StripeCardTokenParams): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    createBankAccountToken(params: StripeBankAccountParams): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    validateCardNumber(cardNumber: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    validateCVC(cvc: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    validateExpiryDate(expMonth: string, expYear: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    getCardType(cardNumber: string): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
