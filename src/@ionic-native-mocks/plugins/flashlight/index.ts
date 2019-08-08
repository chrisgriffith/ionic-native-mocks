import { Flashlight } from '@ionic-native/flashlight/ngx';

export class FlashlightMocks extends Flashlight {
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    available(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    switchOn(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    switchOff(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    toggle(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    isSwitchedOn(): boolean {
        return true;
    }
}
