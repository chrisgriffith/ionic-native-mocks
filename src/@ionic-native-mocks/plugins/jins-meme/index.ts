import { JinsMeme } from '@ionic-native/jins-meme';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class JinsMemeMock extends JinsMeme {
    /**
     * Authentication and authorization of App and SDK.
     * Must call this method first.
     * Sign up for an app ID (and get an app/client secret) at developers.jins.com
     *
     *@param {string} setAppClientID
     *@param {string} clientSecret
     *@returns {Promise<any>}
     */
    setAppClientID(appClientId: string, clientSecret: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Starts scanning for JINS MEME.
     * @returns {Observable<any>}
     */
    startScan(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Stops scanning JINS MEME.
     * @returns {Promise<any>}
     */
    stopScan(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Establishes connection to JINS MEME.
     * @param {string} target
     * @returns {Observable<any>}
     */
    connect(target: string): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Set auto connection mode.
     *@param {Boolean} flag
     *@returns {Promise<any>}
     */
    setAutoConnect(flag: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns whether a connection to JINS MEME has been established.
     *@returns {Promise<any>}
     */
    isConnected(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Disconnects from JINS MEME.
     *@returns {Promise<any>}
     */
    disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Starts receiving realtime data.
     * @returns {Observable<any>}
     */
    startDataReport(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
    * Stops receiving data.
    *@returns {Promise<any>}
    */
    stopDataReport(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns SDK version.
     *
     *@returns {Promise<any>}
     */
    getSDKVersion(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns JINS MEME connected with other apps.
     *@returns {Promise<any>}
     */
    getConnectedByOthers(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns calibration status
     *@returns {Promise<any>}
     */
    isCalibrated(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns device type.
     *@returns {Promise<any>}
     */
    getConnectedDeviceType(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns hardware version.
     *@returns {Promise<any>}
     */
    getConnectedDeviceSubType(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns FW Version.
     *@returns {Promise<any>}
     */
    getFWVersion(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns HW Version.
     *@returns {Promise<any>}
     */
    getHWVersion(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns response about whether data was received or not.
     *@returns {Promise<any>}
     */
    isDataReceiving(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
