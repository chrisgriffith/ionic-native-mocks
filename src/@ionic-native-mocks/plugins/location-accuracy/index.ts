import { LocationAccuracy } from '@ionic-native/location-accuracy';

export class LocationAccuracyMock extends LocationAccuracy {
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    canRequest(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    isRequesting(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    request(accuracy: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_NO_POWER: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_LOW_POWER: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_BALANCED_POWER_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_HIGH_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    SUCCESS_SETTINGS_SATISFIED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    SUCCESS_USER_AGREED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_ALREADY_REQUESTING: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_INVALID_ACTION: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_INVALID_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_EXCEPTION: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_CANNOT_CHANGE_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_USER_DISAGREED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_GOOGLE_API_CONNECTION_FAILED: number;
}
