import { uploadFile } from './controller.js';

export const fileRouter = (router) => {
    router.post('/file', uploadFile);
}