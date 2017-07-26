import { TwitterConnect } from '@ionic-native/twitter-connect';
export interface TwitterConnectResponse {
    /**
     * Twitter Username
     */
    userName: string;
    /**
     * Twitter User ID
     */
    userId: string;
    /**
     * Twitter OAuth Secret
     */
    secret: string;
    /**
     * Twitter OAuth Token
     */
    token: string;
}

export class TwitterConnectMock extends TwitterConnect {
    /**
     * Logs in
     * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    login(): Promise<TwitterConnectResponse> {
        let response: TwitterConnectResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Logs out
     * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns user's profile information
     * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    showUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
