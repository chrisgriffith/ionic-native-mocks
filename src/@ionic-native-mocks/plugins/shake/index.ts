import { Shake } from '@ionic-native/shake';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class ShakeMock extends Shake {
    /**
     * Watch for shake gesture
     * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
     * @returns {Observable<any>}
     */
    startWatch(sensitivity?: number): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    };
}
