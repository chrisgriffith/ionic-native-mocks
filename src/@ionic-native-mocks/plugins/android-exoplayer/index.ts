import { AndroidExoplayer } from '@ionic-native/android-exoplayer';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export declare type AndroidExoPlayerAspectRatio = 'FILL_SCREEN' | 'FIT_SCREEN';
export interface AndroidExoPlayerParams {
    /**
     * Url of the video to play.
     */
    url: string;
    /**
     * Set the user agent. Default is `ExoPlayerPlugin`
     */
    userAgent?: string;
    /**
     * Set the player aspect ratio.
     */
    aspectRatio?: AndroidExoPlayerAspectRatio;
    /**
     * Hide controls after this many milliseconds, default is `5000`.
     */
    hideTimeout?: number;
    /**
     * When set to false stream will not automatically start.
     */
    autoPlay?: boolean;
    /**
     * Start playback at this many milliseconds into video, default is `0`.
     */
    seekTo?: number;
    /**
     * Amount of time in milliseconds to use when skipping forward, default is `1000`.
     */
    forwardTime?: number;
    /**
     * Amount of time in milliseconds to use when skipping backward, default is `1000`.
     */
    rewindTime?: number;
    /**
     * Only play audio in the backgroud, default is `false`.
     * If you pass in `audioOnly: true`, make sure to manually close the player on some event (like escape button) since the plugin won't be detecting keypresses when playing audio in the background.
     */
    audioOnly?: true;
    /**
     * Optional subtitle url to display over the video.
     * We currently support .srt and .vtt subtitle formats. Subtitles are not supported on all stream types, as ExoPlayer has requirement that both video and subtitle "must have the same number of periods, and must not have any dynamic windows", which means for simple mp4s it should work, but on more complex HLS/Dash setups it might not.
     */
    subtitleUrl?: string;
    /**
     * okhttp connect timeout in milliseconds (default is `0`)
     */
    connectTimeout?: number;
    /**
     * okhttp read timeout in milliseconds (default is `0`)
     */
    readTimeout?: number;
    /**
     * okhttp write timeout in milliseconds (default is `0`)
     */
    writeTimeout?: number;
    /**
     * okhttp socket ping interval in milliseconds (default is `0` or disabled)
     */
    pingInterval?: number;
    /**
     * Number of times datasource will retry the stream before giving up (default is `3`)
     */
    retryCount?: number;
    /**
     * If this object is not present controller will not be visible.
     */
    controller?: AndroidExoPlayerControllerConfig;
}
export interface AndroidExoplayerState {
    [s: string]: string;
}
export interface AndroidExoPlayerControllerConfig {
    /**
     * Image in the controller.
     */
    streamImage: string;
    /**
     *
     */
    streamTitle: string;
    /**
     *
     */
    streamDescription: string;
    /**
     * Hide entire progress bar.
     */
    hideProgress?: true;
    /**
     * If progress bar is visible hide current position from it
     */
    hidePosition: false;
    /**
     * If progress bar is visible Hide stream duration from it
     */
    hideDuration: false;
    /**
     * Override the player control button icons.
     */
    controlIcons?: {
        /**
         * Rewind button icon.
         */
        exo_rew: string;
        /**
         * Play button icon.
         */
        exo_play: string;
        /**
         * Payse button icon.
         */
        exo_pause: string;
        /**
         * Fast forward button icon.
         */
        exo_ffwd: string;
    };
}

export class AndroidExoplayerMock extends AndroidExoplayer {
    /**
     * Show the player.
     * @param parameters {AndroidExoPlayerParams} Parameters
     * @return {Observable<AndroidExoplayerState>}
     */
    show(parameters: AndroidExoPlayerParams): Observable<AndroidExoplayerState> {
        let response: AndroidExoplayerState;
        return Observable.create((observer: Observer<AndroidExoplayerState>) => {
            observer.next( response );
            observer.complete();
        });
    };
    /**
     * Switch stream without disposing of the player.
     * @param url {string} The url of the new stream.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    setStream(url: string, controller: AndroidExoPlayerControllerConfig): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Will pause if playing and play if paused
     * @return {Promise<void>}
     */
    playPause(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Stop playing.
     * @return {Promise<void>}
     */
    stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Jump to a particular position.
     * @param milliseconds {number} Position in stream in milliseconds
     * @return {Promise<void>}
     */
    seekTo(milliseconds: number): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Jump to a particular time relative to the current position.
     * @param milliseconds {number} Time in milliseconds
     * @return {Promise<void>}
     */
    seekBy(milliseconds: number): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the current player state.
     * @return {Promise<AndroidExoplayerState>}
     */
    getState(): Promise<AndroidExoplayerState> {
        let response: AndroidExoplayerState;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Show the controller.
     * @return {Promise<void>}
     */
    showController(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Hide the controller.
     * @return {Promise<void>}
     */
    hideController(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Update the controller configuration.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    setController(controller: AndroidExoPlayerControllerConfig): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Close and dispose of player, call before destroy.
     * @return {Promise<void>}
     */
    close(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
