import { SQLitePorter } from '@ionic-native/sqlite-porter';

export class SQLitePorterMock extends SQLitePorter {
    /**
     * Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.
     * @param db {Object} Database object
     * @param sql {string} SQL statements to execute against the database
     * @return {Promise<any>}
     */
    importSqlToDb(db: any, sql: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Exports a SQLite DB as a set of SQL statements.
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    exportDbToSql(db: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.
     * @param db {Object} Database object
     * @param json {Object|string} JSON structure containing row data and/or table structure as either a JSON object or string
     * @return {Promise<any>}
     */
    importJsonToDb(db: any, json: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Exports a SQLite DB as a JSON structure
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    exportDbToJson(db: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
    /**
     * Wipes all data from a database by dropping all existing tables
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    wipeDb(db: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
