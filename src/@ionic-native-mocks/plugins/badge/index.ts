import { Badge } from '@ionic-native/badge';

export class BadgeMock extends Badge {
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    clear(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    set(badgeNumber: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    get(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    increase(increaseBy: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    decrease(decreaseBy: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    hasPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    registerPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
