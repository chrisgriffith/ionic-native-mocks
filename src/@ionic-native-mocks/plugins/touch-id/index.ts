import { TouchID } from '@ionic-native/touch-id';

export class TouchIDMock extends TouchID {
    /**
     * Checks Whether TouchID is available or not.
     *
     * @returns {Promise<any>} Returns a Promise that resolves if yes, rejects if no.
     */
    isAvailable(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.
     *
     * @param {string} message  The message to display
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    verifyFingerprint(message: string): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    verifyFingerprintWithCustomPasswordFallback(message: string): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @param {string} enterPasswordLabel  Custom text for the 'Enter Password' button
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message: string, enterPasswordLabel: string): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Checks if the fingerprint database changed.
     *
     * @returns {Promise<any>} Returns a Promise that resolves if yes, rejects if no.
     */
    didFingerprintDatabaseChange(): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}