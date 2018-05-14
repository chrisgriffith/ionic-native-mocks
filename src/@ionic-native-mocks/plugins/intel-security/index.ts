import { IntelSecurity, IntelSecurityData, IntelSecurityStorage } from '@ionic-native/intel-security';

export interface IntelSecurityDataOptions {
    /** Non-empty string. **/
    data: String;
    /** Tag text.  */
    tag?: String;
    /** Valid secure data instance ID. */
    extraKey?: Number;
    /** Application access control policy. */
    appAccessControl?: Number;
    /** Device locality policy. */
    deviceLocality?: Number;
    /** Sensitivity level policy. */
    sensitivityLevel?: Number;
    /** Disallow sealed blob access. */
    noStore?: Boolean;
    /** Disallow plain-text data access. */
    noRead?: Boolean;
    /** Creator unique ID. */
    creator?: Number;
    /** Array of owners unique IDs. */
    owners?: Number[];
    /** List of trusted web domains. */
    webOwners?: String[];
}

export  class IntelSecurityMock extends IntelSecurity {
    /**
     * returns an IntelSecurityStorage object
     * @type {IntelSecurityStorage}
     */
    storage: IntelSecurityStorageMock = new IntelSecurityStorageMock();
    /**
     * Returns an IntelSecurityData object
     * @type {IntelSecurityData}
     */
    data: IntelSecurityDataMock = new IntelSecurityDataMock();
}
/**
 * @hidden
 */
export class IntelSecurityDataMock extends IntelSecurityData {
    /**
    * This creates a new instance of secure data using plain-text data.
    * @param options {IntelSecurityDataOptions}
    * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
    */
    createFromData(options: IntelSecurityDataOptions): Promise<Number> {
        let response: Number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This creates a new instance of secure data (using sealed data)
     * @param options {Object}
     * @param options.sealedData {string} Sealed data in string format.
     * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
     */
    createFromSealedData(options: {
        sealedData: string;
    }): Promise<Number> {
        let response: Number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This returns the plain-text data of the secure data instance.
     * @param instanceID {Number} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
     */
    getData(instanceID: Number): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This returns the sealed chunk of a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
     */
    getSealedData(instanceID: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This returns the tag of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
     */
    getTag(instanceID: any): Promise<string> {
        let response: string = '';
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This returns the data policy of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resolves to the policy object, or rejects with an error.
     */
    getPolicy(instanceID: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This returns an array of the data owners unique IDs.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
     */
    getOwners(instanceID: any): Promise<Array<any>> {
        let response: Array<any> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This returns the data creator unique ID.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
     */
    getCreator(instanceID: any): Promise<Number> {
        let response: Number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This returns an array of the trusted web domains of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
     */
    getWebOwners(instanceID: any): Promise<Array<any>> {
        let response: Array<any> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
     * @param options {Object}
     * @param options.instanceID {any} Secure data instance ID.
     * @param options.extraKey {Number} Extra sealing secret for secure data instance.
     * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
     */
    changeExtraKey(options: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This releases a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
     */
    destroy(instanceID: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
/**
 * @hidden
 */
export class IntelSecurityStorageMock extends IntelSecurityStorage {
    /**
     * This deletes a secure storage resource (indicated by id).
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    delete(options: {
        id: string;
        storageType?: Number;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @param [options.extraKey] {Number} Valid secure data instance ID.
     * @returns {Promise<Number>} Returns a Promise that resolves with the instance ID of the created secure data instance, or rejects with an error.
     */
    read(options: {
        id: string;
        storageType?: Number;
        extraKey?: Number;
    }): Promise<Number> {
        let response: Number;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * This writes the data contained in a secure data instance into secure storage.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param options.instanceID {Number} Valid secure data instance ID
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    write(options: {
        id: String;
        instanceID: Number;
        storageType?: Number;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
