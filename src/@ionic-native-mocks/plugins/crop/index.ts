
import { Crop } from '@ionic-native/crop/ngx';

export class CropMock extends Crop {
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    crop(pathToImage: string, options?: {
        quality: number;
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    }
}
