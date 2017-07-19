import { FlurryAnalytics, FlurryAnalyticsObject } from '@ionic-native/flurry-analytics';

export interface FlurryAnalyticsOptions {
    /** Flurry API key is required */
    appKey: string;
    /**
     * Overrides the version of the app
     */
    version?: string;
    /**
     * How long can the app be paused before a new session is created,
     * must be less than or equal to five for Android devices
     */
    continueSessionSeconds?: number;
    /**
     * Set id of the user
     */
    userId?: string;
    /**
     * Set gender of the user
     * Valid values are "m", "M", "f" and "F"
     */
    gender?: string;
    /**
     * Set age of the user
     */
    age?: number;
    /**
     * Set error for log
     * Values: VERBOSE, DEBUG, INFO, WARN, ERROR
     */
    logLevel?: string;
    /**
     * Defaults to false
     */
    enableLogging?: boolean;
    /**
     * Should every event show up the app's log, defaults to true
     */
    enableEventLogging?: boolean;
    /**
     * Should app crashes be recorded in flurry, defaults to false, iOS only
     */
    enableCrashReporting?: boolean;
    /**
     * Should the session continue when the app is the background, defaults to false, iOS only
     */
    enableBackgroundSessions?: boolean;
    /**
     * Should data be pushed to flurry when the app closes, defaults to true, iOS only
     */
    reportSessionsOnClose?: boolean;
    /**
     * Should data be pushed to flurry when the app is paused, defaults to true, iOS only
     */
    reportSessionsOnPause?: boolean;
}
export interface FlurryAnalyticsLocation {
    latitude: number;
    longitude: number;
    /**
     * Set altitude
     * It is optional and use only for iOS
     */
    verticalAccuracy?: number;
    /**
     * Set radius about 2d point
     * It is optional and use only for iOS
     */
    horizontalAccuracy?: number;
}
/**
* @hidden
*/
export class FlurryAnalyticsObjectMock extends FlurryAnalyticsObject {
    // private _objectInstance;
    constructor(_objectInstance: any) {
        super(_objectInstance);
    };
    /**
     * This function set the Event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when event is sent
     */
    logEvent(eventName: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Start a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is started tracking
     */
    startTimedEvent(eventName: string, params?: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Complete a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is ended tracking
     */
    endTimedEvent(eventName: string, params?: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function log an error
     * @param code
     * @param message
     * @return {Promise<any>}
     */
    logError(code: any, message: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function log a page view
     * @return {Promise<any>}
     */
    logPageView(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function set the location for the event
     * (this is will only be used for very course grained statistics like city)
     * @param location {FlurryAnalyticsLocation}
     * @param message {string}
     * @return {Promise<any>}
     */
    setLocation(location: FlurryAnalyticsLocation, message: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function start the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    startSession(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function end the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    endSession(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}

export class FlurryAnalyticsMocks extends FlurryAnalytics {
    /**
     * Creates a new instance of FlurryAnalyticsObject
     * @param options {FlurryAnalyticsOptions} options
     * @return {FlurryAnalyticsObject}
     */
    create(options: FlurryAnalyticsOptions): FlurryAnalyticsObject {
        let response: FlurryAnalyticsObject;
        return response;
    };
}
