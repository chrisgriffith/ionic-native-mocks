import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
export interface FingerprintOptions {
    /**
     * Key for platform keychain
     */
    clientId: string;
    /**
     * Secret password. Only for android
     */
    clientSecret?: string;
    /**
     * Disable 'use backup' option. Only for android (optional)
     */
    disableBackup?: boolean;
}

export class FingerprintAIOMock extends FingerprintAIO {
    /**
     * Check if fingerprint authentication is available
     * @return {Promise<any>} Returns a promise with result
     */
    isAvailable(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Show authentication dialogue
     * @param options {FingerprintOptions} options for platform specific fingerprint API
     * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
     */
    show(options: FingerprintOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
