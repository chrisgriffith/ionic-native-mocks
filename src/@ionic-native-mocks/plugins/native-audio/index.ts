import { NativeAudio } from '@ionic-native/native-audio/ngx';

export class NativeAudioMock extends NativeAudio {
    /**
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @returns {Promise<any>}
     */
    preloadSimple(id: string, assetPath: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
     * @param voices {number} the number of multichannel voices available
     * @param delay {number}
     * @returns {Promise<any>}
     */
    preloadComplex(id: string, assetPath: string, volume: number, voices: number, delay: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Plays an audio asset
     * @param id {string} unique ID for the audio file
     * @param completeCallback {Function} optional. Callback to be invoked when audio is done playing
     * @returns {Promise<any>}
     */
    play(id: string, completeCallback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Stops playing an audio
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    stop(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Loops an audio asset infinitely, this only works for complex assets
     * @param id {string} unique ID for the audio file
     * @return {Promise<any>}
     */
    loop(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Unloads an audio file from memory
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    unload(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Changes the volume for preloaded complex assets.
     * @param id {string} unique ID for the audio file
     * @param volume {number} the volume of the audio asset (0.1 to 1.0)
     * @returns {Promise<any>}
     */
    setVolumeForComplexAsset(id: string, volume: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
