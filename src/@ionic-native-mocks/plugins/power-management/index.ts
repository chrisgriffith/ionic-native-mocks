import { PowerManagement } from '@ionic-native/power-management/ngx';

export class PowerManagementMock extends PowerManagement {
    /**
     * Acquire a wakelock by calling this.
     * @returns {Promise<any>}
     */
    acquire(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * This acquires a partial wakelock, allowing the screen to be dimmed.
     * @returns {Promise<any>}
     */
    dim(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
     * @returns {Promise<any>}
     */
    release(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
     * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
     * @param set {boolean}
     * @returns {Promise<any>}
     */
    setReleaseOnPause(set: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
