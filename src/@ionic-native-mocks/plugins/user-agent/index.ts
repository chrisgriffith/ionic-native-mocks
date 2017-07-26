import { UserAgent } from '@ionic-native/user-agent';

export class UserAgentMock extends UserAgent {
    /**
     * Changes the current user-agent to the one sent by argument.
     * @param userAgent {string} User-Agent
     * @return {Promise<any>} Returns a promise that resolves when the user-agent changes
     */
    set(userAgent: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns the current user-agent string.
     * @return {Promise<any>} Returns a promise that resolves when the user-agent is returned
     */
    get(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Sets the user-agent back to default
     * @return {Promise<any>} Returns a promise that resolves when the user-agent resets
     */
    reset(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
