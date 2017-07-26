import { StreamingMedia } from '@ionic-native/streaming-media';

export interface StreamingVideoOptions {
    successCallback?: Function;
    errorCallback?: Function;
    orientation?: string;
}
export interface StreamingAudioOptions {
    bgColor?: string;
    bgImage?: string;
    bgImageScale?: string;
    initFullscreen?: boolean;
    successCallback?: Function;
    errorCallback?: Function;
}

export class StreamingMediaMock extends StreamingMedia {
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    playVideo(videoUrl: string, options?: StreamingVideoOptions): void {};
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    playAudio(audioUrl: string, options?: StreamingAudioOptions): void {};
    /**
     * Stops streaming audio
     */
    stopAudio(): void {};
    /**
     * Pauses streaming audio
     */
    pauseAudio(): void {};
    /**
     * Resumes streaming audio
     */
    resumeAudio(): void {};
}
