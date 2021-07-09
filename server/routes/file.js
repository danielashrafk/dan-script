import express from 'express';

import {convertVideo, uploadVideo, videoToAudio, optimiseVideo, transcribeVideo, uploadYoutubeVideo, youtubeToAudio, optimiseYoutube, checkVideo} from  '../controllers/file.js';

const router = express.Router();

    router.post('/convertVideo', convertVideo);
    router.post('/uploadVideo', uploadVideo);
    router.post('/videoToAudio', videoToAudio);
    router.post('/optimiseVideo', optimiseVideo);
    router.post('/transcribeVideo', transcribeVideo);
    router.post('/uploadYoutubeVideo', uploadYoutubeVideo);
    router.post('/youtubeToAudio', youtubeToAudio);
    router.post('/optimiseYoutube', optimiseYoutube);
    router.post('/checkVideo', checkVideo);
export default router;