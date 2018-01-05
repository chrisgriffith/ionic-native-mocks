import { Uid } from '@ionic-native/uid';

export class UidMock extends Uid {
    /** Get the device Universally Unique Identifier (UUID). */
    UUID: string;
    /** Get the device International Mobile Station Equipment Identity (IMEI). */
    IMEI: string;
    /** Get the device International mobile Subscriber Identity (IMSI). */
    IMSI: string;
    /** Get the sim Integrated Circuit Card Identifier (ICCID). */
    ICCID: string;
    /** Get the Media Access Control address (MAC). */
    MAC: string;
}
