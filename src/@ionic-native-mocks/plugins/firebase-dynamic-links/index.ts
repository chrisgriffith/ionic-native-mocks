import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';

export interface DynamicLinksOptions {
    title: string;
    message: string;
    deepLink?: string;
    callToActionText?: string;
}

export class FirebaseDynamicLinksMocks extends FirebaseDynamicLinks {
    /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Promise<any>} Returns a promise
     */
    onDynamicLink(): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Display invitation dialog.
     * @param options {DynamicLinksOptions} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    sendInvitation(options: DynamicLinksOptions): Promise<any> {
         return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
