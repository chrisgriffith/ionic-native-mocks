
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

export class AppMinimizeMock extends AppMinimize {
    /**
     * Minimizes the application
     * @return {Promise<any>}
     */
    minimize(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
