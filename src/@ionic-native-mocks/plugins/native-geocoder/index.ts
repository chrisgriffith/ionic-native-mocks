import { NativeGeocoder } from '@ionic-native/native-geocoder';

export class NativeGeocoderMock extends NativeGeocoder {
    /**
     * Reverse geocode a given latitude and longitude to find location address
     * @param latitude {number} The latitude
     * @param longitude {number} The longitude
     * @return {Promise<any>}
     */
    reverseGeocode(latitude: number, longitude: number, options?: NativeGeocoderOptions): Promise<NativeGeocoderReverseResult[]> {
        let response: NativeGeocoderReverseResult[];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Forward geocode a given address to find coordinates
     * @param addressString {string} The address to be geocoded
     * @return {Promise<any>}
     */
    orwardGeocode(addressString: string, options?: NativeGeocoderOptions): Promise<NativeGeocoderForwardResult[]> {
        let response: NativeGeocoderForwardResult[];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
/**
 * Encapsulates format information about a reverse geocoding result.
 */
export interface NativeGeocoderReverseResult {
    /**
     * The country code.
     */
    countryCode: string;
    /**
     * The country name.
     */
    countryName: string;
    /**
     * The postal code.
     */
    postalCode: string;
    /**
     * The administrativeArea.
     */
    administrativeArea: string;
    /**
     * The subAdministrativeArea.
     */
    subAdministrativeArea: string;
    /**
     * The locality.
     */
    locality: string;
    /**
     * The subLocality.
     */
    subLocality: string;
    /**
     * The thoroughfare.
     */
    thoroughfare: string;
    /**
     * The subThoroughfare.
     */
    subThoroughfare: string;
}
/**
 * Encapsulates format information about a forward geocoding result.
 */
export interface NativeGeocoderForwardResult {
    /**
     * The latitude.
     */
    latitude: string;
    /**
     * The longitude.
     */
    longitude: string;
}

export interface NativeGeocoderOptions {
    /**
     * The locale to use when returning the address information.
     * If set to 'false' the locale will always be 'en_US'.
     * Default is 'true'
     */
    useLocale: boolean;
    /**
     * The default locale to use when returning the address information.
     * e.g.: 'fa-IR' or 'de_DE'.
     */
    defaultLocale?: string;
    /**
     * The maximum number of result to return (max is 5).
     * Default is 1
     */
    maxResults: number;
}
