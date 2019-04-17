import { USER_LOGIN } from '../actionTypes';
export const loginUser = (userData) => {
    console.log("In action", userData);
    return {
        type: USER_LOGIN,
        payload: userData
    }
}


