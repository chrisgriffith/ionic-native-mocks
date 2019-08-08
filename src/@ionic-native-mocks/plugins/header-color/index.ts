import { HeaderColor } from '@ionic-native/header-color/ngx';

export class HeaderColorMock extends HeaderColor {
    /**
     * Set a color to the task header
     * @param color {string} The hex value of the color
     * @returns {Promise<any>}
     */
    tint(color: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
