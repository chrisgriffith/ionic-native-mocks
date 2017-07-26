import { NavigationBar } from '@ionic-native/navigation-bar';

export class NavigationBarMock extends NavigationBar {
    /**
     * hide automatically (or not) the navigation bar.
     * @param autohide {boolean}
     * @return {Promise<any>}
     */
    setUp(autohide?: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Hide the navigation bar.
     * @return {Promise<any>}
     */
    hideNavigationBar(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
