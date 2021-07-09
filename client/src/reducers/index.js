import {combineReducers} from 'redux';
import auth from './auth';
import files from './files';

export default combineReducers({auth, files});