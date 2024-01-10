import express from 'express';
import { fileRouter } from './modules/file/router.js';
import { streamVideoRouter } from './modules/stream-video/router.js';
 
const router = express.Router();

// middleware that is specific to this router
fileRouter(router);
streamVideoRouter(router);

export default router;