import { PinCheck } from '@ionic-native/pin-check/ngx';

export class PinCheckMock extends PinCheck {
    /**
     *  check whether pin/keyguard or passcode is setup
     * @returns {Promise<boolean>}
     */
    isPinSetup(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}
