import { SMS } from '@ionic-native/sms/ngx';
/**
 * Options for sending an SMS
 */
export interface SmsOptions {
    /**
     * Set to true to replace \n by a new line. Default: false
     */
    replaceLineBreaks?: boolean;
    android?: SmsOptionsAndroid;
}
export interface SmsOptionsAndroid {
    /**
     * Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
     */
    intent?: string;
}

export class SMSMock extends SMS {
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    send(phoneNumber: string | string[], message: string, options?: SmsOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * This function lets you know if the app has permission to send SMS
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if we have permission
     */
    hasPermission(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
}
