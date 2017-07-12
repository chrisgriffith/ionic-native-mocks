import { BrowserTab } from '@ionic-native/browser-tab';

export class BrowserTabMock extends BrowserTab {
    /**
     * Check if BrowserTab option is available
     * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
     */
    isAvailable(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Opens the provided URL using a browser tab
     * @param {string} url  The URL you want to open
     * @return {Promise<any>} Returns a promise that resolves when check open was successful
     */
    openUrl(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Closes browser tab
     * @return {Promise<any>} Returns a promise that resolves when close was finished
     */
    close(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
