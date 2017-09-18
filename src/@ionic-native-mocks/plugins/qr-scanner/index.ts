import { QRScanner } from '@ionic-native/qr-scanner';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface QRScannerStatus {
    /**
     * On iOS and Android 6.0+, camera access is granted at runtime by the user (by clicking "Allow" at the dialog).
     * The authorized property is a boolean value which is true only when the user has allowed camera access to your app (AVAuthorizationStatus.Authorized).
     * On platforms with permissions granted at install (Android pre-6.0, Windows Phone) this property is always true.
     */
    authorized: boolean;
    /**
     * A boolean value which is true if the user permanently denied camera access to the app (AVAuthorizationStatus.Denied).
     * Once denied, camera access can only be gained by requesting the user change their decision (consider offering a link to the setting via openSettings()).
     */
    denied: boolean;
    /**
     * A boolean value which is true if the user is unable to grant permissions due to parental controls, organization security configuration profiles, or similar reasons.
     */
    restricted: boolean;
    /**
     * A boolean value which is true if QRScanner is prepared to capture video and render it to the view.
     */
    prepared: boolean;
    /**
     * A boolean value which is true when the preview layer is visible (and on all platforms but browser, the native webview background is transparent).
     */
    showing: boolean;
    /**
     * A boolean value which is true if QRScanner is actively scanning for a QR code.
     */
    scanning: boolean;
    /**
     * A boolean value which is true if QRScanner is displaying a live preview from the device's camera. Set to false when the preview is paused.
     */
    previewing: boolean;
    /**
     * A boolean value which is true if the light is enabled.
     */
    lightEnabled: boolean;
    /**
     * A boolean value which is true only if the users' operating system is able to QRScanner.openSettings().
     */
    canOpenSettings: boolean;
    /**
     * A boolean value which is true only if the users' device can enable a light in the direction of the currentCamera.
     */
    canEnableLight: boolean;
    /**
     * A boolean value which is true only if the current device "should" have a front camera.
     * The camera may still not be capturable, which would emit error code 3, 4, or 5 when the switch is attempted.
     * (On the browser platform, this value is false until the prepare method is called.)
     */
    canChangeCamera: boolean;
    /**
     * A number representing the index of the currentCamera. 0 is the back camera, 1 is the front.
     */
    currentCamera: number;
}

export class QRScannerMock extends QRScanner {
    /**
     * Request permission to use QR scanner.
     * @return {Promise<QRScannerStatus>}
     */
    prepare(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
     * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
     */
    scan(): Observable<string> {
        let response: string;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
     * @returns {Promise<QRScannerStatus>}
     */
    show(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Configures the native webview to be opaque with a white background, covering the video preview.
     * @returns {Promise<QRScannerStatus>}
     */
    hide(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Enable the device's light (for scanning in low-light environments).
     * @returns {Promise<QRScannerStatus>}
     */
    enableLight(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Disable the device's light.
     * @return {Promise<QRScannerStatus>}
     */
    disableLight(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Use front camera
     * @return {Promise<QRScannerStatus>}
     */
    useFrontCamera(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Use back camera
     * @return {Promise<QRScannerStatus>}
     */
    useBackCamera(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Set camera to be used.
     * @param camera {number} Provide `0` for back camera, and `1` for front camera.
     * @return {Promise<QRScannerStatus>}
     */
    useCamera(camera: number): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Pauses the video preview on the current frame and pauses scanning.
     * @return {Promise<QRScannerStatus>}
     */
    pausePreview(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Resumse the video preview and resumes scanning.
     * @return {Promise<QRScannerStatus>}
     */
    resumePreview(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Returns permission status
     * @return {Promise<QRScannerStatus>}
     */
    getStatus(): Promise<QRScannerStatus> {
        let response: QRScannerStatus;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Opens settings to edit app permissions.
     */
    openSettings(): void {};
}
