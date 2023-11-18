import jwt from 'jsonwebtoken';
import ResponseBody from '../core/response-body.mjs';

const unauthorizedError = new ResponseBody('Unauthorized').error;

export default function (req, res, next) {
    if(req.method === 'OPTIONS') {
        next();
    }
    
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(403).json(unauthorizedError);
        }

        req.editor = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        return res.status(403).json(unauthorizedError);
    }
}