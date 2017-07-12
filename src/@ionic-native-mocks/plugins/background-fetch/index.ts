
import { BackgroundFetch } from '@ionic-native/background-fetch';
export interface BackgroundFetchConfig {
    /**
     * Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
     */
    stopOnTerminate?: boolean;
}

export class BackgroundFetchMock extends BackgroundFetch {
    /**
     * Configures the plugin's fetch callbackFn
     *
     * @param {BackgroundFetchConfig} config Configuration for plugin
     * @return {Promise<any>}
     */
    configure(config: BackgroundFetchConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Start the background-fetch API.
     * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
     * @returns {Promise<any>}
     */
    start(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
     * @returns {Promise<any>}
     */
    stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
     */
    finish(): void {};
    /**
     * Return the status of the background-fetch
     * @returns {Promise<any>}
     */
    status(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
