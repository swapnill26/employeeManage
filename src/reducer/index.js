import { combineReducers } from "redux";
import postReducer from './postReducer';
import employee from './employee';


export default combineReducers({
    posts:postReducer,
    emp:employee
});