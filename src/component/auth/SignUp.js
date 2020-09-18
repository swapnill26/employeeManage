import * as React from 'react';
import  {Fragment,useState} from 'react';
import PropTypes from 'prop-types'

import { Redirect, withRouter } from 'react-router-dom';

import { signUp } from '../../action/postActions';
import { connect } from 'react-redux';
import '../css/signup.css';

function SignUpManager({ signUp,msg}) {

    const [ userRegister , setRegister]=useState({first_name:'',last_name:'',email:'',password:'',address:'',dob:'',company:''});
    
    const { first_name, last_name, email, password, address, dob, company } =userRegister;

    const Submit=async (e)=>{
        e.preventDefault();
        signUp({ first_name, last_name, email, password, address, dob, company})
            return <Redirect to='/'/>
    }

    const loginSuccess=(
        <div class="alert alert-success">
            <strong>{msg}</strong> .
        </div>
    )

    return (
        <Fragment className="main">              
                <div className="container row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-12">
                        <img src={require("../images/mindbowser-logo-2.svg")} alt="logo" />
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-12">
                        <div className="main2">
                            <div className="card-title">Sign-Up</div>
                            <div className="m-t-10">
                                {
                                   msg && msg ? loginSuccess : null
                                }
                             </div>
                            <form onSubmit={e=>Submit(e)}>
                                <div className="container">
                                    <div className="form-group row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                                            <label htmlFor="">First Name</label>
                                            <input type="text"
                                            className="form-control"
                                            name="first_name"
                                            placeholder="Enter first Name"
                                            value={first_name}
                                            onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                            required
                                            />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="text"
                                            className="form-control"
                                            name="last_name"
                                            placeholder="Enter Last Name"
                                            value={last_name}
                                            onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                            required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                            required
                                            />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                                            <label htmlFor="Password">Password</label>
                                            <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                            required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text"
                                        className="form-control"
                                        name="address"
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                        required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dob">DOB</label>
                                        <input type="date"
                                        className="form-control"
                                        name="dob"
                                        placeholder="Enter DOB"
                                        value={dob}
                                        onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                    
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input type="text"
                                        className="form-control"
                                        name="company"
                                        placeholder="Enter Company"
                                        value={company}
                                        onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                        required
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-primary"/>
                                </div>
                               
                            </form>
                        </div>
                     </div>
                </div>
        </Fragment>
    )
}

SignUpManager.propTypes = {
    signUp:PropTypes.func.isRequired,
    msg:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    msg:state.posts.msg,
  });

export default connect(mapStateToProps,{signUp})(SignUpManager);

