import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';

export  class RegulaDocumentReaderMock extends RegulaDocumentReader {
    /**
     * Initialize the scanner
     * @param license {any} License data
     */
    initReader(license: any): void {};
    /**
     * Run the scanner
     * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
     */
    scanDocument(): Promise<string[]> {
        let response: Array<string> = [''];
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    };
}
