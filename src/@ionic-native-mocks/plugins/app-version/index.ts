import { AppVersion } from '@ionic-native/app-version/ngx';

export class AppVersionMock extends AppVersion {
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    getAppName(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    getPackageName(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    getVersionCode(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    getVersionNumber(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
