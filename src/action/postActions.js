import {SIGN_UP,LOGIN,LOGOUT,USERLOAD,SET_ALERT,AUTH_ERROR} from './types';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';


export const LoadUser=()=>dispatch=>{
    try {

        const token=localStorage.token;
    
        const decode=jwt_decode(token);

        dispatch({
            type:USERLOAD,
            payload:decode
        })
        
    } catch (error) {

        dispatch({
            type:AUTH_ERROR,
        })

    }
}

export const LogIn = ({ email , password }) => async dispatch => {  

    try{

        const swap=({
            email,
            password
            })
        
        const getSignUpData = await Axios.post("http://localhost:4000/login",swap);
        
        dispatch({
            type:LOGIN,
            payload:getSignUpData.data
        })

        dispatch(LoadUser());

    }catch(err){

        dispatch({
            type: SET_ALERT,
           })

    }
}


export const signUp=({first_name,last_name,email,password,address,dob,company})=>async dispatch=>{
    try {
        const swap=({
            first_name,
            last_name,
            email,
            password,
            address,
            dob,
            company
        })

        const getSignUpData=await Axios.post('http://localhost:4000/register',swap);

        dispatch({
            type:SIGN_UP,
            payload:getSignUpData.data
        })
        
    } catch (error) {
        dispatch({
            type:AUTH_ERROR,
        })
    }
        
}



export const logout = () => async (dispatch) => {

    dispatch({ type: LOGOUT });

}
