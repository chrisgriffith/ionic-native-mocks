import { DBMeter } from '@ionic-native/db-meter';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class DBMeterMock extends DBMeter {
    start(): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Stops listening
     * @hidden
     */
    stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    isListening(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    delete(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
