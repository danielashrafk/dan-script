import * as api from '../api';
import {CREATE, FETCH_ALL, DELETE, UPDATE, CONVERT, UPLOAD} from '../constants/actionTypes';

export const convertVideo = (formData) => async(dispatch) => {


    try{
        
        
        const {data} = await api.convertVideo(formData);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};

export const uploadVideo = (formData, setUploadProgress) => async(dispatch) => {


    try{
        
        
        const {data} = await api.uploadVideo(formData, setUploadProgress);
        await dispatch({type: UPLOAD, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};

export const videoToAudio = (uniqueName) => async(dispatch) => {


    try{
        
        
        const {data} = await api.videoToAudio(uniqueName);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};

export const optimiseVideo = (uniqueName) => async(dispatch) => {


    try{
        
        
        const {data} = await api.optimiseVideo(uniqueName);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};

export const transcribeVideo = (uniqueParts, language, channel) => async(dispatch) => {


    try{
        
        
        const {data} = await api.transcribeVideo(uniqueParts, language, channel);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};


export const uploadYoutubeVideo = (url) => async(dispatch) => {


    try{
        
        
        const {data} = await api.uploadYoutubeVideo(url);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};

export const youtubeToAudio = (url) => async(dispatch) => {


    try{
        
        
        const {data} = await api.youtubeToAudio(url);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};


export const optimiseYoutube = (uniqueName) => async(dispatch) => {


    try{
        
        
        const {data} = await api.optimiseYoutube(uniqueName);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};


export const checkVideo = (url) => async(dispatch) => {


    try{
        
        
        const {data} = await api.checkVideo(url);
        await dispatch({type: CONVERT, payload:data});
        
        return data;
        
        
        


    } catch(error){
        // console.log(error);
        return(error.response.data);

    }




};
