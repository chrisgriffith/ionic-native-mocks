import { Base64 } from '@ionic-native/base64';

export class Base64Mock extends Base64 {
    /**
     * This function encodes base64 of any file
     * @param {string} filePath Absolute file path
     * @return {Promise<string>} Returns a promise that resolves when the file is successfully encoded
     */
    encodeFile(filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
}
