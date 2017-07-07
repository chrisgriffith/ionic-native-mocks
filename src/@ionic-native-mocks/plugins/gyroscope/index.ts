import { Gyroscope } from '@ionic-native/gyroscope';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
/**
 *  @hidden
 */
export interface GyroscopeOrientation {
    /**
     *  Represent x-axis
     */
    x: number;
    /**
     *  Represent y-axis
     */
    y: number;
    /**
     *  Represent z-axis
     */
    z: number;
    /**
     *  Represent timestamp of sensor read. Default is 10000ms
     */
    timestamp: number;
}
/**
 *  @hidden
 */
export interface GyroscopeOptions {
    /**
     *  Represent how often (in milliseconds) sensor should be read.  Default is 10000 ms
     */
    frequency: number;
}

export class GyroscopeMock extends Gyroscope {
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    watch(options?: GyroscopeOptions): Observable<GyroscopeOrientation> {
        let response: GyroscopeOrientation;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Get current data from gyroscope sensor
     * @param {GyroscopeOptions} [options]
     * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
     */
    getCurrent(options?: GyroscopeOptions): Promise<GyroscopeOrientation> {
        let response: GyroscopeOrientation;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
