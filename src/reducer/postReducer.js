import {SIGN_UP, LOGIN,LOGOUT,USERLOAD,AUTH_ERROR,LOGIN_FAIL} from '../action/types';

const initialState={
    token: localStorage.getItem('token'),
    isAuthenticate: null,
    loading: true,
    isSignUp:null,
    user: []
}

export default function(state=initialState,action){
    
    switch(action.type){
        case USERLOAD:        
            return {
                ...state,
                isAuthenticate: true,
                loading: false,
                msg:null,
                user:action.payload
            }

        
        case LOGIN:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticate: true,
                loading: false,
                msg:null,
            }
        case SIGN_UP:
            return {
                ...state,   
                isAuthenticate: false,
                loading: true,
                msg:null,
            }

        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                loading : true
            }

        default:
            return state;
    }
}