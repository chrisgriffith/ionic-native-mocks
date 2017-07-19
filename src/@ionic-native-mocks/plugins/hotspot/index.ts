import { Hotspot } from '@ionic-native/hotspot';

export interface HotspotConnectionInfo {
    /**
     *      The service set identifier (SSID) of the current 802.11 network.
     */
    SSID: string;
    /**
     *      The basic service set identifier (BSSID) of the current access point.
     */
    BSSID: string;
    /**
     *      The current link speed in Mbps
     */
    linkSpeed: string;
    /**
     *      The IP Address
     */
    IPAddress: string;
    /**
     *      Each configured network has a unique small integer ID, used to identify the network when performing operations on the supplicant.
     */
    networkID: string;
}
export interface HotspotNetwork {
    /**
     *      Human readable network name
     */
    SSID: string;
    /**
     *      MAC Address of the access point
     */
    BSSID: string;
    /**
     *      The primary 20 MHz frequency (in MHz) of the channel over which the client is communicating with the access point.
     */
    frequency: number;
    /**
     *      The detected signal level in dBm, also known as the RSSI.
     */
    level: number;
    /**
     *      Timestamp in microseconds (since boot) when this result was last seen.
     */
    timestamp: number;
    /**
     *      Describes the authentication, key management, and encryption schemes supported by the access point.
     */
    capabilities: string;
}
export interface HotspotNetworkConfig {
    /**
     *   Device IP Address
     */
    deviceIPAddress: string;
    /**
     *   Device MAC Address
     */
    deviceMacAddress: string;
    /**
     *   Gateway IP Address
     */
    gatewayIPAddress: string;
    /**
     *   Gateway MAC Address
     */
    gatewayMacAddress: string;
}
export interface HotspotDevice {
    /**
     *      Hotspot IP Address
     */
    ip: string;
    /**
     *      Hotspot MAC Address
     */
    mac: string;
}

export class HotspotMock extends Hotspot {
    /**
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    toggleWifi(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<any>}        - Promise to call once hotspot is started, or reject upon failure
     */
    createHotspot(ssid: string, mode: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Turns on Access Point
     *
     * @returns {Promise<boolean>} - true if AP is started
     */
    startHotspot(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<any>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    configureHotspot(ssid: string, mode: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Turns off Access Point
     *
     * @returns {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    stopHotspot(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Checks if hotspot is enabled
     *
     * @returns {Promise<any>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    isHotspotEnabled(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * @returns {Promise<Array<HotspotDevice>>}
     */
    getAllHotspotDevices(): Promise<Array<HotspotDevice>> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Connect to a WiFi network
     *
     * @param {string}    ssid
     *      SSID to connect
     * @param {string}    password
     *      password to use
     *
     * @returns {Promise<any>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    connectToWifi(ssid: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Connect to a WiFi network
     *
     * @param {string}   ssid
     *      SSID to connect
     * @param {string}   password
     *      Password to use
     * @param {string}   authentication
     *      Authentication modes to use (LEAP, SHARED, OPEN)
     * @param {string[]} encryption
     *      Encryption modes to use (CCMP, TKIP, WEP104, WEP40)
     *
     * @returns {Promise<any>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    connectToWifiAuthEncrypt(ssid: string, password: string, authentication: string, encryption: Array<string>): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Add a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     * @param {string}    mode
     *      Authentication mode of (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password
     *      Password for network
     *
     * @returns {Promise<any>}
     *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
     */
    addWifiNetwork(ssid: string, mode: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @returns {Promise<any>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    removeWifiNetwork(ssid: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    isConnectedToInternet(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    isConnectedToInternetViaWifi(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    isWifiOn(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    isWifiSupported(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<boolean>}
     */
    isWifiDirectSupported(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    scanWifi(): Promise<Array<HotspotNetwork>> {
        let response: Array<HotspotNetwork>;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    scanWifiByLevel(): Promise<Array<HotspotNetwork>> {
        let response: Array<HotspotNetwork>;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * @returns {Promise<any>}
     */
    startWifiPeriodicallyScan(interval: number, duration: number): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * @returns {Promise<any>}
     */
    stopWifiPeriodicallyScan(): Promise<any> {
       return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * @returns {Promise<HotspotNetworkConfig>}
     */
    getNetConfig(): Promise<HotspotNetworkConfig> {
        let response: HotspotNetworkConfig;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * @returns {Promise<HotspotConnectionInfo>}
     */
    getConnectionInfo(): Promise<HotspotConnectionInfo> {
        let response: HotspotConnectionInfo;
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
    /**
     * @returns {Promise<string>}
     */
    pingHost(ip: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @returns {Promise<string>}  - A Promise for the MAC Address
     */
    getMacAddressOfHost(ip: string): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('');
        });
    };
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    isDnsLive(ip: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    isPortLive(ip: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
    /**
     * Checks if device is rooted
     *
     * @returns {Promise<boolean>} - A Promise for whether the device is rooted
     */
    isRooted(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    };
}
