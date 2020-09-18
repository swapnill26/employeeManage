import React, { Fragment,useEffect } from 'react'
import PropTypes from 'prop-types';
import {LoadEmployee} from '../../action/employee';
import { connect } from 'react-redux';
import Popup from './Popup';
import '../css/employee.css'
import EditPopup from './EditPopup';





const Employee=({LoadEmployee,emp})=> {

    useEffect(()=>{
        LoadEmployee()
    },[LoadEmployee])

    
   
    return (
        <Fragment>
            <div className="container">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <table className="table"  >
                        <thead>
                            <tr>
                                <th scope="col">emp_id</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">City</th>
                                <th scope="col">
                                    <Popup/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emp.employee.length>0  && emp.employee.map((emp,index)=>
                                    (
                                        <tr key={index}>
                                            <th scope="row">{emp.emp_id}</th>
                                            <td>{emp.emp_firstname}  {emp.emp_lastname}</td>
                                            <td>{emp.emp_address}</td>
                                            <td>{emp.emp_dob}</td>
                                            <td>{emp.emp_mobile}</td>
                                            <td>{emp.emp_city}</td>
                                            <td>
                                                <EditPopup 
                                                emp={emp}
                                                index={index}
                                                />
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

Employee.propTypes = {
    LoadEmployee:PropTypes.func.isRequired,
    loading:PropTypes.bool,
}
const mapStateToProp=state=>({
    emp:state.emp,
    loading:state.loading
})

export default connect(mapStateToProp,{LoadEmployee})(Employee)

