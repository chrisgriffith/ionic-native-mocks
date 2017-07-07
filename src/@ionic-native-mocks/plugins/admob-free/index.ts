import { AdMobFree } from '@ionic-native/admob-free';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/fromEvent';

export interface AdMobFreeBannerConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
    /**
     * Set to true, to put banner at top
     */
    bannerAtTop?: boolean;
    /**
     * Set to true, to allow banner overlap WebView
     */
    overlap?: boolean;
    /**
     * Set to true to avoid ios7 status bar overlap
     */
    offsetTopBar?: boolean;
    /**
     * Banner  size
     */
    size?: string;
}
export interface AdMobFreeInterstitialConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}
export interface AdMobFreeRewardVideoConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}

export class AdMobFreeMock extends AdMobFree {
    /**
     * Convenience object to get event names
     * @type {Object}
     */
    events: any;
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    on(event: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Returns the AdMobFreeBanner object
     * @type {AdMobFreeBanner}
     */
    banner: AdMobFreeBanner;
    /**
     * Returns the AdMobFreeInterstitial object
     * @type {AdMobFreeInterstitial}
     */
    interstitial: AdMobFreeInterstitial;
    /**
     * Returns the AdMobFreeRewardVideo object
     * @type {AdMobFreeRewardVideo}
     */
    rewardVideo: AdMobFreeRewardVideo;
}
/**
 * @hidden
 */
export class AdMobFreeBanner {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeBannerConfig}
     */
    config(options: AdMobFreeBannerConfig): AdMobFreeBannerConfig {
        let config: AdMobFreeBannerConfig;
        return config;
    };
    /**
     * Hide the banner.
     * @return {Promise<any>}
     */
    hide(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Create banner.
     * @return {Promise<any>}
     */
    prepare(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Remove the banner.
     * @return {Promise<any>}
     */
    remove(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show the banner.
     * @return {Promise<any>}
     */
    show(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
/**
 * @hidden
 */
export class AdMobFreeInterstitial {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeInterstitialConfig}
     */
    config(options: AdMobFreeInterstitialConfig): AdMobFreeInterstitialConfig {
        let config: AdMobFreeInterstitialConfig;
        return config;
    };
    /**
     * Check if interstitial is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Prepare interstitial
     * @return {Promise<any>}
     */
    prepare(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show the interstitial
     * @return {Promise<any>}
     */
    show(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
/**
 * @hidden
 */
export class AdMobFreeRewardVideo {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeRewardVideoConfig}
     */
    config(options: AdMobFreeRewardVideoConfig): AdMobFreeRewardVideoConfig {
        let config: AdMobFreeRewardVideoConfig;
        return config;
    };
    /**
     * Check if reward video is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Prepare reward video
     * @return {Promise<any>}
     */
    prepare(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Show the reward video
     * @return {Promise<any>}
     */
    show(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
