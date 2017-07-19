import { GoogleAnalytics } from '@ionic-native/google-analytics';

export class GoogleAnalyticsMock extends GoogleAnalytics {
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
     * @returns {Promise<any>}
     */
    startTrackerWithId(id: string, interval?: number): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow {boolean}
     * @returns {Promise<any>}
     */
    setAllowIDFACollection(allow: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string} id User ID
     * @returns {Promise<any>}
     */
    setUserId(id: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set a anonymize Ip address
     * @param anonymize {boolean} Set to true to anonymize the IP Address
     * @returns {Promise<any>}
     */
    setAnonymizeIp(anonymize: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets the app version
     * @param appVersion {string} App version
     * @returns {Promise<any>}
     */
    setAppVersion(appVersion: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set OptOut
     * @param optout {boolean}
     * @returns {Promise<any>}
     */
    setOptOut(optout: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Enable verbose logging
     * @returns {Promise<any>}
     */
    debugMode(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Track custom metric
     * @param key {number}
     * @param value {any}
     * @returns {Promise<any>}
     */
    trackMetric(key: number, value?: number): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param title {string} Screen title
     * @param campaignUrl {string} Campaign url for measuring referrals
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    trackView(title: string, campaignUrl?: string, newSession?: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param key {number}
     * @param value {string}
     * @returns {Promise<any>}
     */
    addCustomDimension(key: number, value: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param category {string}
     * @param action {string}
     * @param label {string}
     * @param value {number}
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    trackEvent(category: string, action: string, label?: string, value?: number, newSession?: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Track an exception
     * @param description {string}
     * @param fatal {boolean}
     * @returns {Promise<any>}
     */
    trackException(description: string, fatal: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Track User Timing (App Speed)
     * @param category {string}
     * @param intervalInMilliseconds {number}
     * @param variable {string}
     * @param label {string}
     * @returns {Promise<any>}
     */
    trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     * @param id {string}
     * @param affiliation {string}
     * @param revenue {number}
     * @param tax {number}
     * @param shipping {number}
     * @param currencyCode {string}
     * @returns {Promise<any>}
     */
    addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     * @returns {Promise<any>}
     */
    addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param shouldEnable {boolean}
     * @returns {Promise<any>}
     */
    enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
