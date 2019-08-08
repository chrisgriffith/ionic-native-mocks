import { CardIO } from '@ionic-native/card-io/ngx';

export interface CardIOOptions {
    /**
     * Set to true to require expiry date
     */
    requireExpiry?: boolean;
    /**
     * 	The user will be prompted for the card CVV
     */
    requireCVV?: boolean;
    /**
     * The user will be prompted for the card billing postal code.
     */
    requirePostalCode?: boolean;
    /**
     * 	Removes the keyboard button from the scan screen.
     */
    supressManual?: boolean;
    /**
     * The postal code will only collect numeric input. Set this if you know the expected country's postal code has only numeric postal codes.
     */
    restrictPostalCodeToNumericOnly?: boolean;
    /**
     * The theme for the card.io Activity's will be set to the theme of the application.
     */
    keepApplicationTheme?: boolean;
    /**
     * The user will be prompted for the cardholder name
     */
    requireCardholderName?: boolean;
    /**
     * Used to display instructions to the user while they are scanning their card.
     */
    scanInstructions?: string;
    /**
     * 	If set, the card will not be scanned with the camera.
     */
    noCamera?: boolean;
    /**
     * If scanExpiry is true, an attempt to extract the expiry from the card image will be made.
     */
    scanExpiry?: boolean;
    /**
     * The preferred language for all strings appearing in the user interface. If not set, or if set to null, defaults to the device's current language setting.
     */
    languageOrLocale?: string;
    /**
     * Changes the color of the guide overlay on the camera. The color is provided in hexadecimal format (e.g. `#FFFFFF`)
     */
    guideColor?: string;
    /**
     * The user will not be prompted to confirm their card number after processing.
     */
    supressConfirmation?: boolean;
    /**
     * The card.io logo will not be shown overlaid on the camera.
     */
    hideCardIOLogo?: boolean;
    /**
     * The card.io logo will be shown instead of the PayPal logo.
     */
    useCardIOLogo?: boolean;
    /**
     * Once a card image has been captured but before it has been processed, this value will determine whether to continue processing as usual.
     */
    supressScan?: boolean;
}
export interface CardIOResponse {
    /**
     * Card type
     */
    cardType: string;
    /**
     * Masked card number, showing only last 4 digits
     */
    redactedCardNumber: string;
    /**
     * Full card number
     */
    cardNumber: string;
    /**
     * Expiry month
     */
    expiryMonth: number;
    /**
     * Expiry year
     */
    expiryYear: number;
    /**
     * CVV
     */
    cvv: string;
    /**
     * Postal code
     */
    postalCode: string;
    /**
     * Cardholder name
     */
    cardholderName: string;
}

export class CardIOMocks extends CardIO {
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    canScan(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     * @returns {Promise<any>}
     */
    scan(options?: CardIOOptions): Promise<CardIOResponse> {
        let response: CardIOResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    version(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    }
}
