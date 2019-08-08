import { Httpd } from '@ionic-native/httpd/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export interface HttpdOptions {
    /**
     * The public root directory for your web server. This path is relative to your app's www directory.
     * Default is current directory.
     */
    www_root?: string;
    /**
     * The port number to use.
     * Default is 8888
     */
    port?: number;
    /**
     * Setting this option to false will allow remote access to your web server (over any IP).
     * Default is false.
     */
    localhost_only?: boolean;
}

export class HttpdMock extends Httpd {
    /**
     * Starts a web server.
     * @param options {HttpdOptions}
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     */
    startServer(options?: HttpdOptions): Observable<string> {
        let response: string;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    }
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    getUrl(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    getLocalPath(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
