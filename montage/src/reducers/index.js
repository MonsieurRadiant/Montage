import { combineReducers } from 'redux';
import navbar from "./navbar";
import upload from "./upload";
import profile from "./profile";

const rootReducer = combineReducers({
    navbar,
    upload,
    profile
});

export default rootReducer;
