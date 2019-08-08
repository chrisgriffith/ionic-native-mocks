import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

export interface BarcodeScannerOptions {
    /**
     * Prefer front camera. Supported on iOS and Android.
     */
    preferFrontCamera?: boolean;
    /**
     * Show flip camera button. Supported on iOS and Android.
     */
    showFlipCameraButton?: boolean;
    /**
     * Show torch button. Supported on iOS and Android.
     */
    showTorchButton?: boolean;
    /**
     * Disable animations. Supported on iOS only.
     */
    disableAnimations?: boolean;
    /**
     * Disable success beep. Supported on iOS only.
     */
    disableSuccessBeep?: boolean;
    /**
     * Prompt text. Supported on Android only.
     */
    prompt?: string;
    /**
     * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
     */
    formats?: string;
    /**
     * Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation.
     */
    orientation?: string;
    /**
     * Launch with the torch switched on (if available). Supported on Android only.
     */
    torchOn?: boolean;
    /**
     * Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.
     */
    resultDisplayDuration?: number;
}

export interface BarcodeScanResult {
    format: 'QR_CODE' | 'DATA_MATRIX' | 'UPC_E' | 'UPC_A' | 'EAN_8' | 'EAN_13' | 'CODE_128' | 'CODE_39' | 'CODE_93' | 'CODABAR' | 'ITF' | 'RSS14' | 'RSS_EXPANDED' | 'PDF_417' | 'AZTEC' | 'MSI';
    cancelled: boolean;
    text: string;
}

export class BarcodeScannerMock extends BarcodeScanner {
    Encode: {
        TEXT_TYPE: string;
        EMAIL_TYPE: string;
        PHONE_TYPE: string;
        SMS_TYPE: string;
    };

    /**
    * Open the barcode scanner.
    * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
    * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
    */
    scan(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
        let theResult: BarcodeScanResult = { format: 'QR_CODE', cancelled: false, text: 'RESPONSE' };

        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    }

    /**
    * Encodes data into a barcode.
    * NOTE: not well supported on Android
    * @param {string} type Type of encoding
    * @param {any} data Data to encode
    * @returns {Promise<any>}
    */
    encode(type: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
