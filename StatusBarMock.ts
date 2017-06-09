import { StatusBar } from '@ionic-native/status-bar';

export class StatusBarMock extends StatusBar {
    isVisible: boolean;

    styleDefault(): void { };
    styleLightContent(): void { };
    styleBlackTranslucent(): void { };
    styleBlackOpaque(): void { };
    backgroundColorByName(colorName: string): void { };
    backgroundColorByHexString(hexString: string): void { };
    overlaysWebView(doesOverlay: boolean): void { };
    hide(): void { };
    show(): void { };
}