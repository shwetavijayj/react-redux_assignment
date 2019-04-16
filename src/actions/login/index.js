import { USER_LOGIN } from '../actionTypes';
export const loginUser =(userData)=>{
    return {
        type:USER_LOGIN,
        payload:userData
    }
}


