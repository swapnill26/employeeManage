import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
//import {Redirect} from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/AddPopUp.css';

import {AddEmployee} from '../../action/employee';
import { connect } from 'react-redux';

function PopUp({AddEmployee,loading}) {

    const [employee,setEmployee]=useState({emp_id:'',first_name:'',last_name:'',address:'',dob:'',mobile:'',city:''});

    const {first_name,last_name,address,dob,mobile,city}=employee;

    const Submit=()=>{
        AddEmployee(first_name,last_name,address,dob,mobile,city)
    }
    

    return (
        <Fragment>
            <div className="popup">
                <Popup trigger={<button  className="btn btn-primary">Add Employee</button>}>
                    <div className="title">Add New Employee Here !</div>
                     <form> 
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
                            <button className="btn btn-primary" onClick={Submit} >ADD Employee</button>
                        </div>
                    </div>
                     </form> 
                </Popup>
            </div>
        </Fragment>
    )
}

PopUp.prototype={
    AddEmployee:PropTypes.func.isRequired,
    loading:PropTypes.bool,
}

const mapStateToProp=state=>({
    loading:state.loading
})

export default connect(mapStateToProp,{AddEmployee})(PopUp)