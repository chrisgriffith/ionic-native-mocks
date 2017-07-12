
import { Broadcaster } from '@ionic-native/broadcaster';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class BroadcasteMock extends Broadcaster {
    /**
     * This function listen to an event sent from the native code
     * @param eventName {string}
     * @return {Observable<any>} Returns an observable to watch when an event is received
     */
    addEventListener(eventName: string): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * This function sends data to the native code
     * @param eventName {string}
     * @param eventData {any}
     * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    fireNativeEvent(eventName: string, eventData: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
