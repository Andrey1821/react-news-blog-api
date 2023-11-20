import ResponseBody from '../../core/response-body.mjs';
import UploadsService from './services/uploads.service.mjs';

const uploadError = new ResponseBody('Something went wrong').error;

export class UploadsController {
    async uploadImage(req, res) {
        try {
            const file = req.file;
            const imageUrl = await UploadsService.uploadImage(file);
            const resData = new ResponseBody({ imageUrl }).data;

            return res.status(200).json(resData);
        } catch (e) {
            return res.status(500).json(uploadError);
        }
    }
}

export default new UploadsController();