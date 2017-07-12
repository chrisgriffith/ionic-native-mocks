import { CouchbaseLite } from '@ionic-native/couchbase-lite';

export class CouchbaseLiteMock extends CouchbaseLite {
    /**
     * Get the database url
     * @return {Promise<any>} Returns a promise that resolves with the local database url
     */
    getURL(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}
