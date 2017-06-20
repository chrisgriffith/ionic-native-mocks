import { DeviceMotion } from '@ionic-native/device-motion';
import { Observable } from 'rxjs/Observable';

export interface DeviceMotionAccelerationData {
    /**
     * Amount of acceleration on the x-axis. (in m/s^2)
     */
    x: number;
    /**
     * Amount of acceleration on the y-axis. (in m/s^2)
     */
    y: number;
    /**
     * Amount of acceleration on the z-axis. (in m/s^2)
     */
    z: number;
    /**
     * Creation timestamp in milliseconds.
     */
    timestamp: any;
}

export interface DeviceMotionAccelerometerOptions {
    /**
     * Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000
     */
    frequency?: number;
}

export class DeviceMotionMock extends DeviceMotion {
     getCurrentAcceleration(): Promise<DeviceMotionAccelerationData>{
        let data:DeviceMotionAccelerationData;
        return new Promise((resolve, reject) => {
            resolve(data );
        });

     };
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    watchAcceleration(options?: DeviceMotionAccelerometerOptions): Observable<DeviceMotionAccelerationData>{
        let data:DeviceMotionAccelerationData;
        
        return Observable.create(observer => {
            observer.next(data);
            observer.complete();
        });   
    };
}