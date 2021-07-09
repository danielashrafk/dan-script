import axios from 'axios';
// const API = axios.create({baseURL: 'https://daniel-bachelor-backend.herokuapp.com'});
const API = axios.create({baseURL: 'http://localhost:5000'});
export const convertVideo = (file) => API.post('/file/convertVideo', file, {
    headers: {
        'Content-Type' : 'multipart/form-data'
        
    }
});

export const uploadVideo = (file, setUploadProgress) => API.post('/file/uploadVideo', file, {
    
    headers: {
        'Content-Type' : 'multipart/form-data'
        
    }, 
    onUploadProgress : progressEvent => {
        setUploadProgress(parseInt(Math.round((100 * progressEvent.loaded) / progressEvent.total)));
        
      }
});

export const videoToAudio = (uniqueName) => API.post('/file/videoToAudio',uniqueName);
export const optimiseVideo = (uniqueName) => API.post('/file/optimiseVideo',uniqueName);
export const transcribeVideo = (uniqueParts, language, channel) => API.post('/file/transcribeVideo',uniqueParts, language, channel);
export const uploadYoutubeVideo = (url) => API.post('/file/uploadYoutubeVideo',url);
export const youtubeToAudio = (url) => API.post('/file/youtubeToAudio',url);
export const optimiseYoutube = (uniqueName) => API.post('/file/optimiseYoutube',uniqueName);
export const checkVideo = (url) => API.post('/file/checkVideo',url);