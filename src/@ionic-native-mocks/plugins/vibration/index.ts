import { Vibration} from '@ionic-native/vibration';

export class VibrationMock extends Vibration {
     /**
     * Vibrates the device for given amount of time.
     * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    vibrate(time: number | Array<number>): void{};
}
