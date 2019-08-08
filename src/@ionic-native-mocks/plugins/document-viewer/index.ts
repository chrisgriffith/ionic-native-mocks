import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

export interface DocumentViewerOptions {
    title?: string;
    documentView?: {
        closeLabel: string;
    };
    navigationView?: {
        closeLabel: string;
    };
    email?: {
        enabled: boolean;
    };
    print?: {
        enabled: boolean;
    };
    openWith?: {
        enabled: boolean;
    };
    bookmarks?: {
        enabled: boolean;
    };
    search?: {
        enabled: boolean;
    };
    autoClose?: {
        onPause: boolean;
    };
}

export class DocumentViewerMock extends DocumentViewer {
    /**
     * Displays the email composer pre-filled with data.
     *
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    getSupportInfo(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Check if the document can be shown
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {Array<DocumentViewerOptions>} options
     * @param [onPossible] {Function}
     * @param [onMissingApp] {Function}
     * @param [onImpossible] {Function}
     * @param [onError] {Function}
     */
    canViewDocument(url: string, contentType: string, options: DocumentViewerOptions, onPossible?: Function, onMissingApp?: Function, onImpossible?: Function, onError?: Function): void { }
    /**
     * Opens the file
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {DocumentViewerOptions} options
     * @param [onShow] {Function}
     * @param [onClose] {Function}
     * @param [onMissingApp] {Function}
     * @param [onError] {Function}
     */
    viewDocument(url: string, contentType: string, options: DocumentViewerOptions, onShow?: Function, onClose?: Function, onMissingApp?: Function, onError?: Function): void { }
}
