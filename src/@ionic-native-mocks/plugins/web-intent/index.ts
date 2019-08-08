import { Intent, WebIntent } from '@ionic-native/web-intent/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export class WebIntentMock extends WebIntent {
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_SEND: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_VIEW: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_TEXT: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_SUBJECT: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_STREAM: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_EMAIL: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_CALL: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_SENDTO: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_GET_CONTENT: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_PICK: string;
    /**
     * Launches an Android intent
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    startActivity(options: {
        action: any;
        url: string;
        type?: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Starts a new activity and return the result to the application
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    startActivityForResult(options: {
        action: any;
        url: string;
        type?: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Checks if this app was invoked with specified extra
     * @param extra {string}
     * @returns {Promise<any>}
     */
    hasExtra(extra: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Gets the extra that this app was invoked with
     * @param extra {string}
     * @returns {Promise<any>}
     */
    getExtra(extra: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Gets the Uri the app was invoked with
     * @returns {Promise<any>}
     */
    getUri(): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * @returns {Observable<string>}
     */
    onNewIntent(): Observable<string> {
        let response: string = '';
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Sends a custom intent passing optional extras
     * @param options {Object} { action: string, extras?: { option: boolean } }
     * @returns {Promise<any>}
     */
    sendBroadcast(options: {
        action: string;
        extras?: {
            option: boolean;
        };
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Registers a broadcast receiver for the specified filters
     * @param filters {any}
     */
    registerBroadcastReceiver(filters: any): Observable<any> {
        let response: string = '';
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Unregisters a broadcast receiver
     */
    unregisterBroadcastReceiver(): void { }
    /**
    * Returns the content of the intent used whenever the application activity is launched
    */
    onIntent(): Observable<Intent> {
        let response: string = '';
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
    *
    */
    onActivityResult(): void { }
    /**
     * @returns {Promise<any>}
     */
    getIntent(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
