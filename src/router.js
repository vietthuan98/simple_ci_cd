import express from 'express';
import { fileRouter } from './modules/file/router.js';

const router = express.Router()

// middleware that is specific to this router
fileRouter(router);

export default router;