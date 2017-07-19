import { HealthKit } from '@ionic-native/health-kit';

export interface HealthKitOptions {
    /**
    * HKWorkoutActivityType constant
    * Read more here: https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType
    */
    activityType?: string;
    /**
    * 'hour', 'week', 'year' or 'day', default 'day'
    */
    aggregation?: string;
    /**
    *
    */
    amount?: number;
    /**
    *
    */
    correlationType?: string;
    /**
    *
    */
    date?: any;
    /**
    *
    */
    distance?: number;
    /**
    * probably useful with the former param
    */
    distanceUnit?: string;
    /**
    * in seconds, optional, use either this or endDate
    */
    duration?: number;
    /**
    *
    */
    endDate?: any;
    /**
    *
    */
    energy?: number;
    /**
    * J|cal|kcal
    */
    energyUnit?: string;
    /**
    *
    */
    extraData?: any;
    /**
    *
    */
    metadata?: any;
    /**
    *
    */
    quantityType?: string;
    /**
    *
    */
    readTypes?: any;
    /**
    *
    */
    requestWritePermission?: boolean;
    /**
    *
    */
    samples?: any;
    /**
    *
    */
    sampleType?: string;
    /**
    *
    */
    startDate?: any;
    /**
    * m|cm|mm|in|ft
    */
    unit?: string;
    /**
    *
    */
    requestReadPermission?: boolean;
    /**
    *
    */
    writeTypes?: any;
}

export class HealthKitMock extends HealthKit {
    /**
   * Check if HealthKit is supported (iOS8+, not on iPad)
   * @returns {Promise<any>}
   */
    available(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Pass in a type and get back on of undetermined | denied | authorized
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    checkAuthStatus(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Ask some or all permissions up front
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    requestAuthorization(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Formatted as yyyy-MM-dd
   * @returns {Promise<any>}
   */
    readDateOfBirth(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Output = male|female|other|unknown
   * @returns {Promise<any>}
   */
    readGender(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown
   * @returns {Promise<any>}
   */
    readBloodType(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Output = I|II|III|IV|V|VI|unknown
   * @returns {Promise<any>}
   */
    readFitzpatrickSkinType(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveWeight(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    readWeight(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveHeight(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    readHeight(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   * no params yet, so this will return all workouts ever of any type
   * @returns {Promise<any>}
   */
    findWorkouts(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveWorkout(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    querySampleType(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    querySampleTypeAggregated(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    deleteSamples(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    monitorSampleType(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    sumQuantityType(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveQuantitySample(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveCorrelation(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    queryCorrelationType(options: HealthKitOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
