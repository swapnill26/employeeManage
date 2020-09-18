import { ADD_EMP, DELETE_EMP, UPDATE_EMP, LOAD_EMP,DATA_ERROR} from './types';
import Axios from 'axios';


export const LoadEmployee=()=>async dispatch=>{
    try { 
        const res=await Axios.get('http://localhost:4000/');

        dispatch({
            type:LOAD_EMP,
            payload:res.data
        })
        
    } catch (error) {

        dispatch({
            type:DATA_ERROR
        })
        
    }
}

export const AddEmployee=(first_name,last_name,address,dob,mobile,city)=>async dispatch=>{
    try {
        const AddEmployeeData=({
            first_name,last_name,address,dob,mobile,city
        })
    
        const res=await Axios.post('http://localhost:4000/addEmployee',AddEmployeeData)
        
        dispatch({
            type:ADD_EMP,
            payload:res.data
        })

        dispatch(LoadEmployee);
        
    } catch (error) {
        dispatch({
            type:DATA_ERROR
        })
        
    }
}

export const DeleteEmployee=(emp_id)=>async dispatch=>{
    try {
        const res=await Axios.post('http://localhost:4000/deleteEmp',emp_id)

        dispatch({
            type:DELETE_EMP,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:DATA_ERROR
        })
    }

}

export const UpdateEmployee=(emp_id , first_name , last_name , address , dob , mobile , city)=>async dispatch=>{
    try {

        const data=({
            emp_id , first_name , last_name , address , dob , mobile , city 
        })
        
        const res=await Axios.post('http://localhost:4000/updateEmp',data)
        
        dispatch({
            type:UPDATE_EMP,
            payload:res.data
        })

       

    } catch (error) {
        dispatch({
            type:DATA_ERROR
        })
    }
}