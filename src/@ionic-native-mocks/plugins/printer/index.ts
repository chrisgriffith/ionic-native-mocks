import { Printer } from '@ionic-native/printer/ngx';
export interface PrintOptions {
    /**
     * The name of the print job and the document
     */
    name?: string;
    /**
     * The network URL of the printer.
     * Only supported on iOS.
     */
    printerId?: string;
    /**
     * Specifies the duplex mode to use for the print job.
     * Either double-sided (duplex:true) or single-sided (duplex:false).
     * Double-sided by default.
     * Only supported on iOS
     */
    duplex?: boolean;
    /**
     * The orientation of the printed content, portrait or landscape
     * Portrait by default.
     */
    landscape?: boolean;
    /**
     * If your application only prints black text, setting this property to true can result in better performance in many cases.
     * False by default.
     */
    grayscale?: boolean;
    /**
     * The Size and position of the print view
     */
    bounds?: number[] | any;
}

export class PrinterMock extends Printer {
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean> {
        let response: boolean = true;
         return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
     * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
     */
    check(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
     * @returns {Promise<any>}
     */
    pick(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    print(content: string | HTMLElement, options?: PrintOptions): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
