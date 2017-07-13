import { Autostart } from '@ionic-native/autostart';

export class AutostartMock extends Autostart {
    /**
     * Enable the automatic startup after the boot
     */
    enable(): void {};
    /**
     * Disable the automatic startup after the boot
     */
    disable(): void {};
}
