import { Facebook } from '@ionic-native/facebook/ngx';

export interface FacebookLoginResponse {
    status: string;
    authResponse: {
        session_key: boolean;
        accessToken: string;
        expiresIn: number;
        sig: string;
        secret: string;
        userID: string;
    };
}

export class FacebookMock extends Facebook {
    EVENTS: {
        EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app';
        EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app';
        EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions';
        EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions';
        EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration';
        EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view';
        EVENT_NAME_SEARCHED: 'fb_mobile_search';
        EVENT_NAME_RATED: 'fb_mobile_rate';
        EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion';
        EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token';
        EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart';
        EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist';
        EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout';
        EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info';
        EVENT_NAME_PURCHASED: 'fb_mobile_purchase';
        EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved';
        EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked';
        EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits';
        EVENT_PARAM_CURRENCY: 'fb_currency';
        EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method';
        EVENT_PARAM_CONTENT_TYPE: 'fb_content_type';
        EVENT_PARAM_CONTENT_ID: 'fb_content_id';
        EVENT_PARAM_SEARCH_STRING: 'fb_search_string';
        EVENT_PARAM_SUCCESS: 'fb_success';
        EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value';
        EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available';
        EVENT_PARAM_NUM_ITEMS: 'fb_num_items';
        EVENT_PARAM_LEVEL: 'fb_level';
        EVENT_PARAM_DESCRIPTION: 'fb_description';
        EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source';
        EVENT_PARAM_VALUE_YES: '1';
        EVENT_PARAM_VALUE_NO: '0';
    };
    /**
     * Browser wrapper
     * @param {number} appId Your Facebook AppID from their dashboard
     * @param {string} version The version of API you may want to use. Optional
     * @returns {Promise<any>}
     */
    browserInit(appId: number, version?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```typescript
     * {
     *   status: 'connected',
     *   authResponse: {
     *     session_key: true,
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     expiresIn: 5183979,
     *     sig: '...',
     *     secret: '...',
     *     userID: '634565435'
     *   }
     * }
     *
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    login(permissions: string[]): Promise<FacebookLoginResponse> {
        let response: FacebookLoginResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: '12345678912345',
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     session_Key: true,
     *     expiresIn: '5183738',
     *     sig: '...'
     *   },
     *   status: 'connected'
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
     */
    getLoginStatus(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
     */
    getAccessToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    }
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: 'share',
     *   href: 'http://example.com',
     *   caption: 'Such caption, very feed.',
     *   description: 'Much description',
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @param {Object} options The dialog options
     * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
     */
    showDialog(options: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    api(requestPath: string, permissions: string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @returns {Promise<any>}
     */
    logEvent(name: string, params?: Object, valueToSum?: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @returns {Promise<any>}
     */
    logPurchase(value: number, currency: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Open App Invite dialog. Does not require login.
     *
     * For more information see:
     *
     *   the App Invites Overview - https://developers.facebook.com/docs/app-invites/overview
     *   the App Links docs - https://developers.facebook.com/docs/applinks
     *
     *
     * @param {Object}  options An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.
     * @param {string} options.url [App Link](https://developers.facebook.com/docs/applinks) to your app
     * @param {string} [options.picture] image to be displayed in the App Invite dialog
     * @returns {Promise<any>} Returns a Promise that resolves with the result data, or rejects with an error
     */
    appInvite(options: {
        url: string;
        picture: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
