import { Globalization } from '@ionic-native/globalization';

export class GlobalizationMock extends Globalization {

    private static _defaultLanguage: string = 'en-EN';

    /**
    * Set default language on globalization plugin mock, otherwise default language is English.
    * You should use this format to inject provider:
    *
    * GlobalizationMock.setDefaultLanguage('es-ES');
    *
    * ... providers :[
    *      { provide: Globalization, useClass: GlobalizationMock },
    * ]
    */
    static setDefaultLanguage(defaultLanguage: string) {
        this._defaultLanguage = defaultLanguage || this._defaultLanguage;
    }
    /**
    * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
    * @returns {Promise<{value: string}>}
    */
    getPreferredLanguage(): Promise<{ value: string; }> {
        let theResult = {
            value: GlobalizationMock._defaultLanguage
        };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @returns {Promise<{value: string}>}
     */
    getLocaleName(): Promise<{ value: string; }> {
        let theResult = {
            value: GlobalizationMock._defaultLanguage
        };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    dateToString(date: Date, options: { formatLength: string; selector: string; }): Promise<{ value: string; }> {
        let theResult = { value: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }>} Returns a promise when the date has been converted.
     */
    stringToDate(dateString: string, options: {
        formatLength: string;
        selector: string;
    }): Promise<{
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }> {
        let theResult = { year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0, millisecond: 0 };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @returns {Promise<{ pattern: string, timezone: string, utf_offset: number, dst_offset: number }>} Returns a promise.
     */
    getDatePattern(options: {
        formatLength: string;
        selector: string;
    }): Promise<{
        pattern: string;
        timezone: string;
        utf_offset: number;
        dst_offset: number;
    }> {
        let theResult = { pattern: '', timezone: '', utf_offset: 0, dst_offset: 0 };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @returns {Promise<{value: Array<string>}>} Returns a promise.
     */
    getDateNames(options: {
        type: string;
        item: string;
    }): Promise<{
        value: Array<string>;
    }> {
        let theResult = { value: [''] };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<{dst: string}>} reutrns a promise with the value
     */
    isDayLightSavingsTime(date: Date): Promise<{
        dst: string;
    }> {
        let theResult = { dst: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<{value: string}>} returns a promise with the value
     */
    getFirstDayOfWeek(): Promise<{
        value: string;
    }> {
        let theResult = { value: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param numberToConvert {Number} The number to convert
     * @param options {Object} Object with property `type` that can be set to: decimal, percent, or currency.
     */
    numberToString(numberToConvert: number, options: {
        type: string;
    }): Promise<{
        value: string;
    }> {
        let theResult = { value: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise<{ value: number | string }>} Returns a promise with the value.
     */
    stringToNumber(stringToConvert: string, options: {
        type: string;
    }): Promise<{
        value: number | string;
    }> {
        let theResult = { value: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise<{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }>}
     */
    getNumberPattern(options: {
        type: string;
    }): Promise<{
        pattern: string;
        symbol: string;
        fraction: number;
        rounding: number;
        positive: string;
        negative: string;
        decimal: string;
        grouping: string;
    }> {
        let theResult = { pattern: '', symbol: '', fraction: 0, rounding: 0, positive: '', negative: '', decimal: '', grouping: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise<{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }>}
     */
    getCurrencyPattern(currencyCode: string): Promise<{
        pattern: string;
        code: string;
        fraction: number;
        rounding: number;
        decimal: number;
        grouping: string;
    }> {
        let theResult = { pattern: '', code: '', fraction: 0, rounding: 0, decimal: 0, grouping: '' };
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    };
}
