import { TapticEngine } from '@ionic-native/taptic-engine';

export class TapticEngineMock extends TapticEngine {
    /**
     * Use selection feedback generators to indicate a change in selection.
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    selection(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    notification(options: {
        type: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    impact(options: {
        style: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
