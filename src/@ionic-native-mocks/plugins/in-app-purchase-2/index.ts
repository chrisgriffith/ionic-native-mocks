import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

export interface IAPProductOptions {
    id: string;
    alias: string;
    type: string;
}
export declare type IAPProducts = Array<IAPProduct> & {
    /**
     * Get product by ID
     */
    byId: {
        [id: string]: IAPProduct;
    };
    /**
     * Get product by alias
     */
    byAlias: {
        [alias: string]: IAPProduct;
    };
    /**
     * Remove all products (for testing only).
     */
    reset: () => {};
};
export declare type IAPQueryCallback = ((product: IAPProduct) => void) | ((error: IAPError) => void);
export interface IAPProduct {
    id: string;
    alias: string;
    type: string;
    state: string;
    title: string;
    description: string;
    priceMicros: string;
    price: string;
    currency: string;
    loaded: boolean;
    valid: boolean;
    canPurchase: boolean;
    owned: boolean;
    downloading: boolean;
    downloaded: boolean;
    additionalData: any;
    transaction: any;
    finish(): void;
    verify(): any;
    set(key: string, value: any): void;
    stateChanged(): void;
    on(event: string, callback: Function): void;
    once(event: string, callback: Function): void;
    off(callback: Function): void;
    trigger(action: string, args: any): void;
}
export interface IAPProductEvents {
    loaded: (callback: IAPQueryCallback) => void;
    updated: (callback: IAPQueryCallback) => void;
    error: (callback: IAPQueryCallback) => void;
    approved: (callback: IAPQueryCallback) => void;
    owned: (callback: IAPQueryCallback) => void;
    cancelled: (callback: IAPQueryCallback) => void;
    refunded: (callback: IAPQueryCallback) => void;
    registered: (callback: IAPQueryCallback) => void;
    valid: (callback: IAPQueryCallback) => void;
    invalid: (callback: IAPQueryCallback) => void;
    requested: (callback: IAPQueryCallback) => void;
    initiated: (callback: IAPQueryCallback) => void;
    finished: (callback: IAPQueryCallback) => void;
    verified: (callback: IAPQueryCallback) => void;
    unverified: (callback: IAPQueryCallback) => void;
    expired: (callback: IAPQueryCallback) => void;
    downloading: (product: IAPProduct, progress: any, time_remaining: any) => void;
    downloaded: (callback: IAPQueryCallback) => void;
}
/**
 * @hidden
 */
export declare class IAPError {
    code: number;
    message: string;
}

export class InAppPurchase2Mock extends InAppPurchase2 {
    QUIET: number;
    ERROR: number;
    WARNING: number;
    INFO: number;
    DEBUG: number;
    /**
     * Debug level. Use QUIET, ERROR, WARNING, INFO or DEBUG constants
     */
    verbosity: number;
    /**
     * Set to true to invoke the platform purchase sandbox. (Windows only)
     */
    sandbox: boolean;
    FREE_SUBSCRIPTION: string;
    PAID_SUBSCRIPTION: string;
    NON_RENEWING_SUBSCRIPTION: string;
    CONSUMABLE: string;
    NON_CONSUMABLE: string;
    ERR_SETUP: number;
    ERR_LOAD: number;
    ERR_PURCHASE: number;
    ERR_LOAD_RECEIPTS: number;
    ERR_CLIENT_INVALID: number;
    ERR_PAYMENT_CANCELLED: number;
    ERR_PAYMENT_INVALID: number;
    ERR_PAYMENT_NOT_ALLOWED: number;
    ERR_UNKNOWN: number;
    ERR_REFRESH_RECEIPTS: number;
    ERR_INVALID_PRODUCT_ID: number;
    ERR_FINISH: number;
    ERR_COMMUNICATION: number;
    ERR_SUBSCRIPTIONS_NOT_AVAILABLE: number;
    ERR_MISSING_TOKEN: number;
    ERR_VERIFICATION_FAILED: number;
    ERR_BAD_RESPONSE: number;
    ERR_REFRESH: number;
    ERR_PAYMENT_EXPIRED: number;
    ERR_DOWNLOAD: number;
    ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE: number;
    REGISTERED: string;
    INVALID: string;
    VALID: string;
    REQUESTED: string;
    INITIATED: string;
    APPROVED: string;
    FINISHED: string;
    OWNED: string;
    DOWNLOADING: string;
    DOWNLOADED: string;
    INVALID_PAYLOAD: number;
    CONNECTION_FAILED: number;
    PURCHASE_EXPIRED: number;
    products: IAPProducts;
    validator: string | ((product: string | IAPProduct, callback: Function) => void);
    log: {
        error: (message: string) => void;
        warn: (message: string) => void;
        info: (message: string) => void;
        debug: (message: string) => void;
    };
    /**
     * Get product by id or alias
     * @param idOrAlias
     */
    get(idOrAlias: string): IAPProduct {
        let response: IAPProduct;
        return response;
    }
    /**
     * Register error handler
     * @param onError {Function} function to call on error
     */
    error(onError: Function): void { }
    /**
     * Add or register a product
     * @param product {IAPProductOptions}
     */
    register(product: IAPProductOptions): void { }
    /**
     *
     * @param query
     * @param event
     * @param callback
     * @return {IAPProductEvents}
     */
    when(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents {
        let response: IAPProductEvents;
        return response;
    }
    /**
     * Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
     * @param query {string | IAPProduct}
     * @param [event] {event}
     * @param [callback] {IAPQueryCallback}
     * @return {IAPProductEvents}
     */
    once(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents {
        let response: IAPProductEvents;
        return response;
    }
    /**
     * Unregister a callback. Works for callbacks registered with ready, when, once and error.
     * @param callback {Function}
     */
    off(callback: Function): void { }
    // order(product: string | IAPProduct, additionalData?: any): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         resolve().error();
    //     }).then();
    //     //  then: Function;
    //     //  error: Function;
    // };
    order(product: string | IAPProduct, additionalData?: any): { then: Function; error: Function; } { return; }

    /**
     *
     * @return {Promise<any>} returns a promise that resolves when the store is ready
     */
    ready(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    refresh(): void { }
}
