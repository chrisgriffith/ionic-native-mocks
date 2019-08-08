import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export class BluetoothSerialMock extends BluetoothSerial {
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    connect(macAddress_or_uuid: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    connectInsecure(macAddress: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Disconnect from the connected device
     * @returns {Promise<any>}
     */
    disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    write(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Gets the number of bytes of data available
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    available(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Reads data from the buffer
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    read(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise<any>} returns a promise
     */
    readUntil(delimiter: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    subscribe(delimiter: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable<any>} returns an observable
     */
    subscribeRawData(): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Clears data in buffer
     * @returns {Promise<any>} returns a promise when completed
     */
    clear(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Lists bonded devices
     * @returns {Promise<any>} returns a promise
     */
    list(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise<any>} returns a promise
     */
    isEnabled(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Reports the connection status
     * @returns {Promise<any>} returns a promise
     */
    isConnected(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise<any>} returns a promise
     */
    readRSSI(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise<any>} returns a promise
     */
    showBluetoothSettings(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Enable Bluetooth on the device
     * @returns {Promise<any>} returns a promise
     */
    enable(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Discover unpaired devices
     * @returns {Promise<any>} returns a promise
     */
    discoverUnpaired(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable<any>} Returns an observable
     */
    setDeviceDiscoveredListener(): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    setName(newName: string): void { }
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    setDiscoverable(discoverableDuration: number): void { }
}
