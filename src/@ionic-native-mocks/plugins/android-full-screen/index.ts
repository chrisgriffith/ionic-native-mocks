import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

export class AndroidFullScreenMock extends AndroidFullScreen {
    /**
     * Is this plugin supported?
     * @return {Promise<void>}
     */
    isSupported(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    /**
     * Is immersive mode supported?
     * @return {Promise<void>}
     */
    isImmersiveModeSupported(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveWidth(): Promise<number> {
        let response: number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveHeight(): Promise<number> {
        let response: number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Hide system UI until user interacts.
     * @return {Promise<void>}
     */
    leanMode(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    /**
     * Show system UI.
     * @return {Promise<void>}
     */
    showSystemUI(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<void>}
     */
    showUnderStatusBar(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<void>}
     */
    showUnderSystemUI(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<void>}
     */
    immersiveMode(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
}
