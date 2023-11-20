import express from 'express';
import mongoose from 'mongoose';
import createSeeds from './seeds.mjs';
import { config } from 'dotenv';
import { Routes } from './core/routes.mjs';
import Router from './features/index.mjs';
config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(Routes.api, Router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        createSeeds();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();