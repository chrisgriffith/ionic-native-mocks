
import { Brightness } from '@ionic-native/brightness';

export class BrightnesMock extends Brightness {
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise<any>} Returns a Promise that resolves if setting brightness was successful.
     */
    setBrightness(value: number): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    getBrightness(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    setKeepScreenOn(value: boolean): void {};
}
