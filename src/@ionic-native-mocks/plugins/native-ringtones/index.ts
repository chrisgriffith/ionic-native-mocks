import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';

export class NativeRingtonesMock extends NativeRingtones {
    /**
     * Get the ringtone list of the device
     * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
     */
    getRingtone(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * This function starts playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    playRingtone(ringtoneUri: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * This function stops playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    stopRingtone(ringtoneUri: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
