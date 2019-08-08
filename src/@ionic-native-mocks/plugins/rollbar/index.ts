import { Rollbar } from '@ionic-native/rollbar/ngx';

export class RollbarMock extends Rollbar {
    /**
     * This function initializes the monitoring of your application
     * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
     */
    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
