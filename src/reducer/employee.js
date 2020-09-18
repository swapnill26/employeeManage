import { ADD_EMP, UPDATE_EMP, DELETE_EMP, LOAD_EMP, DATA_ERROR } from '../action/types';

const initialState={
    isDataAdded:false,
    loading: true,
    employee:[],

}

export default function(state=initialState,action){

    switch(action.type){
        case LOAD_EMP:
            return{
                ...state,
                loading:false,
                employee:action.payload
            }
        
        case ADD_EMP:
        case UPDATE_EMP:
        case DELETE_EMP:
            return{
                ...state,
                loading:false,
                isDataAdded:true,
                employee:action.payload
            }
        case DATA_ERROR:
            return{
                ...state,
                loading:true,
            }
        default:
            return state;
    }
}