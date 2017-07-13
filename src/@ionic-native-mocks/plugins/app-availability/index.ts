import { AppAvailability } from '@ionic-native/app-availability';

export class AppAvailabilityMock extends AppAvailability {
    /**
     * Checks if an app is available on device
     * @param {string} app Package name on android, or URI scheme on iOS
     * @returns {Promise<boolean>}
     */
    check(app: string): Promise<boolean> {
        let response: boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
