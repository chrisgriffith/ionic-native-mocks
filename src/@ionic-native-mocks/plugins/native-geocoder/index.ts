import {
  NativeGeocoder,
  NativeGeocoderForwardResult,
  NativeGeocoderReverseResult
} from '@ionic-native/native-geocoder';

export class NativeGeocoderMock extends NativeGeocoder {
  /**
   * Reverse geocode a given latitude and longitude to find location address
   * As a mock, gives the address of the white house
   * @param latitude {number} The latitude
   * @param longitude {number} The longitude
   * @return {Promise<NativeGeocoderReverseResult>}
   */
  reverseGeocode(latitude: number, longitude: number): Promise<NativeGeocoderReverseResult> {
    return Promise.resolve({
      street: 'Pennsylvania Ave NW',
      houseNumber: '1600',
      postalCode: '20500',
      district: 'Washington, DC',
      countryName: 'USA'
    });
  }

  /**
   * Forward geocode a given address to find coordinates
   * As a mock, gives the geo-location of the white house
   * @param addressString {string} The address to be geocoded
   * @return {Promise<NativeGeocoderForwardResult>}
   */
  forwardGeocode(addressString: string): Promise<NativeGeocoderForwardResult> {
    return Promise.resolve({
      latitude: '38.897957',
      longitude: '-77.0365'
    });
  }
}