import { MobileAccessibility } from '@ionic-native/mobile-accessibility';

export class MobileAccessibilityMock extends MobileAccessibility {
    MobileAccessibilityNotifications: {
        ANNOUNCEMENT: 'ANNOUNCEMENT';
        BOLD_TEXT_STATUS_CHANGED: 'BOLD_TEXT_STATUS_CHANGED';
        CLOSED_CAPTIONING_STATUS_CHANGED: 'CLOSED_CAPTIONING_STATUS_CHANGED';
        DARKER_SYSTEM_COLORS_STATUS_CHANGED: 'DARKER_SYSTEM_COLORS_STATUS_CHANGED';
        GRAYSCALE_STATUS_CHANGED: 'GRAYSCALE_STATUS_CHANGED';
        GUIDED_ACCESS_STATUS_CHANGED: 'GUIDED_ACCESS_STATUS_CHANGED';
        INVERT_COLORS_STATUS_CHANGED: 'INVERT_COLORS_STATUS_CHANGED';
        LAYOUT_CHANGED: 'LAYOUT_CHANGED';
        MONO_AUDIO_STATUS_CHANGED: 'MONO_AUDIO_STATUS_CHANGED';
        PAGE_SCROLLED: 'PAGE_SCROLLED';
        REDUCE_MOTION_STATUS_CHANGED: 'REDUCE_MOTION_STATUS_CHANGED';
        REDUCE_TRANSPARENCY_STATUS_CHANGED: 'REDUCE_TRANSPARENCY_STATUS_CHANGED';
        SCREEN_CHANGED: 'SCREEN_CHANGED';
        SCREEN_READER_STATUS_CHANGED: 'SCREEN_READER_STATUS_CHANGED';
        SPEAK_SCREEN_STATUS_CHANGED: 'SPEAK_SCREEN_STATUS_CHANGED';
        SPEAK_SELECTION_STATUS_CHANGED: 'SPEAK_SELECTION_STATUS_CHANGED';
        SWITCH_CONTROL_STATUS_CHANGED: 'SWITCH_CONTROL_STATUS_CHANGED';
        TOUCH_EXPLORATION_STATUS_CHANGED: 'TOUCH_EXPLORATION_STATUS_CHANGED';
    };
    /**
     * Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    isScreenReaderRunning(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method
     * @returns {Promise<boolean>} A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    isVoiceOverRunningCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    isTalkBackRunningCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
     * If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.
     * @returns {Promise<boolean>} Returns the result
     */
    isChromeVoxActive(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isBoldTextEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isClosedCaptioningEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isDarkerSystemColorsEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isGrayscaleEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isGuidedAccessEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isInvertColorsEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isMonoAudioEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isReduceMotionEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isReduceTransparencyEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isSpeakScreenEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isSpeakSelectionEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isSwitchControlRunningCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    isTouchExplorationEnabledCallback(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * * @returns {Promise<number>} Returns the result
     */
    getTextZoomCallback(): Promise<number> {
        let response: number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * @param textZoom {number} A percentage value by which text in the WebView should be scaled.
     */
    setTextZoom(textZoom: number): void {};
    /**
     *
     */
    updateTextZoom(): void {};
    /**
     * A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
     * @param value {boolean} Returns the result
     */
    usePreferredTextZoom(value: boolean): void {};
    /**
     * Posts a notification with a string for the screen reader to announce if it is running.
     * @param mobileAccessibilityNotification {any}
     * @param value {string} A string to be announced by a screen reader.
     * @returns {Promise<boolean>} Returns the result
     */
    postNotification(mobileAccessibilityNotification: any, value: string): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
     * @param value {string}
     * @param queueMode {mumber}
     * @param properties {any}
     */
    speak(value: string, queueMode?: number, properties?: any): void {};
    /**
     * Stops speech.
     */
    stop(): void {};
}
