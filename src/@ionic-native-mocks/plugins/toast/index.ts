import { Toast } from '@ionic-native/toast/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface ToastOptions {
    /**
     * Message to display
     */
    message?: string;
    /**
     * Duration in ms to show
     */
    duration?: number;
    /**
     * Position
     */
    position?: string;
    /**
     * Add negative value to move it up a bit
     */
    addPixelsY?: number;
    /**
     * Pass JSON object to be sent back in success callback
     */
    data?: any;
    /**
     * Styling
     */
    styling?: {
        opacity?: number;
        backgroundColor?: string;
        textColor?: string;
        cornerRadius?: number;
        horizontalPadding?: number;
        verticalPadding?: number;
    };
}


export class ToastMock extends Toast {
    /**
         * Show a native toast for the given duration at the specified position.
         *
         * @param {string} message  The message to display.
         * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
         * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
         * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
         */
    show(message: string, duration: string, position: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Manually hide any currently visible toast.
     * @returns {Promise<any>} Returns a Promise that resolves on success.
     */
    hide(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showWithOptions(options: ToastOptions): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showShortTop(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showShortCenter(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showShortBottom(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showLongTop(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showLongCenter(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    showLongBottom(message: string): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
}
