import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

export class Base64ToGalleryMock extends Base64ToGallery {
    /**
     * Converts a base64 string to an image file in the device gallery
     * @param {string} data The actual base64 string that you want to save
     * @param {any} [options] An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.
     * @returns {Promise<any>} returns a promise that resolves when the image is saved.
     */
    base64ToGallery(data: string, options?: { prefix?: string; mediaScanner?: boolean; }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
