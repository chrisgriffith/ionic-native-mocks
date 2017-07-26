import { Stepcounter } from '@ionic-native/stepcounter';

export class StepcounterMock extends Stepcounter {
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @returns {Promise<any | number>} Returns a Promise that resolves on success or rejects on failure
     */
    start(startingOffset: number): Promise<number | any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Stop the step counter
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    stop(): Promise<number | any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    getTodayStepCount(): Promise<number | any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the amount of steps since the start command has been called
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    getStepCount(): Promise<number | any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @returns {Promise<any | boolean>} Returns a Promise that resolves on success, or rejects on failure
     */
    deviceCanCountSteps(): Promise<boolean | any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Get the step history (JavaScript object)
     * @returns {Promise<any>} Returns a Promise that resolves on success, or rejects on failure
     */
    getHistory(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
