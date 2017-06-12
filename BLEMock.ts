import { BLE } from '@ionic-native/ble';
import { Observable } from 'rxjs/Observable';

export class BLEMock extends BLE {

  scan(services: string[], seconds: number): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  };


  startScan(services: string[]): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }

  startScanWithOptions(services: string[], options: { reportDuplicates?: boolean; } | any): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }

  stopScan(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  connect(deviceId: string): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }

  disconnect(deviceId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  read(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  write(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  writeWithoutResponse(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  startNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Observable<any> {
    return Observable.create(observer => {
      observer.next('');
      observer.complete();
    });
  }

  stopNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  isConnected(deviceId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
 
  isEnabled(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  showBluetoothSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  
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