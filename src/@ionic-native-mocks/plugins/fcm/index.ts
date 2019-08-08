import { FCM } from '@ionic-native/fcm/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface NotificationData {
    /**
     * Determines whether the notification was pressed or not
     */
    wasTapped: boolean;
    /**
     * Notification data hash item
     */
    [name: string]: any;
}

export class FCMMock extends FCM {
    /**
     * Get's device's current registration id
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
     */
    getToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Event firing on the token refresh
     *
     * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
     */
    onTokenRefresh(): Observable<string> {
        let response: string;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be subscribed to
     *
     * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
     */
    subscribeToTopic(topic: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Unubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be unsubscribed from
     *
     * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
     */
    unsubscribeFromTopic(topic: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Watch for incoming notifications
     *
     * @returns {Observable<any>} returns an object with data from the notification
     */
    onNotification(): Observable<NotificationData> {
        let response: NotificationData;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
}
