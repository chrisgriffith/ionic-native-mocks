import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

export class FirebaseAnalyticsMocks extends FirebaseAnalytics {
    /**
     * Logs an app event.
     * Be aware of automatically collected events.
     * @param name {string} The name of the event
     * @param params {any} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    logEvent(name: string, params: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets the user ID property.
     * This feature must be used in accordance with Google's Privacy Policy.
     * @param id {string} The user ID
     * @return {Promise<any>} Returns a promise
     */
    setUserId(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This feature must be used in accordance with Google's Privacy Policy.
     * Be aware of automatically collected user properties.
     * @param name {string} The property name
     * @param value {string} The property value
     * @return {Promise<any>} Returns a promise
     */
    setUserProperty(name: string, value: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param enabled {boolean}
     * @return {Promise<any>} Returns a promise
     */
    setEnabled(enabled: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * @param name {string} The name of the screen
     * @return {Promise<any>} Returns a promise
     */
    setCurrentScreen(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
