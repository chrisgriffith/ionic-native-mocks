import { BatteryStatus } from '@ionic-native/battery-status';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface BatteryStatusResponse {
    /**
     * The battery charge percentage
     */
    level: number;
    /**
     * A boolean that indicates whether the device is plugged in
     */
    isPlugged: boolean;
}

export class BatteryStatusMock extends BatteryStatus {
    /**
     * Watch the change in battery level
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onChange(): Observable<BatteryStatusResponse> {
        let response: BatteryStatusResponse;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Watch when the battery level goes low
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onLow(): Observable<BatteryStatusResponse> {
        let response: BatteryStatusResponse;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     * Watch when the battery level goes to critial
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onCritical(): Observable<BatteryStatusResponse> {
        let response: BatteryStatusResponse;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
}
