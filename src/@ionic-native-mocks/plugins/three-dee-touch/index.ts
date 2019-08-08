import { ThreeDeeTouch } from '@ionic-native/three-dee-touch/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface ThreeDeeTouchQuickAction {
    /**
     * Type that can be used in the onHomeIconPressed callback
     */
    type?: string;
    /**
     * Title
     */
    title: string;
    /**
     * Subtitle
     */
    subtitle?: string;
    /**
     * Icon type. Case insensitive
     */
    iconType?: string;
    /**
     * Icon template
     */
    iconTemplate?: string;
}
export interface ThreeDeeTouchForceTouch {
    /**
     * Touch force
     */
    force: number;
    /**
     * Timestamp of action
     */
    timestamp: number;
    /**
     * X coordinate of action
     */
    x: number;
    /**
     * Y coordinate of action
     */
    y: number;
}

export class ThreeDeeTouchMock extends ThreeDeeTouch {
    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
     */
    isAvailable(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
     */
    watchForceTouches(): Observable<ThreeDeeTouchForceTouch> {
        let response: ThreeDeeTouchForceTouch;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * setup the 3D-touch actions, takes an array of objects with the following
     * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
     * @param {string} title Title for your action
     * @param {string} subtitle (optional) A short description for your action
     * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
     * @param {string} iconTemplate (optional) Can be used to provide your own icon
     */
    configureQuickActions(quickActions: Array<ThreeDeeTouchQuickAction>): void { }
    /**
     * When a home icon is pressed, your app launches and this JS callback is invoked.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    onHomeIconPressed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Enable Link Preview.
     * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
     */
    enableLinkPreview(): void { }
    /**
     * Disabled the link preview feature, if enabled.
     */
    disableLinkPreview(): void { }
}
