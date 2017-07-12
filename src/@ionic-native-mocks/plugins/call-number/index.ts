
import { CallNumber } from '@ionic-native/call-number';

export class CallNumberMock extends CallNumber {
    /**
     * Calls a phone number
     * @param numberToCall {string} The phone number to call as a string
     * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    callNumber(numberToCall: string, bypassAppChooser: boolean): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
