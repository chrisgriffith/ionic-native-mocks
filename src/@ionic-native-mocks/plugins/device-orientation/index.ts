import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface DeviceOrientationCompassHeading {
    /**
     * The heading in degrees from 0-359.99 at a single moment in time. (Number)
     */
    magneticHeading: number;
    /**
     * The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can't be determined. (Number)
     */
    trueHeading: number;
    /**
     * The deviation in degrees between the reported heading and the true heading. (Number)
     */
    headingAccuracy: number;
    /**
     * The time at which this heading was determined. (DOMTimeStamp)
     */
    timestamp: any;
}

export interface DeviceOrientationCompassOptions {
    /**
     * How often to retrieve the compass heading in milliseconds. (Number) (Default: 100)
     */
    frequency?: number;
    /**
     * The change in degrees required to initiate a watchHeading success callback. When this value is set, frequency is ignored. (Number)
     */
    filter?: number;
}

export class DeviceOrientationMock extends DeviceOrientation {
    getCurrentHeading(): Promise<DeviceOrientationCompassHeading> {
        let data: DeviceOrientationCompassHeading;

        return new Promise((resolve, reject) => {
            resolve(data);
        });
}
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param {DeviceOrientationCompassOptions} options Options for compass. Frequency and Filter. Optional
     * @returns {Observable<DeviceOrientationCompassHeading>} Returns an observable that contains the compass heading
     */
    watchHeading(options?: DeviceOrientationCompassOptions): Observable<DeviceOrientationCompassHeading> {
        let data: DeviceOrientationCompassHeading;

        return Observable.create( (observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
}
