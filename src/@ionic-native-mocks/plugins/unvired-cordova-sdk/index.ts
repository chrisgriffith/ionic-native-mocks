import { UnviredCordovaSDK, LoginResult, LoginListenerType, LoginParameters, DbResult, ResultType, NotifResult, UnviredResult, NotificationListenerType } from '@ionic-native/unvired-cordova-sdk/ngx';
import { Observable } from 'rxjs';

export class UnviredCordovaSDKMock extends UnviredCordovaSDK {

    logDebug(sourceClass: string, method: string, message: string): Promise<any> {
        console.log("DEBUG | " + sourceClass + " | " + method + " | " + message);
        return new Promise( (resolve) => {
            resolve()
        })
    }
    logError(sourceClass: string, method: string, message: string): Promise<any> {
        console.log("ERROR | " + sourceClass + " | " + method + " | " + message);
        return new Promise( (resolve) => {
            resolve()
        })
    }
    logInfo(sourceClass: string, method: string, message: string): Promise<any> {
        console.log("IMPORTANT | " + sourceClass + " | " + method + " | " + message);
        return new Promise( (resolve) => {
            resolve()
        })
    }
    logRead(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    logDelete(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    sendLogToServer(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    sendLogViaEmail(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    /**
     * This api initiatilizes the Unvired Application.
     * @param loginParameters
     */
    login(loginParameters: LoginParameters): Promise<LoginResult> {
        return new Promise( (resolve) => {
            let loginResult = new LoginResult()
            loginResult.type = LoginListenerType.auth_activation_required
            resolve(loginResult)
        })
    }
    logout(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    /**
     * Authenticates & activates the app against UMP
     * @param loginParameters Send username & Password through loginParameters
     */
    authenticateAndActivate(loginParameters: LoginParameters): Promise<LoginResult> {
        return new Promise( (resolve) => {
            let loginResult = new LoginResult()
            loginResult.type = LoginListenerType.auth_activation_success
            resolve(loginResult)
        })
    }
    /**
     * Authenticates the user against the locally saved username & password.
     * For ADS Login, authentication is performed with the ADS Server.
     * @param loginParameters Send username & Password through loginParameters
     */
    authenticateLocal(loginParameters: LoginParameters): Promise<LoginResult> {
        return new Promise( (resolve) => {
            let loginResult = new LoginResult()
            loginResult.type = LoginListenerType.login_success
            resolve(loginResult)
        })
    }
    getAllAccounts(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    switchAccount(account: any): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    deleteAccount(account: any): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    getInfoMessages(headerName: string, lid: string): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    showSettings(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    userSettings(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    updateSystemCredentials(credentials: any): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    getSystemCredentials(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    getVersionNumbers(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    clearData(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    hasInternet(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    dbSelect(tableName: string, whereClause: string): Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbInsert(tableName: string, structureObject: any, isHeader: boolean) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbInsertOrUpdate(tableName: string, structureObject: any, isHeader: boolean) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbDelete(tableName: string, whereClause: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbUpdate(tableName: string, updatedObject: any, whereClause: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbExecuteStatement(query: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbCreateSavePoint(savePoint: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbReleaseSavePoint(savePoint: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbRollbackToSavePoint(savePoint: string) : Promise<DbResult> {
        return new Promise( (resolve) => {
            let dbResult = new DbResult()
            dbResult.type = ResultType.success
            resolve(dbResult)
        })
    }
    dbBeginTransaction(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    dbEndTransaction(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    launchFile(filePath: string): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    launchBase64(base64string: string, fileName: string, extension: string): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    unzip(srcPath: string, destPath: string): void {

    }

    getAttachmentFolderPath(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    createAttachmentItem(tableName: string, structureObject: any): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    uploadAttachment(tableName: string, structureObject: any, isAsync: boolean): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    downloadAttachment(tableName: string, structureObject: any): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    syncForeground(reqype: any, header: any, customData: any, paFunction: string, autoSave: boolean): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    syncBackground(reqype: any, header: any, customData: any, paFunction: string, beName: string, belid: string, bypassAttachment: boolean): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    getMessages(): void {

    }
    registerNotifListener(): Observable<NotifResult> {
        let observable = new Observable<NotifResult>(observer => {
            let notifResult = new NotifResult()
            notifResult.type = NotificationListenerType.dataReceived
            observer.next(notifResult);
        });
        return observable;
    }
    unRegisterNotifListener(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    isInOutBox(beLid: string): Promise<UnviredResult> {
        return new Promise( (resolve) => {
            let result = new UnviredResult()
            result.type = 0
            resolve(result)
        })
    }
    outBoxItemCount(): Promise<string> {
        return new Promise( (resolve) => {
            resolve("0")
        })
    }
    isInSentItem(beLid: string): Promise<UnviredResult> {
        return new Promise( (resolve) => {
            let result = new UnviredResult()
            result.type = 0
            resolve(result)
        })
    }
    sentItemCount(): Promise<string> {
        return new Promise( (resolve) => {
            resolve("0")
        })
    }
    inBoxItemCount(): Promise<string> {
        return new Promise( (resolve) => {
            resolve("0")
        })
    }
    deleteOutBoxEntry(beLid: string): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
    resetApplicationSyncData(): Promise<any> {
        return new Promise( (resolve) => {
            resolve()
        })
    }
}