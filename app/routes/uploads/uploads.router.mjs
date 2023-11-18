import Router from 'express';
import controller from './uploads.controller.mjs';
import { Routes } from '../../core/routes.mjs';
import authMiddleware from '../../middlewares/auth.middleware.mjs';
import { uploadMediaMiddleware } from '../../middlewares/upload-media.middleware.mjs';
import multer from 'multer';

const router = new Router();

const upload = multer({ dest: 'uploads/images' })

const reqImageField = 'image';

const { uploads } = Routes;

router.post(
    uploads.uploadImage,
    authMiddleware,
    upload.single(reqImageField),
    uploadMediaMiddleware,
    controller.uploadImage
);

export default router;