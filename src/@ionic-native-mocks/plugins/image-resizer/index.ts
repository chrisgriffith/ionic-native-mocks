import { ImageResizer } from '@ionic-native/image-resizer/ngx';

export interface ImageResizerOptions {
    /**
     * The URI for the image on the device to get scaled
     */
    uri: string;
    /**
     * The width of the new image
     */
    width: number;
    /**
     * The height of the new image
     */
    height: number;
    /**
     * The name of the folder the image should be put
     * (Android only)
     */
    folderName?: string;
    /**
     *
     * Quality given as Number for the quality of the new image
     * (Android and iOS only)
     */
    quality?: number;
    /**
     * A custom name for the file. Default name is a timestamp
     * (Android and Windows only)
     */
    fileName?: string;
}

export class ImageResizerMock extends ImageResizer {
    /**
     * @returns {Promise<any>}
     */
    resize(options: ImageResizerOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
