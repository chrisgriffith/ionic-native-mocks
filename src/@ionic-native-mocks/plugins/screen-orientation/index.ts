import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export class ScreenOrientationMock extends ScreenOrientation {
    /**
     * Convenience enum for possible orientations
     */
    ORIENTATIONS: {
        PORTRAIT_PRIMARY: string;
        PORTRAIT_SECONDARY: string;
        LANDSCAPE_PRIMARY: string;
        LANDSCAPE_SECONDARY: string;
        PORTRAIT: string;
        LANDSCAPE: string;
        ANY: string;
    };
    /**
     * Listen to orientation change event
     * @return {Observable<void>}
     */
    onChange(): Observable<void> {
        return Observable.create((observer: Observer<any>) => {
            observer.complete();
        });
    }
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param orientation {string} The orientation which should be locked. Accepted values see table above.
     * @return {Promise<any>}
     */
    lock(orientation: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Unlock and allow all orientations.
     */
    unlock(): void { }
    /**
     * Get the current orientation of the device.
     */
    type: string;
}
