import { ZBar } from '@ionic-native/zbar/ngx';

export interface ZBarOptions {
    /**
     * A string representing the title text (Android only).
     * Default: "Scan QR Code"
     */
    text_title?: string;
    /**
     * A string representing the instruction text (Android only).
     * Default: "Please point your camera at the QR code."
     */
    text_instructions?: string;
    /**
     * A string defining the active camera when opening the scanner.
     * Possible values: "front", "back"
     * Default: "back"
     */
    camera?: string;
    /**
     * A string defining the state of the flash.
     * Possible values: "on", "off", "auto"
     * Default: "auto"
     */
    flash?: string;
    /**
     * A boolean to show or hide a line in the center of the scanner.
     * Default: true
     */
    drawSight?: boolean;
}

export class ZBarMock extends ZBar {
    /**
     * Open the scanner
     * @param options { ZBarOptions } Scan options
     * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
     */
    scan(options: ZBarOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
