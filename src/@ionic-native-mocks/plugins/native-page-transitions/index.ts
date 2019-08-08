import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';

export interface NativeTransitionOptions {
    direction?: string;
    duration?: number;
    slowdownfactor?: number;
    slidePixels?: number;
    iosdelay?: number;
    androiddelay?: number;
    winphonedelay?: number;
    fixedPixelsTop?: number;
    fixedPixelsBottom?: number;
    action?: string;
    origin?: string;
    href?: string;
}

export class NativePageTransitionsMock extends NativePageTransitions {
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    slide(options: NativeTransitionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    flip(options: NativeTransitionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    fade(options: NativeTransitionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    drawer(options: NativeTransitionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    curl(options: NativeTransitionOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Execute pending transition
     * @returns {Promise<any>}
     */
    executePendingTransition(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Cancel pending transition
     * @returns {Promise<any>}
     */
    cancelPendingTransition(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
