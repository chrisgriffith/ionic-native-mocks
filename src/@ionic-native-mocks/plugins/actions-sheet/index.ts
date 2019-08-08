import { ActionSheet } from '@ionic-native/action-sheet/ngx';

export interface ActionSheetOptions {
    /**
     * The labels for the buttons. Uses the index x
     */
    buttonLabels: string[];
    /**
     * The title for the actionsheet
     */
    title?: string;
    /**
     * The subtitle for the actionsheet (IOS only)
     */
    subtitle?: string;
    /**
     * Theme to be used on Android
     */
    androidTheme?: number;
    /**
     * Enable a cancel on Android
     */
    androidEnableCancelButton?: boolean;
    /**
     * Enable a cancel on Windows Phone
     */
    winphoneEnableCancelButton?: boolean;
    /**
     * Add a cancel button with text
     */
    addCancelButtonWithLabel?: string;
    /**
     * Add a destructive button with text
     */
    addDestructiveButtonWithLabel?: string;
    /**
     * On an iPad, set the X,Y position
     */
    position?: number[];
    /**
     * Choose if destructive button will be the last
     */
    destructiveButtonLast?: boolean;
}

export class ActionSheetMock extends ActionSheet {
    ANDROID_THEMES: {
        THEME_TRADITIONAL: number;
        THEME_HOLO_DARK: number;
        THEME_HOLO_LIGHT: number;
        THEME_DEVICE_DEFAULT_DARK: number;
        THEME_DEVICE_DEFAULT_LIGHT: number;
    };
    /**
     * Show a native ActionSheet component. See below for options.
     * @param options {ActionSheetOptions} Options See table below
     * @returns {Promise<any>} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    show(options?: ActionSheetOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise<any>} Returns a Promise that resolves when the actionsheet is closed
     */
    hide(options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
