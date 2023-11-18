import Router from 'express';
import controller from './news-posts.controller.mjs';
import { Routes } from '../../core/routes.mjs';
import authMiddleware from '../../middlewares/auth.middleware.mjs';

const router = new Router();

const { newsPosts } = Routes;

router.get('', controller.getPosts);
router.get(newsPosts.newsId, controller.getPost);
router.put(newsPosts.newsId, authMiddleware, controller.editPost);
router.delete(newsPosts.newsId, authMiddleware, controller.deletePost);
router.post('', authMiddleware, controller.createPost);

export default router;