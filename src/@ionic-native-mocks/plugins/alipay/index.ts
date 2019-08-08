import { Alipay } from '@ionic-native/alipay/ngx';

export interface AlipayOrder {
    /**
     * appId assigned by Alipay
     */
    app_id: string;
    /**
     * Api name.
     * Should be: alipay.trade.app.pay
     */
    method: string;
    /**
     * Data format
     * Default: "JSON"
     */
    format?: string;
    /**
     * Charset
     * Possible values: "UTF-8", "GBK"
     * Default: "UTF-8"
     */
    charset: string;
    /**
     * Sign method
     * Default: 'RSA'
     */
    sign_type: string;
    /**
     * Sign value. Should be got from server side.
     * Default: 'RSA'
     */
    sign: string;
    /**
     * Timestamp, formated like "yyyy-MM-dd HH:mm:ss", e.g. 2014-07-24 03:07:50
     */
    timestamp: string;
    /**
     * Api version. Fixed value '1.0'
     */
    version: string;
    /**
     * Notify url.
     */
    notify_url: string;
    /**
     * biz content. formated in json. see alipay doc for detail.
     */
    biz_content: string;
}

export class AlipayMock extends Alipay {
    /**
     * Open Alipay to perform App pay
     * @param order { AlipayOrder } alipay options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    pay(order: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
