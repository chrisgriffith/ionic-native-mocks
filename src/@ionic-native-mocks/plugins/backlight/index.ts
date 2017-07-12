import { Backlight } from '@ionic-native/backlight';

export class BacklightMock extends Backlight {
    /**
     * This function turns backlight on
     * @return {Promise<any>} Returns a promise that resolves when the backlight is on
     */
    on(): Promise<any> {
          return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This function turns backlight off
     * @return {Promise<any>} Returns a promise that resolves when the backlight is off
     */
    off(): Promise<any> {
          return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
