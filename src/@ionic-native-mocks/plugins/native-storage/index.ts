import { NativeStorage } from '@ionic-native/native-storage/ngx';

export class NativeStorageMock extends NativeStorage {
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    setItem(reference: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    getItem(reference: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Retrieving all keys
     * @returns {Promise<any>}
     */
    keys(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    remove(reference: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    clear(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
