import { HTTP } from '@ionic-native/http';

export interface HTTPResponse {
    /**
     * The status number of the response
     */
    status: number;
    /**
     * The headers of the response
     */
    headers: any;
    /**
     * The URL of the response. This property will be the final URL obtained after any redirects.
     */
    url: string;
    /**
     * The data that is in the response. This property usually exists when a promise returned by a request method resolves.
     */
    data?: any;
    /**
     * Error response from the server. This property usually exists when a promise returned by a request method rejects.
     */
    error?: string;
}

export class HTTPMock extends HTTP {
    /**
     * This returns an object representing a basic HTTP Authorization header of the form.
     * @param username {string} Username
     * @param password {string} Password
     * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64encodedusernameandpassword'}
     */
    getBasicAuthHeader(username: string, password: string): {
        Authorization: string;
    } {
        return { Authorization: '' };
    };
    /**
     * This sets up all future requests to use Basic HTTP authentication with the given username and password.
     * @param username {string} Username
     * @param password {string} Password
     */
    useBasicAuth(username: string, password: string): void {};
    /**
     * Set a header for all future requests. Takes a header and a value.
     * @param header {string} The name of the header
     * @param value {string} The value of the header
     */
    setHeader(header: string, value: string): void {};
    /**
     * Enable or disable SSL Pinning. This defaults to false.
     *
     * To use SSL pinning you must include at least one .cer SSL certificate in your app project. You can pin to your server certificate or to one of the issuing CA certificates. For ios include your certificate in the root level of your bundle (just add the .cer file to your project/target at the root level). For android include your certificate in your project's platforms/android/assets folder. In both cases all .cer files found will be loaded automatically. If you only have a .pem certificate see this stackoverflow answer. You want to convert it to a DER encoded certificate with a .cer extension.
     *
     * As an alternative, you can store your .cer files in the www/certificates folder.
     * @param enable {boolean} Set to true to enable
     * @returns {Promise<any>} returns a promise that will resolve on success, and reject on failure
     */
    enableSSLPinning(enable: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.
     * @param accept {boolean} Set to true to accept
     * @returns {Promise<any>} returns a promise that will resolve on success, and reject on failure
     */
    acceptAllCerts(accept: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Whether or not to validate the domain name in the certificate. This defaults to true.
     * @param validate {boolean} Set to true to validate
     * @returns {Promise<any>} returns a promise that will resolve on success, and reject on failure
     */
    validateDomainName(validate: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Make a POST request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    post(url: string, body: any, headers: any): Promise<HTTPResponse> {
        let response: HTTPResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    get(url: string, parameters: any, headers: any): Promise<HTTPResponse> {
        let response: HTTPResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    uploadFile(url: string, body: any, headers: any, filePath: string, name: string): Promise<HTTPResponse> {
        let response: HTTPResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The path to donwload the file to, including the file name.
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    downloadFile(url: string, body: any, headers: any, filePath: string): Promise<HTTPResponse> {
        let response: HTTPResponse;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
