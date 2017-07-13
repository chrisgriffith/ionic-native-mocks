import { Appodeal } from '@ionic-native/appodeal';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class AppodealMock extends Appodeal {
    readonly AD_TYPES: {
        INTERSTITIAL: number;
        SKIPPABLE_VIDEO: number;
        BANNER: number;
        BANNER_BOTTOM: number;
        BANNER_TOP: number;
        REWARDED_VIDEO: number;
        NON_SKIPPABLE_VIDEO: number;
    };
    /**
     * initialize Appodeal SDK
     * @param {string} appKey
     * @param {number} adType
     */
    initialize(appKey: string, adType: number): void { };
    /**
     * check if SDK has been initialized
     * @returns {Promise<boolean>}
     */
    isInitialized(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * show ad of specified type
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    show(adType: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * show ad of specified type with placement options
     * @param {number} adType
     * @param {any} placement
     * @returns {Promise<boolean>}
     */
    showWithPlacement(adType: number, placement: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * hide ad of specified type
     * @param {number} adType
     */
    hide(adType: number): void { };
    /**
     * confirm use of ads of specified type
     * @param {number} adType
     */
    confirm(adType: number): void { };
    /**
     * check if ad of specified type has been loaded
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    isLoaded(adType: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * check if ad of specified
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    isPrecache(adType: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param {number} adType
     * @param autoCache
     */
    setAutoCache(adType: number, autoCache: any): void { };
    /**
     * forcefully cache an ad by type
     * @param {number} adType
     */
    cache(adType: number): void { };
    /**
     *
     * @param {boolean} set
     */
    setOnLoadedTriggerBoth(set: boolean): void { };
    /**
     * enable or disable Smart Banners
     * @param {boolean} enabled
     */
    setSmartBanners(enabled: boolean): void { };
    /**
     * enable or disable banner backgrounds
     * @param {boolean} enabled
     */
    setBannerBackground(enabled: boolean): void { };
    /**
     * enable or disable banner animations
     * @param {boolean} enabled
     */
    setBannerAnimation(enabled: boolean): void { };
    /**
     *
     * @param value
     */
    set728x90Banners(value: any): void { };
    /**
     * enable or disable logging
     * @param {boolean} logging
     */
    setLogging(logging: boolean): void { };
    /**
     * enable or disable testing mode
     * @param {boolean} testing
     */
    setTesting(testing: boolean): void { };
    /**
     * reset device ID
     */
    resetUUID(): void { };
    /**
     * get version of Appdeal SDK
     */
    getVersion(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    disableNetwork(network?: string, adType?: number): void { };
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    disableNetworkType(network?: string, adType?: number): void { };
    /**
     * disable Location permissions for Appodeal SDK
     */
    disableLocationPermissionCheck(): void { };
    /**
     * disable Storage permissions for Appodeal SDK
     */
    disableWriteExternalStoragePermissionCheck(): void { };
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableInterstitialCallbacks(enabled: boolean): void { };
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableSkippableVideoCallbacks(enabled: boolean): void { };
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableNonSkippableVideoCallbacks(enabled: boolean): void { };
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableBannerCallbacks(enabled: boolean): void { };
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableRewardedVideoCallbacks(enabled: boolean): void { };
    /**
     *
     * @param {string} name - name of rule
     * @param {boolean} value
     */
    setCustomBooleanRule(name: string, value: boolean): void { };
    /**
     *
     * @param {string} name - name of rule
     * @param {number} value
     */
    setCustomIntegerRule(name: string, value: number): void { };
    /**
     * set rule with float value
     * @param {string} name
     * @param {number} value
     */
    setCustomDoubleRule(name: string, value: number): void { };
    /**
     * set rule with string value
     * @param {string} name - name of rule
     * @param {string} value
     */
    setCustomStringRule(name: string, value: string): void { };
    /**
     * set ID preference in Appodeal for current user
     * @param id
     */
    setUserId(id: any): void { };
    /**
     * set Email preference in Appodeal for current user
     * @param email
     */
    setEmail(email: any): void { };
    /**
     * set Birthday preference in Appodeal for current user
     * @param birthday
     */
    setBirthday(birthday: any): void { };
    /**
     * et Age preference in Appodeal for current user
     * @param age
     */
    setAge(age: any): void { };
    /**
     * set Gender preference in Appodeal for current user
     * @param gender
     */
    setGender(gender: any): void { };
    /**
     * set Occupation preference in Appodeal for current user
     * @param occupation
     */
    setOccupation(occupation: any): void { };
    /**
     * set Relation preference in Appodeal for current user
     * @param relation
     */
    setRelation(relation: any): void { };
    /**
     * set Smoking preference in Appodeal for current user
     * @param smoking
     */
    setSmoking(smoking: any): void { };
    /**
     * set Alcohol preference in Appodeal for current user
     * @param alcohol
     */
    setAlcohol(alcohol: any): void { };
    /**
     * set Interests preference in Appodeal for current user
     * @param interests
     */
    setInterests(interests: any): void { };
    onInterstitialLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onInterstitialFailedToLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onInterstitialShown(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onInterstitialClicked(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onInterstitialClosed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onSkippableVideoLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onSkippableVideoFailedToLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onSkippableVideoShown(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onSkippableVideoFinished(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onSkippableVideoClosed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onRewardedVideoLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onRewardedVideoFailedToLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onRewardedVideoShown(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onRewardedVideoFinished(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onRewardedVideoClosed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onNonSkippableVideoLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onNonSkippableVideoFailedToLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onNonSkippableVideoShown(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onNonSkippableVideoFinished(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onNonSkippableVideoClosed(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onBannerClicked(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onBannerFailedToLoad(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onBannerLoaded(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
    onBannerShown(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
}
