import { AndroidPermissions } from '@ionic-native/android-permissions';

export class AndroidPermissionsMock extends AndroidPermissions {
    PERMISSION: any;
    /**
     * Check permission
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    checkPermission(permission: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Request permission
     * @param permission {string} The name of the permission to request
     * @return {Promise<any>}
     */
    requestPermission(permission: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Request permissions
     * @param permissions {Array<string>} An array with permissions
     * @return {Promise<any>} Returns a promise
     */
    requestPermissions(permissions: string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function still works now, will not support in the future.
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    hasPermission(permission: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
