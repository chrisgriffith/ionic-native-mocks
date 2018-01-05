import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
export interface AFAAuthOptions {
    /**
     * Required
     * Used as the alias for your key in the Android Key Store.
     */
    clientId: string;
    /**
     * Used to create credential string for encrypted token and as alias to retrieve the cipher.
     */
    username?: string;
    /**
     * Used to create credential string for encrypted token
     */
    password?: string;
    /**
     * Required for decrypt()
     * Encrypted user credentials to decrypt upon successful authentication.
     */
    token?: string;
    /**
     * Set to true to remove the "USE BACKUP" button
     */
    disableBackup?: boolean;
    /**
     * Change the language. (en_US or es)
     */
    locale?: string;
    /**
     * The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts.
     */
    maxAttempts?: number;
    /**
     * Require the user to authenticate with a fingerprint to authorize every use of the key.
     * New fingerprint enrollment will invalidate key and require backup authenticate to
     * re-enable the fingerprint authentication dialog.
     */
    userAuthRequired?: boolean;
    /**
     * Set the title of the fingerprint authentication dialog.
     */
    dialogTitle?: string;
    /**
     * Set the message of the fingerprint authentication dialog.
     */
    dialogMessage?: string;
    /**
     * Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog.
     */
    dialogHint?: string;
}
export interface AFADecryptOptions {
    /**
     * Biometric authentication
     */
    withFingerprint: boolean;
    /**
     * Authentication using backup credential activity
     */
    withBackup: boolean;
    /**
     * FingerprintAuth.CipherMode.DECRYPT
     * Decrypted password
     */
    password: string;
}
export interface AFAEncryptResponse {
    /**
     * Biometric authentication
     */
    withFingerprint: boolean;
    /**
     * Authentication using backup credential activity
     */
    withBackup: boolean;
    /**
     * base64encoded string representation of user credentials
     */
    token: string;
}

export class AndroidFingerprintAuthMock extends AndroidFingerprintAuth {
    ERRORS: {
        BAD_PADDING_EXCEPTION: 'BAD_PADDING_EXCEPTION';
        CERTIFICATE_EXCEPTION: 'CERTIFICATE_EXCEPTION';
        FINGERPRINT_CANCELLED: 'FINGERPRINT_CANCELLED';
        FINGERPRINT_DATA_NOT_DELETED: 'FINGERPRINT_DATA_NOT_DELETED';
        FINGERPRINT_ERROR: 'FINGERPRINT_ERROR';
        FINGERPRINT_NOT_AVAILABLE: 'FINGERPRINT_NOT_AVAILABLE';
        FINGERPRINT_PERMISSION_DENIED: 'FINGERPRINT_PERMISSION_DENIED';
        FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST: 'FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST';
        ILLEGAL_BLOCK_SIZE_EXCEPTION: 'ILLEGAL_BLOCK_SIZE_EXCEPTION';
        INIT_CIPHER_FAILED: 'INIT_CIPHER_FAILED';
        INVALID_ALGORITHM_PARAMETER_EXCEPTION: 'INVALID_ALGORITHM_PARAMETER_EXCEPTION';
        IO_EXCEPTION: 'IO_EXCEPTION';
        JSON_EXCEPTION: 'JSON_EXCEPTION';
        MINIMUM_SDK: 'MINIMUM_SDK';
        MISSING_ACTION_PARAMETERS: 'MISSING_ACTION_PARAMETERS';
        MISSING_PARAMETERS: 'MISSING_PARAMETERS';
        NO_SUCH_ALGORITHM_EXCEPTION: 'NO_SUCH_ALGORITHM_EXCEPTION';
        SECURITY_EXCEPTION: 'SECURITY_EXCEPTION';
    };
    /**
     * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
     * @param options {AFAAuthOptions} Options
     * @returns {Promise<any>}
     */
    encrypt(options: AFAAuthOptions): Promise<AFAEncryptResponse> {
        let reponse: AFAEncryptResponse;
        return new Promise((resolve, reject) => {
            resolve(reponse);
        });
    };
    /**
     * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
     * @param options {AFAAuthOptions} Options
     * @returns {Promise<any>}
     */
    decrypt(options: AFAAuthOptions): Promise<AFADecryptOptions> {
        let reponse: AFADecryptOptions;
        return new Promise((resolve, reject) => {
            resolve(reponse);
        });
    };
    /**
     * Check if service is available
     * @returns {Promise<any>} Returns a Promise that resolves if fingerprint auth is available on the device
     */
    isAvailable(): Promise<{
        isAvailable: boolean;
        isHardwareDetected: boolean;
        hasEnrolledFingerprints: boolean;
    }> {
        let reponse: { isAvailable: boolean, isHardwareDetected: boolean, hasEnrolledFingerprints: boolean} = {isAvailable: true, isHardwareDetected: true, hasEnrolledFingerprints: true};
        return new Promise((resolve, reject) => {
            resolve(reponse);
        });
    };
    /**
     * Delete the cipher used for encryption and decryption by username
     * @returns {Promise<any>} Returns a Promise that resolves if the cipher was successfully deleted
     */
    delete(options: {
        clientId: string;
        username: string;
    }): Promise<{
        deleted: boolean;
    }> {
        let reponse: { deleted: boolean};
        return new Promise((resolve, reject) => {
            resolve(reponse);
        });
    };
}
