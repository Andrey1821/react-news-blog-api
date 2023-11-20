import Router from 'express';
import controller from './auth.controller.mjs';
import { Routes } from '../../core/routes.mjs';

const router = new Router();

const { auth } = Routes;

router.post(auth.login, controller.login);

export default router;
