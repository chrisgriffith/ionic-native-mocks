import { AppPreferences } from '@ionic-native/app-preferences';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class AppPreferencesMock extends AppPreferences {
    /**
     * Get a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    fetch(dict: string, key?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Set a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @param {any} value Value
     * @return {Promise<any>} Returns a promise
     */
    store(dict: string, key: string, value?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Remove value from preferences
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    remove(dict: string, key?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Clear preferences
     *
     * @return {Promise<any>} Returns a promise
     */
    clearAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show native preferences interface
     *
     * @return {Promise<any>} Returns a promise
     */
    show(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show native preferences interface
     *
     * @param {boolean} subscribe true value to subscribe, false - unsubscribe
     * @return {Observable<any>} Returns an observable
     */
    watch(subscribe: boolean): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Return named configuration context
     * In iOS you'll get a suite configuration, on Android — named file
     * Supports: Android, iOS
     * @param {string} suiteName suite name
     * @returns {Object} Custom object, bound to that suite
     */
    suite(suiteName: string): any {};
    iosSuite(suiteName: string): any {};
    /**
     * Return cloud synchronized configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom object, bound to that suite
     */
    cloudSync(): Object {
        return new Object;
    };
    /**
     * Return default configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom Object, bound to that suite
     */
    defaults(): Object {
        return new Object;
    };
}
