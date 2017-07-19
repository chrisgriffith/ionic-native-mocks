import { GooglePlus } from '@ionic-native/google-plus';

export class GooglePlusMock extends GooglePlus {
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    login(options?: any): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    trySilentLogin(options?: any): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    logout(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    disconnect(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
