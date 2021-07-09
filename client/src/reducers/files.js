import {CREATE, FETCH_ALL, DELETE, UPDATE, CONVERT, UPLOAD} from '../constants/actionTypes';
export default (files = [], action) => {

    switch(action.type){

        case CONVERT:
            
            return action.payload;

        case UPLOAD:
            
                return action.payload;

        default:
            return files;

        

    }

    

}
