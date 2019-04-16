import { combineReducers } from "redux";
import userLogin from './login/index';
export default combineReducers({
        userData: userLogin
});