import { DeviceAccounts } from '@ionic-native/device-accounts';

export class DeviceAccountsMocks extends DeviceAccounts {
    /**
     *  Gets all accounts registered on the Android Device
     * @returns {Promise<any>}
     */
    get(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *  Get all accounts registered on Android device for requested type
     * @returns {Promise<any>}
     */
    getByType(type: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     * @returns {Promise<any>}
     */
    getEmails(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *  Get the first email registered on Android device
     * @returns {Promise<any>}
     */
    getEmail(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
