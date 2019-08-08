import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

export class OpenNativeSettingsMock extends OpenNativeSettings {
    /**
     * Opens a setting dialog
     * @param setting {string} setting name
     * @return {Promise<any>}
     */
    open(setting: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
