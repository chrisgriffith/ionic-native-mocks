import { StatusBar } from '@ionic-native/status-bar';

export class StatusBarMock extends StatusBar {
     /**
     * Whether the StatusBar is currently visible or not.
     */
    isVisible: boolean;

    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    overlaysWebView(doesOverlay: boolean): void {};
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    styleDefault(): void {};
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    styleLightContent(): void {};
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    styleBlackTranslucent(): void {};
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    styleBlackOpaque(): void {};
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    backgroundColorByName(colorName: string): void {};
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    backgroundColorByHexString(hexString: string): void {};
    /**
     * Hide the StatusBar
     */
    hide(): void {};
    /**
    * Show the StatusBar
    */
    show(): void {};
}
