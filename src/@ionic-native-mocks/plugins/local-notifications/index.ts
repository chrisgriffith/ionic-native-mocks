import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export declare enum ELocalNotificationTriggerUnit {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  QUARTER = 'quarter',
  YEAR = 'year',
  WEEKDAY = 'weekday',
  WEEKDAY_ORDINAL = 'weekdayOrdinal',
  WEEK_OF_MONTH = 'weekOfMonth'
}
export interface ILocalNotificationTrigger {
  /** ***** FIX ***** */
  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Default: now ~ new Date()
   */
  at?: Date;
  /** ***** TIMESPAN ***** */
  /**
   * Amount of units
   */
  in?: number;
  /**
   * Unit
   */
  unit?: ELocalNotificationTriggerUnit;
  /** ***** REPEAT/MATCH ***** */
  /**
   * Amount of units
   */
  count?: number;
  /**
   * The unit
   */
  every?: ELocalNotificationTriggerUnit;
  /**
   * The end of the repeating notification
   */
  before?: Date;
  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Only for 'repeat'
   * Default: now ~ new Date()
   */
  firstAt?: Date;
  /**
   * Only for 'match'
   */
  after?: Date;
  /** ***** LOCATION ***** */
  /**
   * IOS ONLY
   * Center of the location
   * Latitude and Longitude values
   */
  center?: number[];
  /**
   * IOS ONLY
   * Radius in meters
   */
  radius?: number;
  /**
   * IOS ONLY
   * Trigger on entry of the location
   */
  notifyOnEntry?: boolean;
  /**
   * IOS ONLY
   * Trigger on exit of the location
   */
  notifyOnExit?: boolean;
  /**
   * IOS ONLY
   * Trigger only once?
   */
  single?: boolean;
}
export declare enum ILocalNotificationActionType {
  INPUT = 'input',
  BUTTON = 'button'
}
export interface ILocalNotificationAction {
  /**
   * The id of the action is used as the event name in the listener function
   */
  id?: string;
  /**
   * The title of the notification message
   */
  title?: string;
  /**
   * Specifies whether the action causes the app to launch in the foreground
   */
  launch?: boolean;
  /**
   * If the value is 'decline' the action is displayed with special highlighting to indicate that it performs a destructive task
   */
  ui?: string;
  /**
   * Specifies whether the action requires that the user’s device be unlocked.
   * When the user selects an action with this option, the system prompts
   * the user to unlock the device
   */
  needsAuth?: boolean;
  /**
   * The resource path of the action icon
   */
  icon?: string;
  /**
   * The type of the action. If omitted 'button' is used.
   */
  type?: ILocalNotificationActionType;
}
export interface ILocalNotificationProgressBar {
  /**
   * Is the progress bar enabled?
   */
  enabled?: boolean;
  /**
   * The current value
   */
  value?: number;
  /**
   * ANDROID ONLY
   * The maximum value (default is 100)
   */
  maxValue?: number;
  /**
   * ANDROID ONLY
   * Show an indeterminate progress bar
   */
  indeterminate?: boolean;
  /**
   * WINDOWS ONLY
   * Gets or sets an optional string to be displayed instead of the
   * default percentage string. If this isn't provided, something
   * like '70%' will be displayed.
   */
  description?: string;
  /**
   * WINDOWS ONLY
   * Sets the status (required), which is displayed underneath the progress bar
   * on the left.
   * This string should reflect the status of the operation,
   * like 'Downloading...' or 'Installing...'
   */
  status?: string;
}
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
  text?: string | string[];
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
   * Use the default notification vibrate.
   */
  vibrate?: boolean;
  /**
   * ANDROID ONLY
   * Define the blinking of the LED on the device.
   * If set to true, the LED will blink in the default color with
   * timings for on and off set to 1000 ms.
   * If set to a string, the LED will blink in this ARGB value with
   * timings for on and off set to 1000 ms.
   * If set to an array, the value of the key 0 will be used as the color,
   * the value of the key 1 will be used as the 'on' timing, the value of
   * the key 2 will be used as the 'off' timing
   */
  led?:
    | {
        color: string;
        on: number;
        off: number;
      }
    | any[]
    | boolean
    | string;
  /**
   * Notification priority.
   * Integers between -2 and 2, whereas -2 is minimum and 2 is maximum priority
   */
  priority?: number;
  /**
   * Is a silent notification
   */
  silent?: boolean;
  /**
   * Specifies whether the a click on the notification causes the app
   * to launch in the foreground
   */
  launch?: boolean;
  /**
   * ANDROID ONLY
   * Wakeup the device. (default is true)
   */
  wakeup?: boolean;
  /**
   * ANDROID ONLY
   * Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled.
   */
  timeoutAfter?: number | false;
  /**
   * Actions id or actions
   */
  actions?: string | ILocalNotificationAction[];
  /**
   * When to trigger the notification
   */
  trigger?: ILocalNotificationTrigger;
  /**
   * A list of image attachments
   */
  attachments?: string[];
  /**
   * ANDROID ONLY
   * If and how the notification shall show the when date.
   * Possbile values:
   *                  boolean: true equals 'clock', false disable a watch/counter
   *                  'clock': Show the when date in the content view
   *                  'chronometer': Show a stopwatch
   *
   */
  clock?: boolean | string;
  /**
   * Shows a progress bar
   * Setting a boolean is a shortcut for {enabled: true/false} respectively
   */
  progressBar?: ILocalNotificationProgressBar | boolean;
  /**
   * ANDROID ONLY
   * If multiple notifications have the same group your app can present
   * them as a single group.
   */
  group?: string;
  /**
   * ANDROID ONLY
   * If set to 'true' this notification could use 'summary' to summarize
   * the contents of the whole group
   */
  groupSummary?: boolean;
  /**
   * ANDROID ONLY
   * Summary of the whole notification group. Should be used in conjuntion
   * with 'groupSummary' set to true
   */
  summary?: string;
  /**
   * ANDROID ONLY
   * Sets the number of items this notification represents.
   */
  number?: number;
  /**
   * ANDROID ONLY
   * Set whether this is an 'ongoing' notification.
   * Ongoing notifications cannot be dismissed by the user,
   * so your application or service must take care of canceling them.
   */
  sticky?: boolean;
  /**
   * ANDROID ONLY
   * Make this notification automatically dismissed when the user touches it.
   */
  autoClear?: boolean;
  /**
   * ANDROID ONLY
   * If set to true the notification will be show in its entirety on all lockscreens.
   * If set to false it will not be revealed on a secure lockscreen.
   */
  lockscreen?: boolean;
  /**
   * ANDROID ONLY
   * Set the default notification options that will be used.
   * The value should be one or more of the following fields combined with
   * bitwise-or: DEFAULT_SOUND, DEFAULT_VIBRATE, DEFAULT_LIGHTS.
   */
  defaults?: number;
  /**
   * ANDROID ONLY
   * Specifies the channel the notification should be delivered on.
   */
  channel?: string;
  /**
   * ANDROID ONLY
   * Set the token for the media session
   */
  mediaSession?: string;
}

export class LocalNotificationsMocks extends LocalNotifications {
  /**
   * Schedules a single or multiple notifications
   * @param options {Notification | Array<ILocalNotification>} optional
   */
  schedule(options?: ILocalNotification | Array<ILocalNotification>): void {}
  /**
   * Updates a previously scheduled notification. Must include the id in the options parameter.
   * @param options {ILocalNotification} optional
   */
  update(options?: ILocalNotification): void {}
  /**
   * Clears single or multiple notifications
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification had been cleared
   */
  clear(notificationId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
   * Clears all notifications
   * @returns {Promise<any>} Returns a promise when all notifications have cleared
   */
  clearAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
   * Cancels single or multiple notifications
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification is canceled
   */
  cancel(notificationId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
   * Cancels all notifications
   * @returns {Promise<any>} Returns a promise when all notifications are canceled
   */
  cancelAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  /**
   * Checks presence of a notification
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  isPresent(notificationId: number): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Checks is a notification is scheduled
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  isScheduled(notificationId: number): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Checks if a notification is triggered
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  isTriggered(notificationId: number): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Get all the notification ids
   * @returns {Promise<Array<number>>}
   */
  getIds(): Promise<Array<number>> {
    let response: Array<number> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Get the ids of triggered notifications
   * @returns {Promise<Array<number>>}
   */
  getTriggeredIds(): Promise<Array<number>> {
    let response: Array<number> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Get the ids of scheduled notifications
   * @returns {Promise<Array<number>>} Returns a promise
   */
  getScheduledIds(): Promise<Array<number>> {
    let response: Array<number> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
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
  }
  /**
   * Get all notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  getAll(): Promise<Array<ILocalNotification>> {
    let response: Array<ILocalNotification> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Get all scheduled notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  getAllScheduled(): Promise<Array<ILocalNotification>> {
    let response: Array<ILocalNotification> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Get all triggered notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  getAllTriggered(): Promise<Array<ILocalNotification>> {
    let response: Array<ILocalNotification> = [];
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Register permission to show notifications if not already granted.
   * @returns {Promise<boolean>}
   */
  registerPermission(): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Informs if the app has the permission to show notifications.
   * @returns {Promise<boolean>}
   */
  hasPermission(): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Adds a group of actions
   * @param groupId The id of the action group
   * @param actions The actions of this group
   * @returns {Promise<any>}
   */
  addActions(
    groupId: any,
    actions: Array<ILocalNotificationAction>
  ): Promise<any> {
    let response: Array<ILocalNotificationAction>;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Removes a group of actions
   * @param groupId The id of the action group
   * @returns {Promise<any>}
   */
  removeActions(groupId: any): Promise<any> {
    let response: any;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Checks if a group of actions is defined
   * @param groupId The id of the action group
   * @returns {Promise<boolean>} Whether the group is defined
   */
  hasActions(groupId: any): Promise<boolean> {
    let response: boolean;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Gets the (platform specific) default settings.
   * @returns {Promise<any>} An object with all default settings
   */
  getDefaults(): Promise<any> {
    let response: any;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Overwrites the (platform specific) default settings.
   * @returns {Promise<any>}
   */
  setDefaults(defaults: any): Promise<any> {
    let response: any;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  /**
   * Sets a callback for a specific event
   * @param eventName {string} The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
   * @return {Observable}
   */
  on(eventName: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next('');
      observer.complete();
    });
  }
  /**
   * Not an official interface, however its possible to manually fire events.
   ** @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
   * @param args Optional arguments
   */
  fireEvent(eventName: string, args: any): void {}
  /**
   * Fire queued events once the device is ready and all listeners are registered.
   * @returns {Promise<any>}
   */
  fireQueuedEvents(): Promise<any> {
    let response: any;
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
}
