import { Insomnia } from '@ionic-native/insomnia/ngx';

export class InsomniaMock extends Insomnia {
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    keepAwake(): Promise<any> {
          return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    allowSleepAgain(): Promise<any> {
          return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
