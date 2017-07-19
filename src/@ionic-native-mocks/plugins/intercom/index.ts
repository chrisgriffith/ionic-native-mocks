import { Intercom } from '@ionic-native/intercom';

export class IntercomMock extends Intercom {
    /**
     * Register a identified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerIdentifiedUser(options: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Register a unidentified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerUnidentifiedUser(options: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
     * @return {Promise<any>} Returns a promise
     */
    reset(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param secureHash {string}
     * @param secureData {any}
     * @return {Promise<any>} Returns a promise
     */
    setSecureMode(secureHash: string, secureData: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param secureHash {string}
     * @return {Promise<any>} Returns a promise
     */
    setUserHash(secureHash: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param attributes {any}
     * @return {Promise<any>} Returns a promise
     */
    updateUser(attributes: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param eventName {string}
     * @param metaData {any}
     * @return {Promise<any>} Returns a promise
     */
    logEvent(eventName: string, metaData: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessenger(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposer(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param initialMessage {string}
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposerWithInitialMessage(initialMessage: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayConversationsList(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    unreadConversationCount(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setLauncherVisibility(visibility: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setInAppMessageVisibility(visibility: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    hideMessenger(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    registerForPush(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
