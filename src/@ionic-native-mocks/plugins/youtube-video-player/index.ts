import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

export class YoutubeVideoPlayerMock extends YoutubeVideoPlayer {
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    openVideo(videoId: string): void {}
}
