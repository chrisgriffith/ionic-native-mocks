import { SQLite } from '@ionic-native/sqlite/ngx';

export interface SQLiteDatabaseConfig {
    /**
     * Name of the database. Example: 'my.db'
     */
    name: string;
    /**
     * Location of the database. Example: 'default'
     */
    location?: string;
    /**
     * iOS Database Location. Example: 'Library'
     */
    iosDatabaseLocation?: string;
}

export declare class SQLiteObject {
    _objectInstance: any;
    constructor(_objectInstance: any);
    databaseFeatures: {
        isSQLitePluginDatabase: boolean;
    };
    openDBs: any;
    addTransaction(transaction: (tx: SQLiteTransaction) => void): void;
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    transaction(fn: any): Promise<any>;
    /**
     * @param fn {Function}
     * @returns {Promise<any>}
     */
    readTransaction(fn: (tx: SQLiteTransaction) => void): Promise<any>;
    startNextTransaction(): void;
    /**
     * @returns {Promise<any>}
     */
    open(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    close(): Promise<any>;
    /**
     * Execute SQL on the opened database. Note, you must call `create` first, and
     * ensure it resolved and successfully opened the database.
     */
    executeSql(statement: string, params: any): Promise<any>;
    /**
     * @param sqlStatements {Array<string | string[]>}
     * @returns {Promise<any>}
     */
    sqlBatch(sqlStatements: Array<string | string[]>): Promise<any>;
    abortallPendingTransactions(): void;
}

export interface SQLiteTransaction {
    start: () => void;
    executeSql: (sql: any, values: any, success: Function, error: Function) => void;
    addStatement: (sql: any, values: any, success: Function, error: Function) => void;
    handleStatementSuccess: (handler: Function, response: any) => void;
    handleStatementFailure: (handler: Function, response: any) => void;
    run: () => void;
    abort: (txFailure: any) => void;
    finish: () => void;
    abortFromQ: (sqlerror: any) => void;
}

export class SQLiteMock extends SQLite {
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config {SQLiteDatabaseConfig} database configuration
     * @return Promise<SQLiteObject>
     */
    create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
        let theResult: SQLiteObject;
        return new Promise((resolve, reject) => {
            resolve(theResult);
        });
    }
    /**
     * Verify that both the Javascript and native part of this plugin are installed in your application
     * @returns {Promise<any>}
     */
    echoTest(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Deletes a database
     * @param config {SQLiteDatabaseConfig} database configuration
     * @returns {Promise<any>}
     */
    deleteDatabase (config: SQLiteDatabaseConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

}
