import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface SafariViewControllerOptions {
    animated?: boolean;
    barColor?: string;
    controlTintColor?: string;
    enterReaderModeIfAvailable?: boolean;
    hidden?: boolean;
    showDefaultShareMenuItem?: boolean;
    tintColor?: string;
    toolbarColor?: string;
    transition?: string;
    url?: string;
}

export class SafariViewControllerMock extends SafariViewController {
    /**
     * Checks if SafariViewController is available
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Shows Safari View Controller
     * @param options {SafariViewControllerOptions} optional
     * @returns {Observable<any>}
     */
    show(options?: SafariViewControllerOptions): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Hides Safari View Controller
     */
    hide(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     * @returns {Promise<any>}
     */
    connectToService(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Call this method whenever there's a chance the user will open an external url.
     * @returns {Promise<any>}
     */
    warmUp(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url{string}
     * @returns {Promise<any>}
     */
    mayLaunchUrl(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
