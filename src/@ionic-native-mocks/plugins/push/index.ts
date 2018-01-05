import { Push, PushObject } from '@ionic-native/push';

export declare type EventResponse = RegistrationEventResponse & NotificationEventResponse & Error;
export interface RegistrationEventResponse {
    /**
     * The registration ID provided by the 3rd party remote push service.
     */
    registrationId: string;
}
export interface NotificationEventResponse {
    /**
     * The text of the push message sent from the 3rd party service.
     */
    message: string;
    /**
     * The optional title of the push message sent from the 3rd party service.
     */
    title?: string;
    /**
     * The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
     * For windows, it represents the value in the badge notification which could be a number or a status glyph.
     */
    count: string;
    /**
     * The name of the sound file to be played upon receipt of the notification.
     */
    sound: string;
    /**
     * The path of the image file to be displayed in the notification.
     */
    image: string;
    /**
     * An optional collection of data sent by the 3rd party push service that does not fit in the above properties.
     */
    additionalData: NotificationEventAdditionalData & any;
}
/**
 * Loosened up with a dictionary notation, but all non-defined properties need to use (map['prop']) notation
 *
 * Ideally the developer would overload (merged declaration) this or create a new interface that would extend this one
 * so that he could specify any custom code without having to use array notation (map['prop']) for all of them.
 */
export interface NotificationEventAdditionalData {
    [name: string]: any;
    /**
     * Whether the notification was received while the app was in the foreground
     */
    foreground?: boolean;
    collapse_key?: string;
    coldstart?: boolean;
    from?: string;
    notId?: string;
}
export interface IOSPushOptions {
    /**
     * Maps to the project number in the Google Developer Console. Setting this
     * uses GCM for notifications instead of native.
     */
    senderID?: string;
    /**
     * Whether to use prod or sandbox GCM setting.
     */
    gcmSandbox?: boolean | string;
    /**
     * If true the device shows an alert on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    alert?: boolean | string;
    /**
     * If true the device sets the badge number on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    badge?: boolean | string;
    /**
     * If true the device plays a sound on receipt of notification.
     * **Note**: the value you set this option to the first time you call the init
     * method will be how the application always acts. Once this is set
     * programmatically in the init method it can only be changed manually by the
     * user in Settings>Notifications>App Name. This is normal iOS behaviour.
     */
    sound?: boolean | string;
    /**
     * If true the badge will be cleared on app startup.
     */
    clearBadge?: boolean | string;
    /**
     * If the array contains one or more strings each string will be used to
     * subscribe to a GcmPubSub topic.
     * **Note**: only usable in conjunction with `senderID`.
     */
    topics?: string[];
    /**
     * The data required in order to enable Action Buttons for iOS.
     * Action Buttons on iOS - https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1
     */
    categories?: CategoryArray;
}
export interface CategoryArray {
    [name: string]: CategoryAction;
}
export interface CategoryAction {
    yes?: CategoryActionData;
    no?: CategoryActionData;
    maybe?: CategoryActionData;
}
export interface CategoryActionData {
    callback: string;
    title: string;
    foreground: boolean;
    destructive: boolean;
}
export interface AndroidPushOptions {
    /**
     * Maps to the project number in the Google Developer Console.
     */
    senderID: string;
    /**
     * The name of a drawable resource to use as the small-icon. The name should
     * not include the extension.
     */
    icon?: string;
    /**
     * Sets the background color of the small icon on Android 5.0 and greater.
     * [Supported Formats](http://developer.android.com/intl/ru/reference/android/graphics/Color.html#parseColor(java.lang.String))
     */
    iconColor?: string;
    /**
     * If true it plays the sound specified in the push data or the default system
     * sound.
     */
    sound?: boolean | string;
    /**
     * If true the device vibrates on receipt of notification.
     */
    vibrate?: boolean | string;
    /**
     * If true the icon badge will be cleared on init and before push messages are processed.
     */
    clearBadge?: boolean | string;
    /**
     * If true the app clears all pending notifications when it is closed.
     */
    clearNotifications?: boolean | string;
    /**
     * If true will always show a notification, even when the app is on the
     * foreground.
     */
    forceShow?: boolean | string;
    /**
     * If the array contains one or more strings each string will be used to
     * subscribe to a GcmPubSub topic.
     */
    topics?: string[];
}
export interface PushOptions {
    ios?: IOSPushOptions;
    android?: AndroidPushOptions;
    windows?: any;
}
export declare type PushEvent = 'registration' | 'error' | 'notification';

export class PushMock extends Push {
    /**
     * Init push notifications
     * @param options {PushOptions}
     * @return {PushObject}
     */
    init(options: PushOptions): PushObject {
        let response: PushObject = new PushObject( options );
        return response;
    };
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise<{isEnabled: boolean}>} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    hasPermission(): Promise<{ isEnabled: boolean; }> {
        let response: { isEnabled: boolean } = { isEnabled: true };
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
