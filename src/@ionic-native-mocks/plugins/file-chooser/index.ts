import { FileChooser } from '@ionic-native/file-chooser';

export class FileChooserMock extends FileChooser {
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    open(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
}
