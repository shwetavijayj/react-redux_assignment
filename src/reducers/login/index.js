import { USER_LOGIN } from '../../actions/actionTypes';
const initialState = {

}

function userLogin(state= initialState,action){
    switch(action.type){
        case USER_LOGIN:
        let data=action.payload;
        return{
            ...state,
            user:data
        }
        default:
        return state;
    }
}

export default userLogin;