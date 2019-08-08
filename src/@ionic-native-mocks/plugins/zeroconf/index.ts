import { Zeroconf } from '@ionic-native/zeroconf/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface ZeroconfService {
    domain: string;
    type: string;
    name: string;
    port: number;
    hostname: string;
    ipv4Addresses: Array<string>;
    ipv6Addresses: Array<string>;
    txtRecord: any;
}
export interface ZeroconfResult {
    action: 'registered' | 'added' | 'removed';
    service: ZeroconfService;
}

export class ZeroconfMock extends Zeroconf {
    /**
     * Returns this device's hostname.
     * @return {Promise<string>}
     */
    getHostname(): Promise<string> {
        let response: string = '';
         return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Publishes a new service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult> {
        let response: ZeroconfResult;
         return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Unregisters a service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @return {Promise<void>}
     */
    unregister(type: string, domain: string, name: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Unregisters all published services.
     * @return {Promise<void>}
     */
    stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Starts watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    watch(type: string, domain: string): Observable<ZeroconfResult> {
        let response: ZeroconfResult;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Stops watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Promise<void>}
     */
    unwatch(type: string, domain: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Closes the service browser and stops watching.
     * @return {Promise<void>}
     */
    close(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
