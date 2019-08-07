import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';

export class SecureStorageObjectMock extends SecureStorageObject {
    constructor(_objectInstance: any) { super(_objectInstance); };
    /**
     * Gets a stored item
     * @param key {string}
     * @returns {Promise<string>}
     */
    get(key: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Stores a value
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    set(key: string, value: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Removes a single stored item
     * @param key {string}
     * @returns {Promise<string>} returns a promise that resolves with the key that was removed
     */
    remove(key: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Get all references from the storage.
     * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
     */
    keys(): Promise<Array<string>> {
        let response: Array<string> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Clear all references from the storage.
     * @returns {Promise<any>}
     */
    clear(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Brings up the screen-lock settings
     * @returns {Promise<any>}
     */
    secureDevice(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}

export class SecureStorageMock extends SecureStorage {
    /**
     * Creates a namespaced storage.
     * @param store {string}
     * @returns {Promise<SecureStorageObject>}
     */
    create(store: string): Promise<SecureStorageObject> {
        let response: SecureStorageObjectMock = new SecureStorageObjectMock(store);
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
