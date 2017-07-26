import { Serial } from '@ionic-native/serial';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface SerialPermissionOptions {
    vid: string;
    pid: string;
    driver: string;
}
export interface SerialOpenOptions {
    baudRate: number;
}

export class SerialMock extends Serial {
    /**
     * Request permission to connect to a serial device
     *
     * @param options {SerialPermissionOptions} Options used to request serial permissions for an unknown device
     * @return {Promise<any>} Returns a promise that resolves when permissions are granted
     */
    requestPermission(options?: SerialPermissionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Open connection to a serial device
     *
     * @param options {SerialOpenOptions} Options used to open serial connection
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is opened
     */
    open(options: SerialOpenOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Write to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    write(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Write hex to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    writeHex(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Read from a serial connection
     *
     * @return {Promise<any>} Returns a promise that resolves with data read from the serial connection
     */
    read(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
     *
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    registerReadCallback(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Close the serial connection
     *
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is closed
     */
    close(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
