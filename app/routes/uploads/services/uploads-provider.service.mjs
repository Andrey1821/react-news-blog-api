import * as Bytescale from '@bytescale/sdk';
import nodeFetch from 'node-fetch';
import { config } from 'dotenv';
config();

const uploadManager = new Bytescale.UploadManager({
    fetchApi: nodeFetch,
    apiKey: process.env.IMG_SERVICE_API_KEY
});

export default class UploadsProviderService {
    static async uploadImage(buffer, mime, fileName) {
        return uploadManager
            .upload({
                data: buffer,
                originalFileName: fileName,
                mime
            })
            .then(
                ({ fileUrl, filePath }) => {
                    return fileUrl;
                },
                error => error
            );
    }
}