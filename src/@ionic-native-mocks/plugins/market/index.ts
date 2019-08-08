import { Market } from '@ionic-native/market/ngx';

export class MarketMock extends Market {
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @return {Promise<any>}
     */
    open(appId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Search apps by keyword
     * @param keyword {string} Keyword
     * @return {Promise<any>}
     */
    search(keyword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
