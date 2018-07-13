import { ThemeableBrowser, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface ThemeableBrowserButton {
    wwwImage?: string;
    image?: string;
    wwwImagePressed?: string;
    imagePressed?: string;
    wwwImageDensity?: number;
    align?: string;
    event?: string;
}
export interface ThemeableBrowserOptions {
    statusbar?: {
        color: string;
    };
    toolbar?: {
        height?: number;
        color?: string;
        image?: string;
    };
    title?: {
        color?: string;
        staticText?: string;
        showPageTitle?: boolean;
    };
    backButton?: ThemeableBrowserButton;
    forwardButton?: ThemeableBrowserButton;
    closeButton?: ThemeableBrowserButton;
    customButtons?: ThemeableBrowserButton[];
    menu?: {
        image?: string;
        imagePressed?: string;
        title?: string;
        cancel?: string;
        align?: string;
        items?: {
            event: string;
            label: string;
        }[];
    };
    backButtonCanClose?: boolean;
    disableAnimation?: boolean;
    location?: string;
    hidden?: boolean;
    clearcache?: boolean;
    clearsessioncache?: boolean;
    zoom?: string;
    hardwareback?: string;
    mediaPlaybackRequiresUserAction?: string;
    shouldPauseOnSuspsend?: string;
    closebuttoncaption?: string;
    disallowoverscroll?: string;
    enableViewportScale?: string;
    allowInlineMediaPlayback?: string;
    keyboardDisplayRequiresUserAction?: string;
    suppressesIncrementalRendering?: string;
    presentationstyle?: string;
    transitionstyle?: string;
    toolbarposition?: string;
}
/**
 * @hidden
 */
export class ThemeableBrowserObjectMock extends ThemeableBrowserObject {
    // private _objectInstance;
    constructor(url: string, target: string, styleOptions: ThemeableBrowserOptions) {
        super(url, target, styleOptions);
    };
    /**
     * Displays an browser window that was opened hidden. Calling this has no effect
     * if the browser was already visible.
     */
    show(): void {};
    /**
     * Closes the browser window.
     */
    close(): void {};
    /**
     * Reloads the current page
     */
    reload(): void {} ;
    /**
     * Injects JavaScript code into the browser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    executeScript(script: {
        file?: string;
        code?: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Injects CSS into the browser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    insertCss(css: {
        file?: string;
        code?: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * A method that allows you to listen to events happening in the browser.
     * Available events are: `ThemeableBrowserError`, `ThemeableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
     * @param event Event name
     * @returns {Observable<any>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    on(event: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
}

export class ThemeableBrowserMock extends ThemeableBrowser {
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    create(url: string, target: string, styleOptions: ThemeableBrowserOptions): ThemeableBrowserObject {
        let response: ThemeableBrowserObject;
        return response;
    };
}
