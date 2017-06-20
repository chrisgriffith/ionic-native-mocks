import { BLE } from '@ionic-native/ble';
import { Observable } from 'rxjs/Observable';

export class BLEMock extends BLE {
  /**
       * Scan and discover BLE peripherals for the specified amount of time.
       *
       * @usage
       * ```
       * BLE.scan([], 5).subscribe(device => {
       *   console.log(JSON.stringify(device));
       * });
       * ```
       * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
       * @param {number} seconds  Number of seconds to run discovery
       * @returns {Observable<any>} Returns an Observable that notifies of each peripheral that is discovered during the specified time.
       */
  scan(services: string[], seconds: number): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  };
  /**
       * Scan and discover BLE peripherals until `stopScan` is called.
       *
       * @usage
       * ```
       * BLE.startScan([]).subscribe(device => {
       *   console.log(JSON.stringify(device));
       * });
       *
       * setTimeout(() => {
       *   BLE.stopScan();
       * }, 5000);
       * ```
       * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
       * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
       */

  startScan(services: string[]): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }
  /**
       * Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).
       * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
       * @param options {any}
       * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
       */
  startScanWithOptions(services: string[], options: { reportDuplicates?: boolean; } | any): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }
  /**
       * Stop a scan started by `startScan`.
       *
       * @usage
       * ```
       * BLE.startScan([]).subscribe(device => {
       *   console.log(JSON.stringify(device));
       * });
       * setTimeout(() => {
       *   BLE.stopScan().then(() => { console.log('scan stopped'); });
       * }, 5000);
       * ```
       * @return returns a Promise.
       */
  stopScan(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
       * Connect to a peripheral.
       * @usage
       * ```
       *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
       *     console.log(peripheralData);
       *   },
       *   peripheralData => {
       *     console.log('disconnected');
       *   });
       * ```
       * @param deviceId {string}  UUID or MAC address of the peripheral
       * @return Returns an Observable that notifies of connect/disconnect.
       */ /**
  * Disconnect from a peripheral.
  * @usage
  * ```
  *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
  *     console.log('Disconnected');
  *   });
  * ```
  * @param deviceId {string}  UUID or MAC address of the peripheral
  * @return Returns a Promise
  */
  connect(deviceId: string): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }
  /**
       * Disconnect from a peripheral.
       * @usage
       * ```
       *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
       *     console.log('Disconnected');
       *   });
       * ```
       * @param deviceId {string}  UUID or MAC address of the peripheral
       * @return Returns a Promise
       */
  disconnect(deviceId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  /**
       * Read the value of a characteristic.
       *
       * @param {string} deviceId  UUID or MAC address of the peripheral
       * @param {string} serviceUUID  UUID of the BLE service
       * @param {string} characteristicUUID  UUID of the BLE characteristic
       * @return Returns a Promise
       */
  read(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  /**
      * Write the value of a characteristic.
      * @usage
      * ```
      * // send 1 byte to switch a light on
      * var data = new Uint8Array(1);
      * data[0] = 1;
      * BLE.write(device_id, 'FF10', 'FF11', data.buffer);
      *
      * // send a 3 byte value with RGB color
      * var data = new Uint8Array(3);
      * data[0] = 0xFF;  // red
      * data[0] = 0x00; // green
      * data[0] = 0xFF; // blue
      * BLE.write(device_id, 'ccc0', 'ccc1', data.buffer);
      *
      * // send a 32 bit integer
      * var data = new Uint32Array(1);
      * data[0] = counterInput.value;
      * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
      *
      * ```
      * @param {string} deviceId  UUID or MAC address of the peripheral
      * @param {string} serviceUUID  UUID of the BLE service
      * @param {string} characteristicUUID  UUID of the BLE characteristic
      * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
      * @return Returns a Promise
      */
  write(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
       * Write the value of a characteristic without waiting for confirmation from the peripheral.
       *
       * @param {string} deviceId  UUID or MAC address of the peripheral
       * @param {string} serviceUUID  UUID of the BLE service
       * @param {string} characteristicUUID  UUID of the BLE characteristic
       * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
       * @return Returns a Promise
       */
  writeWithoutResponse(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
      * Register to be notified when the value of a characteristic changes.
      *
      * @usage
      * ```
      * BLE.startNotification(device_id, 'FF10', 'FF11').subscribe(buffer => {
      *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
      * });
      * ```
      *
      * @param {string} deviceId  UUID or MAC address of the peripheral
      * @param {string} serviceUUID  UUID of the BLE service
      * @param {string} characteristicUUID  UUID of the BLE characteristic
      * @return Returns an Observable that notifies of characteristic changes.
      */
  startNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }
  /**
      * Stop being notified when the value of a characteristic changes.
      *
      * @param {string} deviceId  UUID or MAC address of the peripheral
      * @param {string} serviceUUID  UUID of the BLE service
      * @param {string} characteristicUUID  UUID of the BLE characteristic
      * @returns {Promise<any>}
      */
  stopNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
      * Report the connection status.
      *
      * @usage
      * ```
      * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
      *   () => { console.log('connected'); },
      *   () => { console.log('not connected'); }
      * );
      * ```
      * @param {string} deviceId  UUID or MAC address of the peripheral
      * @returns {Promise<any>}
      */
  isConnected(deviceId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
       * Report if bluetooth is enabled.
       *
       * @returns {Promise<void>} Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
       */
  isEnabled(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
      * Open System Bluetooth settings (Android only).
      *
      * @returns {Promise<any>}
      */
  showBluetoothSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
     * Enable Bluetooth on the device (Android only).
     *
     * @returns {Promise<any>}
     */
  enable(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  static readRSSI(deviceId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}