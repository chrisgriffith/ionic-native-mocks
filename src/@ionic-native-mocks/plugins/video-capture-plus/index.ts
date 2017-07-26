import { VideoCapturePlus } from '@ionic-native/video-capture-plus';

export interface MediaFile {
    /**
     * The name of the file, without path information.
     */
    name: string;
    /**
     * The full path of the file, including the name.
     */
    fullPath: string;
    /**
     * The file's mime type
     */
    type: string;
    /**
     * The date and time when the file was last modified.
     */
    lastModifiedDate: Date;
    /**
     * The size of the file, in bytes.
     */
    size: number;
    /**
     * Retrieves the format information of the media file.
     * @param {Function} successCallback
     * @param {Function} [errorCallback]
     */
    getFormatData(successCallback: (data: MediaFileData) => any, errorCallback?: (err: any) => any): any;
}
export interface MediaFileData {
    /**
     * The actual format of the audio and video content.
     */
    codecs: string;
    /**
     * The average bitrate of the content. The value is zero for images.
     */
    bitrate: number;
    /**
     * The height of the image or video in pixels. The value is zero for audio clips.
     */
    height: number;
    /**
     * The width of the image or video in pixels. The value is zero for audio clips.
     */
    width: number;
    /**
     * The length of the video or sound clip in seconds. The value is zero for images.
     */
    duration: number;
}
export interface VideoCapturePlusOptions {
    /**
    * The number of videos to record, default 1 (on iOS always 1)
    */
    limit?: number;
    /**
    * Max duration in seconds, default 0, which is 'forever'
    */
    duration?: number;
    /**
    * Set to true to override the default low quality setting
    */
    highquality?: boolean;
    /**
    * Set to true to override the default backfacing camera setting.
    * You'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here
    */
    frontcamera?: boolean;
    /**
    * put the png overlay in your assets folder
    */
    portraitOverlay?: string;
    /**
    *  not passing an overlay means no image is shown for the landscape orientation
    */
    landscapeOverlay?: string;
    /**
    * iOS only
    */
    overlayText?: string;
}

export class VideoCapturePlusMock extends VideoCapturePlus {
    /**
     * Starts recordings
     * @param [options] {VideoCapturePlusOptions} Configure options
     * @return {Promise<MediaFile[]>}
     */
    captureVideo(options?: VideoCapturePlusOptions): Promise<MediaFile[]> {
        let response: Array<MediaFile> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
