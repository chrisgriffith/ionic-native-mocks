import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';

export class InAppPurchaseMock extends InAppPurchase {
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise<any>} Returns a Promise that resolves with an array of objects.
     */
    getProducts(productId: string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    buy(productId: string): Promise<{
        transactionId: string;
        receipt: string;
        signature: string;
        productType: string;
    }> {
        let response: {
            transactionId: string;
            receipt: string;
            signature: string;
            productType: string;
        };
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    subscribe(productId: string): Promise<{
        transactionId: string;
        receipt: string;
        signature: string;
        productType: string;
    }> {
        let response: {
        transactionId: string;
        receipt: string;
        signature: string;
        productType: string;
    };
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     * @returns {Promise<any>}
     */
    consume(productType: string, receipt: string, signature: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Restore all purchases from the store
     * @returns {Promise<any>} Returns a promise with an array of purchases.
     */
    restorePurchases(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    getReceipt(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
