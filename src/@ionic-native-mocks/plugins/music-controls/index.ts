import { MusicControls } from '@ionic-native/music-controls/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface MusicControlsOptions {
    track: string;
    artist: string;
    cover: string;
    isPlaying: boolean;
    dismissable: boolean;
    hasPrev: boolean;
    hasNext: boolean;
    hasClose: boolean;
    album: string;
    duration: number;
    elapsed: number;
    ticker: string;
}

export class MusicControlsMocks extends MusicControls {
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    create(options: MusicControlsOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    destroy(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    subscribe(): Observable<any> {
        let response: any;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    listen(): void { }
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    updateIsPlaying(isPlaying: boolean): void { }
    /**
    * Update elapsed time, optionally toggle play/pause:
    * @param args {Object}
    */
    updateElapsed(args: {
        elapsed: number;
        isPlaying: boolean;
    }): void { }
    /**
     * Toggle dismissable:
     * @param dismissable {boolean}
     */
    updateDismissable(dismissable: boolean): void { }
}
