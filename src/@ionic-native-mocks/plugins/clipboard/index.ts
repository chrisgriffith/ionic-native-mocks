import { Clipboard } from '@ionic-native/clipboard/ngx';

export class ClipboardMock extends Clipboard {
    /**
     * Copies the given text
     * @param {string} text Text that gets copied on the system clipboard
     * @returns {Promise<any>} Returns a promise after the text has been copied
     */
    copy(text: string): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<any>} Returns a promise after the text has been pasted
     */
    paste(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
