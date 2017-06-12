import { Vibration} from '@ionic-native/vibration';

export class VibrationMock extends Vibration {
     vibrate(time: number | Array<number>): void{};
}
