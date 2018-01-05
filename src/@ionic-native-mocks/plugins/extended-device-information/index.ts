import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';

export declare class ExtendedDeviceInformationMock extends ExtendedDeviceInformation {
    /**
     * Get the device's memory size
     */
    memory: number;
    /**
     * Get the device's CPU mhz
     */
    cpumhz: string;
    /**
     * Get the total storage
     */
    totalstorage: string;
}
