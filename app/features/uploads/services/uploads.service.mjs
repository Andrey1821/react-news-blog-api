import fs from 'fs';
import UploadsProviderService from './uploads-provider.service.mjs';

export default class UploadsService {
    static async uploadImage(file) {
        const buffer = fs.readFileSync(file.path);
        const imageUrl = await UploadsProviderService.uploadImage(buffer, file.mimetype, file.originalname);
        await fs.unlink(file.path, () => {});
        return imageUrl;
    }
}