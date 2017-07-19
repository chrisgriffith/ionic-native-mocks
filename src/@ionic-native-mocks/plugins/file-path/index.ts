import { FilePath } from '@ionic-native/file-path';

export class FilePathMock extends FilePath {
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @returns {Promise<string>}
     */
    resolveNativePath(path: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
}
