import { SpinnerDialog } from '@ionic-native/spinner-dialog';
export interface SpinnerDialogIOSOptions {
    overlayOpacity?: number;
    textColorRed?: number;
    textColorGreen?: number;
    textColorBlue?: number;
}

export class SpinnerDialogMock extends SpinnerDialog {
    /**
     * Shows the spinner dialog
     * @param title {string} Spinner title (shows on Android only)
     * @param message {string} Spinner message
     * @param cancelCallback {boolean|function} Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
     * @param iOSOptions {object} Options for iOS only
     */
    show(title?: string, message?: string, cancelCallback?: any, iOSOptions?: SpinnerDialogIOSOptions): void {};
    /**
     * Hides the spinner dialog if visible
     */
    hide(): void {};
}
