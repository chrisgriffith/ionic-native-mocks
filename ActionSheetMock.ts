import { ActionSheet } from '@ionic-native/action-sheet';

export interface ActionSheetOptions {
    buttonLabels: string[];
    title?: string;
    subtitle?: string;
    androidTheme?: number;
    androidEnableCancelButton?: boolean;
    winphoneEnableCancelButton?: boolean;
    addCancelButtonWithLabel?: string;
    addDestructiveButtonWithLabel?: string;
    position?: number[];
    destructiveButtonLast?: boolean;
}

export class ActionSheetMock extends ActionSheet {
    ANDROID_THEMES: {
        THEME_TRADITIONAL: number;
        THEME_HOLO_DARK: number;
        THEME_HOLO_LIGHT: number;
        THEME_DEVICE_DEFAULT_DARK: number;
        THEME_DEVICE_DEFAULT_LIGHT: number;
    };

    show(options?: ActionSheetOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
  
    hide(options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
