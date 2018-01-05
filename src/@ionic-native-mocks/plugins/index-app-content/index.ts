import { IndexAppContent } from '@ionic-native/index-app-content';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface IndexItem {
    domain: string;
    identifier: string;
    title: string;
    description: string;
    /**
     * Url to image
     */
    url: string;
    /**
     * Item keywords
     */
    keywords?: Array<string>;
    /**
     * Lifetime in minutes
     */
    lifetime?: number;
}

export class IndexAppContentMock extends IndexAppContent {
    /**
     * The option to index app content might not be available at all due to device limitations or user settings.
     * Therefore it's highly recommended to check upfront if indexing is possible.
     * @return {Promise<boolean>} Returns a promise that resolves with true if indexing is available, false if not
     */
    isIndexingAvailable(): Promise<boolean> {
        let response: boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Add or change items to spotlight index
     * @param {Array<IndexItem>} Array of items to index
     * @return {Promise<any>} Returns if index set was successfull
     */
    setItems(items: Array<IndexItem>): Promise<any> {
        let response: any;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * If user taps on a search result in spotlight then the app will be launched.
     * You can register a Javascript handler to get informed when this happens.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    onItemPressed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Clear all items stored for a given array of domains
     * @param {Array<string>} Array of domains to clear
     * @return {Promise<any>} Resolve if successfull
     */
    clearItemsForDomains(domains: Array<string>): Promise<any> {
        let response: any;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Clear all items stored for a given array of identifiers
     * @param {Array<string>} Array of identifiers to clear
     * @return {Promise<any>} Resolve if successfull
     */
    clearItemsForIdentifiers(identifiers: Array<string>): Promise<any> {
        let response: any;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * You might want to avoid to update spotlight index too frequently.
     * Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
     * @param {number} Numeric value => 0
     */
    setIndexingInterval(intervalMinutes: number): void {};
}
