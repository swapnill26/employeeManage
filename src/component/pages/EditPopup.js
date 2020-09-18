import React,{Fragment,useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'; 

import PropTypes from 'prop-types'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { DeleteEmployee, UpdateEmployee } from '../../action/employee';



const EditPopup=({ DeleteEmployee, UpdateEmployee ,emp ,isDataAdded } )=> {

     const [employee,setEmployee]=useState({emp_id:'',first_name:'',last_name:'',address:'',dob:'',mobile:'',city:''});

     const {emp_id , first_name , last_name , address , dob , mobile , city }=employee;
     
     
     useEffect(()=>{
         setEmployee({
            emp_id:emp.emp_id,
            first_name:emp.emp_firstname,
            last_name:emp.emp_lastname,
            address:emp.emp_address,
            dob:emp.emp_dob,
            mobile:emp.emp_mobile,
            city:emp.emp_city
            })
     },[emp])
    
     const onUpdate=()=>{
         UpdateEmployee(emp_id , first_name , last_name , address , dob , mobile , city)
     }
      
    const onDelete=()=>{
        let conf= window.confirm("You want to delete This record");
        if(conf===true){
         DeleteEmployee({emp_id})
        }
    }
    

    return (
        <Fragment>
        <div className="container">
                <Popup trigger={<button  className="btn btn-primary">Edit Employee</button>} position="bottom right">
                    <div className="title">Add New Employee Here !</div>
                    <form >
                    <div className="row">
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="email">First name</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter first_name"
                                value={first_name}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="email">Last Name</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter last_name"
                                value={last_name}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="email">Address</label>
                                <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="DOB">DOB</label>
                                <input type="date"
                                className="form-control"
                                name="DOB"
                                value={dob}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="email">Mobile</label>
                                <input type="number"
                                className="form-control"
                                name="mobile"
                                placeholder="Enter Mobile Number"
                                value={mobile}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label htmlFor="email">City</label>
                                <input type="text"
                                className="form-control"
                                name="city"
                                placeholder="Enter your City"
                                value={city}
                                onChange={(e)=>setEmployee({...employee,[e.target.name]:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <button className="btn btn-primary" onClick={onUpdate} >Update</button>
                        </div>
                        <div className="col-xl-6 col-ls-6 col-md-6 col-sm-6 col-12">
                            <button className="btn btn-primary" onClick={onDelete}>Delete</button>
                        </div>
                    </div>
                    </form>
                </Popup>
            </div>
        </Fragment>
    )
}

EditPopup.propTypes = {
    UpdateEmployee:PropTypes.func.isRequired,
    DeleteEmployee:PropTypes.func.isRequired,
    isDataAdded:PropTypes.bool,
}
const mapStateToProp=state=>({
    isDataAdded:state.loading
})


export default connect(mapStateToProp,{UpdateEmployee,DeleteEmployee})(withRouter(EditPopup))