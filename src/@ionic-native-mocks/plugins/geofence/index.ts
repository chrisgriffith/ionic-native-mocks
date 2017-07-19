import { Geofence } from '@ionic-native/geofence';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class GeofenceMock extends Geofence {
    TransitionType: {
        ENTER: number;
        EXIT: number;
        BOTH: number;
    };
    /**
     * Subscribe to get notified when a transition is received
     * @return {Observable<any>}
     */
    onTrasitionReceived(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @returns {Promise<any>}
     */
    initialize(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @returns {Promise<any>}
     */
    addOrUpdate(geofences: Object | Array<Object>): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @returns {Promise<any>}
     */
    remove(geofenceId: string | Array<string>): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Removes all geofences.
     *
     * @returns {Promise<any>}
     */
    removeAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @returns {Promise<Array<string>>}
     */
    getWatched(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @returns {Observable<any>}
     */
    onTransitionReceived(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    onNotificationClicked(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
}
