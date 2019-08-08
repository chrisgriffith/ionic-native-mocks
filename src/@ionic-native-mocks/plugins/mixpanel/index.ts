import { Mixpanel, MixpanelPeople } from '@ionic-native/mixpanel/ngx';

export class MixpanelMock extends Mixpanel {
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    alias(aliasId: string, originalId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @returns {Promise<any>}
     */
    distinctId(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * @returns {Promise<any>}
     */
    flush(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    identify(distinctId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    init(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    registerSuperProperties(superProperties: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @returns {Promise<any>}
     */
    reset(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    timeEvent(eventName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    track(eventName: string, eventProperties?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
/**
 * @hidden
 */
export class MixpanelPeopleMock extends MixpanelPeople {
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    identify(distinctId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    increment(peopleProperties: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    setPushId(pushId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    set(peopleProperties: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    setOnce(peopleProperties: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
