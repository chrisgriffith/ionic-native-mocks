import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface BackgroundGeolocationResponse {
    /**
     * ID of location as stored in DB (or null)
     */
    locationId: number;
    /**
     * Service provider
     */
    serviceProvider: string;
    /**
     * true if location recorded as part of debug
     */
    debug: boolean;
    /**
     * UTC time of this fix, in milliseconds since January 1, 1970.
     */
    time: number;
    /**
     * latitude, in degrees.
     */
    latitude: number;
    /**
     * longitude, in degrees.
     */
    longitude: number;
    /**
     * estimated accuracy of this location, in meters.
     */
    accuracy: number;
    /**
     * speed if it is available, in meters/second over ground.
     */
    speed: number;
    /**
     * altitude if available, in meters above the WGS 84 reference ellipsoid.
     */
    altitude: number;
    /**
      * accuracy of the altitude if available.
      */
    altitudeAccuracy: number;
    /**
     * bearing, in degrees.
     */
    bearing: number;
    /**
     * A Coordinates object defining the current location
     */
    coords: Coordinates;
    /**
     * A timestamp representing the time at which the location was retrieved.
     */
    timestamp: number;
}
export interface BackgroundGeolocationConfig {
    /**
     * Desired accuracy in meters. Possible values [0, 10, 100, 1000]. The lower
     * the number, the more power devoted to GeoLocation resulting in higher
     * accuracy readings. 1000 results in lowest power drain and least accurate
     * readings. @see Apple docs (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy)
     */
    desiredAccuracy?: number;
    /**
     * Stationary radius in meters. When stopped, the minimum distance the device
     * must move beyond the stationary location for aggressive background-tracking
     * to engage.
     */
    stationaryRadius: number;
    /**
     * When enabled, the plugin will emit sounds for life-cycle events of
     * background-geolocation! See debugging sounds table.
     */
    debug?: boolean;
    /**
     * The minimum distance (measured in meters) a device must move horizontally
     * before an update event is generated. @see Apple docs. (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter)
     */
    distanceFilter: number;
    /**
     * IOS, ANDROID ONLY
     * Enable this in order to force a stop() when the application terminated
     * (e.g. on iOS, double-tap home button, swipe away the app).o
     *
     * Defaults to true
     */
    stopOnTerminate?: boolean;
    /**

     * ANDROID ONLY

     * Start background service on device boot.

     *
     * Defaults to false

     */
    startOnBoot?: boolean;
    /**

     * ANDROID ONLY

     * If false location service will not be started in foreground and no notification will be shown.
     *
     * Defaults to true

     */
    startForeground?: boolean;
    /**
     * ANDROID ONLY
     * When using BackgroundGeolocation.LocationProvider.ANDROID_DISTANCE_FILTER_PROVIDER:
     * The minimum time interval between location updates in milliseconds.
     * @see Android docs (http://developer.android.com/reference/android/location/LocationManager.html#requestLocationUpdates(long,%20float,%20android.location.Criteria,%20android.app.PendingIntent))
     * and the MS doc (http://msdn.microsoft.com/en-us/library/windows/apps/windows.devices.geolocation.geolocator.reportinterval)
     * for more information
     * When using BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER:
     * Rate in milliseconds at which your app prefers to receive location updates.
     * @see Android docs (https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html#getInterval())
     */
    interval?: number;
    /**
     * ANDROID ONLY
     * Custom notification title in the drawer.
     */
    notificationTitle?: string;
    /**
     * ANDROID ONLY
     * Custom notification text in the drawer.
     */
    notificationText?: string;
    /**
     * ANDROID ONLY
     * The accent color to use for notification. Eg. #4CAF50.
     */
    notificationIconColor?: string;
    /**

     * ANDROID ONLY

     * The filename of a custom notification icon. See android quirks.

     * NOTE: Only available for API Level >=21.

     */
    notificationIconLarge?: string;
    /**

     * ANDROID ONLY

     * The filename of a custom notification icon. See android quirks.

     * NOTE: Only available for API Level >=21.

     */
    notificationIconSmall?: string;
    /**
     * ANDROID ONLY
     * Set location service provider @see wiki (https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers)
     */
    locationProvider?: number;
    /**
     * IOS ONLY
     * [AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
     * this affects iOS GPS algorithm. @see Apple docs for more information
     * (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType)
     */
    activityType?: string;
    /**

     * IOS ONLY

     * Pauses location updates when app is paused

     *
     * Defaults to true

     */
    pauseLocationUpdates?: boolean;
    /**

     * Server url where to send HTTP POST with recorded locations

     * @see https://github.com/mauron85/cordova-plugin-background-geolocation#http-locations-posting

     */
    url?: string;
    /**

     * Server url where to send fail to post locations

     * @see https://github.com/mauron85/cordova-plugin-background-geolocation#http-locations-posting

     */
    syncUrl?: string;
    /**
     * Specifies how many previously failed locations will be sent to server at once

     *
     * Defaults to 100

     */
    syncThreshold?: number;
    /**

     * Optional HTTP headers sent along in HTTP request

     */
    httpHeaders?: any;
    /**
     * IOS ONLY

     * Switch to less accurate significant changes and region monitory when in background (default)
     *
     * Defaults to 100

     */
    saveBatteryOnBackground?: boolean;
    /**

     * Limit maximum number of locations stored into db

     *
     * Defaults to 10000

     */
    maxLocations?: number;
    /**
     * ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER
     *
     * Fastest rate in milliseconds at which your app can handle location updates.
     * @see Android docs (https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html#getFastestInterval())
     */
    fastestInterval?: number;
    /**
     * ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER
     *
     * Rate in milliseconds at which activity recognition occurs. Larger values will result in fewer activity detections while improving battery life.
     */
    activitiesInterval?: number;
    /**
     * ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER
     *
     * stop() is forced, when the STILL activity is detected (default is true)
     */
    stopOnStillActivity?: boolean;
}

export class BackgroundGeolocationMock extends BackgroundGeolocation {
    /**

     * Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers

     *
     * Possible values:
     *  ANDROID_DISTANCE_FILTER_PROVIDER: 0,

     *  ANDROID_ACTIVITY_PROVIDER: 1

     *
     * @enum {number}

     */
    LocationProvider: any;
    /**
     * Desired accuracy in meters. Possible values [0, 10, 100, 1000].

     * The lower the number, the more power devoted to GeoLocation resulting in higher accuracy readings.

     * 1000 results in lowest power drain and least accurate readings.

     *
     * Possible values:
     *  HIGH: 0

     *  MEDIUM: 10

     *  LOW: 100

     *  PASSIVE: 1000
     *
     * enum {number}

     */
    Accuracy: any;
    /**

     * Used in the switchMode function

     *
     * Possible values:
     *  BACKGROUND: 0
     *  FOREGROUND: 1

     *
     * @enum {number}

     */
    Mode: any;
    /**
     * Configure the plugin.
     *
     * @param options {BackgroundGeolocationConfig} options An object of type Config
     * @return {Promise<any>}
     */
    configure(options: BackgroundGeolocationConfig): Promise<any> {
        return Observable.create((observer: Observer<any>) => {
            let response: BackgroundGeolocationResponse;
            observer.next( response  );
            observer.complete();
        });
    }
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     * @returns {Promise<any>}
     */
    start(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Turn OFF background-tracking
     * @returns {Promise<any>}
     */
    stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * @returns {Promise<any>}
     */
    finish(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * @param isMoving {boolean}
     * @returns {Promise<any>}
     */
    changePace(isMoving: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Setup configuration
     * @param options {BackgroundGeolocationConfig}
     * @returns {Promise<any>}
     */
    setConfig(options: BackgroundGeolocationConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Returns current stationaryLocation if available. null if not
     * @returns {Promise<Location>}
     */
    getStationaryLocation(): Promise<BackgroundGeolocationResponse> {
        let response: BackgroundGeolocationResponse;
        return new Promise((resolve, reject) => {
            resolve( response ) ;
        });
    }
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * @returns {Promise<any>}
     */
    onStationary(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     */
    isLocationEnabled(): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Display app settings to change permissions
     */
    showAppSettings(): void { }
    /**
     * Display device location settings
     */
    showLocationSettings(): void { }
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * @returns {Promise<boolean>}
     */
    watchLocationMode(): Observable<number> {
        return Observable.create((observer: Observer<any>) => {
            let response: number;
            observer.next( response  );
            observer.complete();
        });
    }
    /**
     * Stop watching for location mode changes.
     * @returns {Promise<any>}
     */
    stopWatchingLocationMode(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * @returns {Promise<any>}
     */
    getLocations(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**

     * Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.

     * @returns {Promise<any>}
     */
    getValidLocations(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete stored location by given locationId.
     * @param locationId {number}
     * @returns {Promise<any>}
     */
    deleteLocation(locationId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete all stored locations.
     * @returns {Promise<any>}
     */
    deleteAllLocations(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
     * Calling switchMode you can override plugin behavior and force plugin to switch into other mode.
     *
     * In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
     * In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.

     *
     * BackgroundGeolocation.Mode.FOREGROUND
     * BackgroundGeolocation.Mode.BACKGROUND

     **
     * @param modeId {number}
     * @returns {Promise<any>}
     */
    switchMode(modeId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**

     * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.

     * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.

     *
     * @param limit {number} Limits the number of entries

     * @returns {Promise<any>}
     */
    getLogEntries(limit: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
