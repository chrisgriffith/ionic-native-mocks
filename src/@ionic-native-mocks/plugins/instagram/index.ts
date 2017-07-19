import { Instagram } from '@ionic-native/instagram';

export class InstagramMock extends Instagram {
    /**
     * Detect if the Instagram application is installed on the device.
     *
     * @returns {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
     */
    isInstalled(): Promise<boolean | string> {
        let response: boolean = true;
         return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Share an image on Instagram
     * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
     *
     * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
     * @param caption The caption of the image
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    share(canvasIdOrDataUrl: string, caption?: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Share a library asset or video
     * @param assetLocalIdentifier A local fileURI
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    shareAsset(assetLocalIdentifier: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
