import { EmailComposer } from '@ionic-native/email-composer';

export interface EmailComposerOptions {
    app?: string;
    to?: string | Array<string>;
    cc?: string | Array<string>;
    bcc?: string | Array<string>;
    attachments?: Array<any>;
    subject?: string;
    body?: string;
    isHtml?: boolean;
}

export class EmailComposerMock extends EmailComposer {
        /**
     * Verifies if sending emails is supported on the device.
     *
     * @param [app] {string} App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    isAvailable(app?: string): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    addAlias(alias: string, packageName: string): void {};
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    open(options: EmailComposerOptions, scope?: any): Promise<any>{
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}