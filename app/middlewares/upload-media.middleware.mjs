import { MulterError } from 'multer';
import ResponseBody from '../core/response-body.mjs';

export function uploadMediaMiddleware (err, req, res, next) {
    if (err instanceof MulterError) {
        const loadError = new ResponseBody(`field ${err.field} isnt correct`).error;
        return res.status(400).json(loadError);
    } else if (err) {
        return res.sendStatus(500);
    } else {
        next();
    }
}