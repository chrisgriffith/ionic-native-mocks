import { VideoPlayer } from '@ionic-native/video-player/ngx';
/**
 * Options for the video playback using the `play` function.
 */
export interface VideoOptions {
    /**
   * Set the initial volume of the video playback, where 0.0 is 0% volume and 1.0 is 100%.
   * For example: for a volume of 30% set the value to 0.3.
   */
    volume?: number;
    /**
     * There are to options for the scaling mode. SCALE_TO_FIT which is default and SCALE_TO_FIT_WITH_CROPPING.
     * These strings are the only ones which can be passed as option.
     */
    scalingMode?: number;
}

export class VideoPlayerMock extends VideoPlayer {
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    play(fileUrl: string, options?: VideoOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Stops the video playback immediatly.
     */
    close(): void {}
}
