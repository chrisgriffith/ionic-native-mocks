import { Keychain } from '@ionic-native/keychain';

export class KeychainMock extends Keychain {
    /**
     * Retrieves a value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} [touchIDMessage] the message to show underneath the TouchID prompt (if any)
     */
    get(key: string, touchIDMessage?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets a value for a key
     *
     * @param {string} key the key to set
     * @param {string|number|boolean} value the value to set
     * @param {boolean} [useTouchID] whether to store the value with security such that TouchID will be needed to grab it
     */
    set(key: string, value: string | number | boolean, useTouchID?: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Gets a JSON value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} touchIDMessage the message to show underneath the TouchID prompt (if any)
     */
    getJson(key: string, touchIDMessage?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets a JSON value for a key
     *
     * @param {string} key the key to set
     * @param {any} obj value the value to set
     * @param {boolean} [useTouchId] Wether to store the value with security such that TouchID will be needed to grab it
     */
    setJson(key: string, obj: any, useTouchId?: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Removes a value for a key
     *
     * @param {string} key the key to remove
     */
    remove(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
