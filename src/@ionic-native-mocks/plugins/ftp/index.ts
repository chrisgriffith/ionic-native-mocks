import { FTP } from '@ionic-native/ftp/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

export class FTPMock extends FTP {
    /**
    * Connect to one ftp server.
    *
    * Just need to init the connection once. If success, you can do any ftp actions later.
    * @param hostname {string} The ftp server url. Like ip without protocol prefix, e.g. "192.168.1.1".
    * @param username {string} The ftp login username. If it and `password` are all blank/undefined, the default username "anonymous" is used.
    * @param password {string} The ftp login password. If it and `username` are all blank/undefined, the default password "anonymous@" is used.
    * @return {Promise<any>} The success callback. Notice: For iOS, if triggered, means `init` success, but NOT means the later action, e.g. `ls`... `download` will success!
    */
    connect(hostname: string, username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * List files (with info of `name`, `type`, `link`, `size`, `modifiedDate`) under one directory on the ftp server.
     * You can get one file's name using `fileList[x].name` (`x` is the location in array).
     *
     * Explain key:
     * - name: file name (utf-8).
     * - type: file type. number `0` means regular file, `1` means directory, `2` means symbolic link, `-1` means unknown type (maybe block dev, char dev...).
     * - link: if the file is a symbolic link, then this field store symbolic link information (utf-8), else it's a blank string.
     * - size: file size in bytes.
     * - modifiedDate: modified date of this file. date format is `yyyy-MM-dd HH:mm:ss zzz`, e.g "2015-12-01 20:45:00 GMT+8".
     *
     * @param path {string} The path on the ftp server. e.g. "/adf/123/".
     * @return {Promise<any>} Returns a promise
     */
    ls(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Create one directory on the ftp server.
     *
     * @param path {string} The path on the ftp server. e.g. "/adf/123/".
     * @return {Promise<any>} Returns a promise
     */
    mkdir(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete one directory on the ftp server.
     *
     * Tip: As many ftp server could not rm dir when it's not empty, so rm all files under the dir at first is recommended.
     *
     * @param path {string} The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
     * @return {Promise<any>} Returns a promise
     */
    rmdir(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete one file on the ftp server.
     *
     * @param file {string} The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
     * @return {Promise<any>} Returns a promise
     */
    rm(file: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Upload one local file to the ftp server.
     *
     * @param localFile {string} The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
     * @param remoteFile {string} The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
     * @return {Promise<any>} Returns a promise.
     *                        It will be triggered many times according the file's size.
     *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
     */
    upload(localFile: string, remoteFile: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Download one remote file on the ftp server to local path.
     *
     * @param localFile {string} The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
     * @param remoteFile {string} The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
     * @return {Promise<any>} Returns a promise.
     *                        It will be triggered many times according the file's size.
     *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
     */
    download(localFile: string, remoteFile: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next('');
            observer.complete();
        });
    }
    /**
     * Cancel all requests. Always success.
     *
     * @return {Promise<any>} Returns a promise
     */
    cancel(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Disconnect from ftp server.
     *
     * @return {Promise<any>} Returns a promise
     */
    disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
