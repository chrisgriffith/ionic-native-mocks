import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Observable } from 'rxjs/internal/Observable';

/**
 * @hidden
 */
export class MediaObjectMock extends MediaObject {
    // private _objectInstance;
    onSuccess: Observable<any>;
    onError: Observable<any>;
    onStatusUpdate: Observable<any> ;

    constructor(_objectInstance: any, onSuccess: Observable<any>, onError: Observable<any>, onStatusUpdate: Observable<any>) {
        super(_objectInstance);
    }
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    getCurrentAmplitude(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    getCurrentPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    getDuration(): number {
        return 42;
    }
    /**
     * Starts or resumes playing an audio file.
     */
    play(iosOptions?: {
        numberOfLoops?: number;
        playAudioWhenScreenIsLocked?: boolean;
    }): void {}
    /**
     * Pauses playing an audio file.
     */
    pause(): void {}
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    release(): void {}
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    seekTo(milliseconds: number): void {}
    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void {}
    /**
     * Starts recording an audio file.
     */
    startRecord(): void {}
    /**
     * Stops recording
     */
    stopRecord(): void {}
    /**
     * Pauses recording
     */
    pauseRecord(): void {}
    /**
     * Resumes recording
     */
    resumeRecord(): void {}
    /**
     * Stops playing an audio file.
     */
    stop(): void {}
}
export declare type MediaStatusUpdateCallback = (statusCode: number) => void;
export interface MediaError {
    /**
     * Error message
     */
    message: string;
    /**
     * Error code
     */
    code: number;
}
export declare type MediaErrorCallback = (error: MediaError) => void;

export class MediaMock extends Media {
    /**
     * @hidden
     */
    MEDIA_NONE: number;
    /**
     * @hidden
     */
    MEDIA_STARTING: number;
    /**
     * @hidden
     */
    MEDIA_RUNNING: number;
    /**
     * @hidden
     */
    MEDIA_PAUSED: number;
    /**
     * @hidden
     */
    MEDIA_STOPPED: number;
    /**
     * @hidden
     */
    MEDIA_ERR_ABORTED: number;
    /**
     * @hidden
     */
    MEDIA_ERR_NETWORK: number;
    /**
     * @hidden
     */
    MEDIA_ERR_DECODE: number;
    /**
     * @hidden
     */
    MEDIA_ERR_NONE_SUPPORTED: number;
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param [onStatusUpdate] {MediaStatusUpdateCallback} A callback function to be invoked when the status of the file changes
     * @param [onSuccess] {Function} A callback function to be invoked after the current play, record, or stop action is completed
     * @param [onError] {MediaErrorCallback} A callback function is be invoked if an error occurs.
     * @return {MediaObject}
     */
    create(src: string): MediaObjectMock {
        let response: MediaObjectMock;
        return response;
    }
}
