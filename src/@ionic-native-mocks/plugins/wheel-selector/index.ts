import { WheelSelector } from '@ionic-native/wheel-selector';

export interface WheelSelectorItem {
    description?: string;
}
export interface DefaultItem {
    index: number;
    value: string;
}
export interface WheelSelectorOptions {
    /**
     * The title of the selector's input box
     */
    title: string;
    /**
     * The items to display (array of items).
     */
    items: Array<Array<WheelSelectorItem>>;
    /**
     * Which items to display by default.
     */
    defaultItems?: Array<DefaultItem>;
    /**
     * The 'ok' button text
     * Default: Done
     */
    positiveButtonText?: string;
    /**
     * The 'cancel' button text
     * Default: Cancel
     */
    negativeButtonText?: string;
    /**
     * Android only - theme color, 'light' or 'dark'.
     * Default: light
     */
    theme?: string;
    /**
     * Whether to have the wheels 'wrap' (Android only)
     * Default: false
     */
    wrapWheelText?: boolean;
    /**
     * The json key to display, by default it is description, this allows for setting any
     * key/value to be displayed
     * Default: description
     */
    displayKey?: string;
}
export interface WheelSelectorData {
    data: any;
}

export class WheelSelectorMock extends WheelSelector {
    /**
     * Shows the wheel selector
     * @param {WheelSelectorOptions} options Options for the wheel selector
     * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
     */
    show(options: WheelSelectorOptions): Promise<WheelSelectorData> {
        let response: WheelSelectorData;
         return new Promise((resolve, reject) => {
            resolve( response );
        });
    };
    /**
     * Hide the selector
     * @returns {Promise<void>}
     */
    hideSelector(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
