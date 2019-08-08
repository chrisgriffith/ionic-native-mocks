import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface IPedometerData {
    startDate?: number;
    endDate?: number;
    numberOfSteps: number;
    distance: number;
    floorsAscended: number;
    floorsDescended: number;
}

export class PedometerMock extends Pedometer {
    /**
     * Checks if step counting is available. Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isStepCountingAvailable(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isDistanceAvailable(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isFloorCountingAvailable(): Promise<boolean> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
    * Starts the delivery of recent pedestrian-related data to your Cordova app.
    *
    * When the app is suspended, the delivery of updates stops temporarily.
    * Upon returning to foreground or background execution, the pedometer object begins updates again.
    * @return {Observable<IPedometerData>} Returns a Observable that recieves repeatly data from pedometer in background.
    */
    startPedometerUpdates(): Observable<IPedometerData> {
         let response: IPedometerData;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Stops the delivery of recent pedestrian data updates to your Cordova app.
     * @return {Promise<boolean>} Returns a promise that resolves when pedometer watching was stopped
     */
    stopPedometerUpdates(): Promise<any> {
        let response: boolean = true;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
    /**
     * Retrieves the data between the specified start and end dates.
     * The startDate and endDate options are required and can be constructed in any valid JavaScript way
     * (e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
     * Only works on iOS.
     * @param {any} options  start date and en date where you want to get pedometer data
     * @return {Promise<IPedometerData>} Returns a promise that resolves when pedometer data found
     */
    queryData(options: {
        startDate: Date;
        endDate: Date;
    }): Promise<IPedometerData> {
        let response: IPedometerData ;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }
}
