import { Firebase } from '@ionic-native/firebase';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class FirebaseMock extends Firebase {
    /**
     * Get the device token
     * @return {Promise<any>}
     */
    getToken(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    onTokenRefresh(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    onNotificationOpen(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    grantPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Check permission to receive push notifications
   * @return {Promise<any>}
   */
    hasPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param badgeNumber {number}
     * @return {Promise<any>}
     */
    setBadgeNumber(badgeNumber: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    getBadgeNumber(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Subscribe to a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    subscribe(topic: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Unsubscribe from a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    unsubscribe(topic: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Log an event using Analytics
     * @param type {string}
     * @param data {Object}
     * @return {Promise<any>}
     */
    logEvent(type: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Log an Error using FirebaseCrash
     * @param message {string}
     * @return {Promise<any>}
     */
    logError(message: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set the name of the current screen in Analytics
     * @param name {string} Screen name
     * @return {Promise<any>}
     */
    setScreenName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set a user id for use in Analytics
     * @param userId {string}
     * @return {Promise<any>}
     */
    setUserId(userId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set a user property for use in Analytics
     * @param name {string}
     * @param value {string}
     * @return {Promise<any>}
     */
    setUserProperty(name: string, value: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Fetch Remote Config parameter values for your app
     * @param cacheExpirationSeconds
     * @return {Promise<any>}
     */
    fetch(cacheExpirationSeconds?: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    activateFetched(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Retrieve a Remote Config value
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    getValue(key: string, namespace?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Retrieve a Remote Config byte array
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    getByteArray(key: string, namespace?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    getInfo(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param settings {Object}
     * @return {Promise<any>}
     */
    setConfigSettings(settings: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set defaults in the Remote Config
     * @param defaults {Object}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    setDefaults(defaults: any, namespace: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
