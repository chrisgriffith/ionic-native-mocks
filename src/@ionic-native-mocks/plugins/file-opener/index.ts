import { FileOpener } from '@ionic-native/file-opener';

export class FileOpenerMock extends FileOpener {
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     * @returns {Promise<any>}
     */
    open(filePath: string, fileMIMEType: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     * @returns {Promise<any>}
     */
    uninstall(packageId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     * @returns {Promise<any>}
     */
    appIsInstalled(packageId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
