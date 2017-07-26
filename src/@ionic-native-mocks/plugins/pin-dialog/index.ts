import { PinDialog } from '@ionic-native/pin-dialog';

export class PinDialogMock extends PinDialog {
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    prompt(message: string, title: string, buttons: string[]): Promise<{
        buttonIndex: number;
        input1: string;
    }> {
        let response: {buttonIndex: number, input1: string } =  {buttonIndex: 0, input1: ''};
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
