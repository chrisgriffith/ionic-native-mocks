
import { AppUpdate } from '@ionic-native/app-update';

export class AppUpdateMock extends AppUpdate {
    /**
     * Check and update
     * @param updateUrl {string} update api url
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    checkAppUpdate(updateUrl: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
