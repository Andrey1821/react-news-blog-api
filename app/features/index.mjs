import Router from 'express';
import mediaRouter from './uploads/uploads.router.mjs';
import authRouter from './auth/auth.router.mjs';
import newsPostsRouter from './news-posts/news-posts.router.mjs';
import { Routes } from '../core/routes.mjs';
const router = new Router();

const {auth, uploads, newsPosts} = Routes;

router.use(auth.main, authRouter);
router.use(uploads.main, mediaRouter);
router.use(newsPosts.main, newsPostsRouter);

export default router;