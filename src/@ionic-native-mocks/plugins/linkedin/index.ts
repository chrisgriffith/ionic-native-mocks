import { LinkedIn } from '@ionic-native/linkedin/ngx';

export declare type LinkedInLoginScopes = 'r_basicprofile' | 'r_emailaddress' | 'rw_company_admin' | 'w_share';

export class LinkedInMock extends LinkedIn {
    /**
     * Login with the LinkedIn App
     * @param scopes {string[]} Scopes to authorize
     * @param promptToInstall {boolean} set to true to prompt the user to download the LinkedIn app if it's not installed
     * @return {Promise<any>}
     */
    login(scopes: LinkedInLoginScopes[], promptToInstall: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Clears the current session
     */
    logout(): void {}
    /**
     * Make a get request
     * @param path {string} request path
     * @return {Promise<any>}
     */
    getRequest(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Make a post request
     * @param path {string} request path
     * @param body {Object} request body
     * @return {Promise<any>}
     */
    postRequest(path: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Opens a member's profile
     * @param memberId {string} Member id
     * @return {Promise<any>}
     */
    openProfile(memberId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Checks if there is already an existing active session. This should be used to avoid unnecessary login.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether there is an active session
     */
    hasActiveSession(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Checks if there is an active session and returns the access token if it exists.
     * @return {Promise<any>} returns a promise that resolves with an object that contains an access token if there is an active session
     */
    getActiveSession(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
