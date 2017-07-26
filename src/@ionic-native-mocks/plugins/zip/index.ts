import { Zip } from '@ionic-native/zip';

export class ZipMock extends Zip {
    /**
     * Extracts files from a ZIP archive
     * @param sourceZip {string} Source ZIP file
     * @param destUrl {string} Destination folder
     * @param onProgress {Function} optional callback to be called on progress update
     * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
     */
    unzip(sourceZip: string, destUrl: string, onProgress?: Function): Promise<number> {
        let response: number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
