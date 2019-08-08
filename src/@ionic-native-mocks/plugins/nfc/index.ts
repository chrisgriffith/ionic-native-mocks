import { NFC } from '@ionic-native/nfc/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export class NFCMock extends NFC {
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Writes an NdefMessage(array of ndef records) to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    write(message: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    makeReadyOnly(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Shares an NDEF Message(array of ndef records) via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    share(message: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    unshare(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Erase a NDEF tag
     */
    erase(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    handover(uris: string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    stopHandover(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Opens the device's NFC settings.
     * @returns {Promise<any>}
     */
    showSettings(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    enabled(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
    * @{ NFC } class utility methods
    * for use with
    */
    /**
     * Convert byte array to string
     * @param bytes {number[]}
     * @returns {string}
     */
    bytesToString(bytes: number[]): string {
        let response: string = '';
        return response;
    }
    /**
     * Convert string to byte array.
     * @param str {string}
     * @returns {number[]}
     */
    stringToBytes(str: string): number[] {
        let response: Array<number> = [];
        return response;
    }
    /**
     * Convert byte array to hex string
     *
     * @param bytes {number[]}
     * @returns {string}
     */
    bytesToHexString(bytes: number[]): string {
        let response: string = '';
        return response;
    }
}
/**
 * @hidden
 */
export class Ndef {
    uriRecord(uri: string): any { return; }
    textRecord(text: string): any { return; }
    mimeMediaRecord(mimeType: string, payload: string): any { return; }
    androidApplicationRecord(packageName: string): any { return; }
}
