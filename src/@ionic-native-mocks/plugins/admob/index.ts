import { AdMob } from '@ionic-native/admob';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export declare type AdSize = 'SMART_BANNER' | 'BANNER' | 'MEDIUM_RECTANGLE' | 'FULL_BANNER' | 'LEADERBOARD' | 'SKYSCRAPER' | 'CUSTOM';
export interface AdMobOptions {
    /**
     * Banner ad ID
     */
    adId?: string;
    /**
     * Banner Ad Size, defaults to `SMART_BANNER`. IT can be: `SMART_BANNER`, `BANNER`, `MEDIUM_RECTANGLE`, `FULL_BANNER`, `LEADERBOARD`, `SKYSCRAPER`, or `CUSTOM`
     */
    adSize?: AdSize;
    /**
     * Banner width, valid when `adSize` is set to `CUSTOM`
     */
    width?: number;
    /**
     * Banner height, valid when `adSize` is set to `CUSTOM`
     */
    height?: number;
    /**
     * Allow banner to overlap webview, or else it will push webview up or down to avoid overlap. Defaults to false.
     */
    overlap?: boolean;
    /**
     * Position of banner ad. Defaults to `TOP_CENTER`. You can use the `AdMob.AD_POSITION` property to select other values.
     */
    position?: number;
    /**
     * X in pixels. Valid when `position` is set to `POS_XY`
     */
    x?: number;
    /**
     * Y in pixels. Valid when `position` is set to `POS_XY`
     */
    y?: number;
    /**
     * Set to true to receive test ad for testing purposes
     */
    isTesting?: boolean;
    /**
     * Auto show interstitial ad when loaded. Set to false if hope to control the show timing with prepareInterstitial/showInterstitial
     */
    autoShow?: boolean;
    /**
     * Re-create the banner on web view orientation change (not screen orientation), or else just move the banner. Default:true.
     */
    orientationRenew?: boolean;
    /**
     * Set extra color style for Ad
     */
    adExtras?: AdExtras;
    /**
     * License key for the plugin
     */
    license?: any;
}
export interface AdExtras {
    color_bg: string;
    color_bg_top: string;
    color_border: string;
    color_link: string;
    color_text: string;
    color_url: string;
}

export class AdMobMock extends AdMob {
    AD_POSITION: {
        NO_CHANGE: number;
        TOP_LEFT: number;
        TOP_CENTER: number;
        TOP_RIGHT: number;
        LEFT: number;
        CENTER: number;
        RIGHT: number;
        BOTTOM_LEFT: number;
        BOTTOM_CENTER: number;
        BOTTOM_RIGHT: number;
        POS_XY: number;
    };
    /**
     * Create a banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
     */
    createBanner(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Destroy the banner, remove it from screen.
     */
    removeBanner(): void { };
    /**
     * Show banner at position
     * @param position {number} Position. Use `AdMob.AD_POSITION` to set values.
     */
    showBanner(position: number): void { };
    /**
     * Show banner at custom position
     * @param x {number} Offset from screen left.
     * @param y {number} Offset from screen top.
     */
    showBannerAtXY(x: number, y: number): void { };
    /**
     * Hide the banner, remove it from screen, but can show it later
     */
    hideBanner(): void { };
    /**
     * Prepare interstitial banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
     */
    prepareInterstitial(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show interstitial ad when it's ready
     */
    showInterstitial(): void { };
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
     */
    prepareRewardVideoAd(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show a reward video ad
     */
    showRewardVideoAd(): void { };
    /**
     * Sets the values for configuration and targeting
     * @param options {AdMobOptions} Options
     * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
     */
    setOptions(options: AdMobOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    getAdSettings(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Triggered when failed to receive Ad
     * @returns {Observable<any>}
     */
    onAdFailLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Triggered when Ad received
     * @returns {Observable<any>}
     */
    onAdLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Triggered when Ad will be showed on screen
     * @returns {Observable<any>}
     */
    onAdPresent(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Triggered when user click the Ad, and will jump out of your App
     * @returns {Observable<any>}
     */
    onAdLeaveApp(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Triggered when dismiss the Ad and back to your App
     * @returns {Observable<any>}
     */
    onAdDismiss(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
}
