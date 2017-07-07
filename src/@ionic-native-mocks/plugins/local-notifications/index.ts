import { LocalNotifications } from '@ionic-native/local-notifications';

export interface ILocalNotification {
    /**
     * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
     * Default: 0
     */
    id?: number;
    /**
     * First row of the notification
     * Default: Empty string (iOS) or the app name (Android)
     */
    title?: string;
    /**
     * Second row of the notification
     * Default: Empty string
     */
    text?: string;
    /**
     * The interval at which to reschedule the local notification. That can be a value of second, minute, hour, day, week, month or year
     * Default: 0 (which means that the system triggers the local notification once)
     */
    every?: string;
    /**
     * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
     * Default: now ~ new Date()
     */
    at?: any;
    firstAt?: any;
    /**
     * The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
     * Default: 0 (which means don't show a number)
     */
    badge?: number;
    /**
     * Uri of the file containing the sound to play when an alert is displayed
     * Default: res://platform_default
     */
    sound?: string;
    /**
     * Arbitrary data, objects will be encoded to JSON string
     * Default: null
     */
    data?: any;
    /**
     * ANDROID ONLY
     * Uri of the icon that is shown in the ticker and notification
     * Default: res://icon
     */
    icon?: string;
    /**
     * ANDROID ONLY
     * Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
     * Default: res://ic_popup_reminder
     */
    smallIcon?: string;
    /**
    * ANDROID ONLY
    * RGB value for the background color of the smallIcon.
    * Default: Androids COLOR_DEFAULT, which will vary based on Android version.
    */
    color?: string;
    /**
     * ANDROID ONLY
     * Ongoing notifications differ from regular notifications in the following ways:
     * - They are sorted above the regular notifications in the notification panel
     * - They do not have an 'X' close button, and are not affected by the "Clear all" button
     * Default: false
     */
    ongoing?: boolean;
    /**
     * ANDROID ONLY
     * ARGB value that you would like the LED on the device to blink
     * Default: FFFFFF
     */
    led?: string;
    /**
    * Notification priority.
    */
    priority?: number;
}

export class LocalNotificationsMocks extends LocalNotifications {
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    schedule(options?: ILocalNotification | Array<ILocalNotification>): void { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    update(options?: ILocalNotification): void { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    clear(notificationId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    clearAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    cancel(notificationId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    cancelAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    isPresent(notificationId: number): Promise<boolean> {
        let response: Boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    isScheduled(notificationId: number): Promise<boolean> {
        let response: Boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    isTriggered(notificationId: number): Promise<boolean> {
        let response: Boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    getAllIds(): Promise<Array<number>> {
        let response: Array<number> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    getTriggeredIds(): Promise<Array<number>> {
        let response: Array<number> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    getScheduledIds(): Promise<Array<number>> {
        let response: Array<number> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    get(notificationId: any): Promise<ILocalNotification> {
        let response: ILocalNotification;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    getScheduled(notificationId: any): Promise<ILocalNotification> {
        let response: ILocalNotification;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    getTriggered(notificationId: any): Promise<ILocalNotification> {
        let response: ILocalNotification;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    getAll(): Promise<Array<ILocalNotification>> {
        let response: Array<ILocalNotification> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    getAllScheduled(): Promise<Array<ILocalNotification>> {
        let response: Array<ILocalNotification> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    getAllTriggered(): Promise<Array<ILocalNotification>> {
        let response: Array<ILocalNotification> = [];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    registerPermission(): Promise<boolean> {
        let response: Boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    hasPermission(): Promise<boolean> {
        let response: Boolean;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    on(eventName: string, callback: any): void { };
}
