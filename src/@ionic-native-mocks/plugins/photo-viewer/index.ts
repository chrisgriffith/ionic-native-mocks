import { PhotoViewer } from '@ionic-native/photo-viewer';

export class PhotoViewerMock extends PhotoViewer {
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     */
    show(url: string, title?: string, options?: {
        share?: boolean;
    }): void {};
}
