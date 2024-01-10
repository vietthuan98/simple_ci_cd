import { streamVideo } from './controller.js';

export const streamVideoRouter = (router) => {
    router.get('/stream-video', streamVideo);
}