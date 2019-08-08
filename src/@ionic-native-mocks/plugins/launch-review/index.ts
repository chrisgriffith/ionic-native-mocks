import { LaunchReview } from '@ionic-native/launch-review/ngx';

export class LaunchReviewMock extends LaunchReview {
    /**
     * Launch store app using given app ID
     * @returns {Promise<void>}
     */
    launch(appId: string): Promise<void> {
        return;
    }
}
