import { AppRate } from '@ionic-native/app-rate';
export interface AppRatePreferences {
    /**
     * Custom BCP 47 language tag
     */
    useLanguage?: string;
    /**
     * Custom application title
     */
    displayAppName?: string;
    /**
     * Show dialog again when application version will be updated. Defaults to `true`
     */
    promptAgainForEachNewVersion?: boolean;
    /**
     * count of runs of application before dialog will be displayed. Defaults to `3`
     */
    usesUntilPrompt?: number;
    /**
     * leave app or no when application page opened in app store (now supported only for iOS). Defaults to `false`
     */
    openStoreInApp?: boolean;
    /**
     * use custom view for rate dialog. Defaults to `false`
     */
    useCustomRateDialog?: boolean;
    /**
     * Custom locale object
     */
    customLocale?: any;
    /**
     * Callbacks for events
     */
    callbacks?: AppRateCallbacks;
    /**
     * App Store URLS
     */
    storeAppURL?: AppUrls;
}
export interface AppRateCallbacks {
    /**
     * call back function. called when user clicked on rate-dialog buttons
     */
    onButtonClicked?: Function;
    /**
     * call back function. called when rate-dialog showing
     */
    onRateDialogShow?: Function;
    /**
     * call back function. called when user clicked on negative feedback
     */
    handleNegativeFeedback?: Function;
}
export interface AppUrls {
    /**
     * application id in AppStore
     */
    ios?: string;
    /**
     * application URL in GooglePlay
     */
    android?: string;
    /**
     * application URL in Windows Store
     */
    windows?: string;
    /**
     * application URL in AppWorld
     */
    blackberry?: string;
    /**
     * application URL in WindowsStore
     */
    windows8?: string;
}

export class AppRateMock extends AppRate {
    /**
     * Configure various settings for the Rating View.
     * See table below for options
     */
    preferences: AppRatePreferences;
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    promptForRating(immediately: boolean): void { };
    /**
     * Immediately send the user to the app store rating page
     */
    navigateToAppStore(): void { };
}
