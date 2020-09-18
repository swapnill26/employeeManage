import React, { Fragment,useState} from 'react'
import PropTypes from 'prop-types';
import '../css/login.css';
import { Redirect,Link } from 'react-router-dom';

import {LogIn} from '../../action/postActions';
import { connect } from 'react-redux';


function Login({LogIn,isAuthenticate,msg}){

    const [ login , setLogin ] = useState({email:'',password:''});
    
    const { email , password } = login ;

    const onSubmit = async ( e ) => {
        e.preventDefault();

        LogIn({ email , password });
        
    }
    
    if(isAuthenticate){
        return <Redirect to="/profile" />;
    }
    
    const loginFail=(
        <div class="alert alert-danger">
            <strong>LogIn Failed</strong> {msg}.
        </div>
    )


    return (
        <Fragment> 
            <section  >
                <div className="container login ">
                    <div className="row ">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                             <div className="m-t-10">
                                {
                                   msg && msg ? loginFail : null
                                }
                             </div>   
                            <div className="title">LOG-IN</div>
                            <form onSubmit={e=>onSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={e=>setLogin({...login,[e.target.name]:e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={e=>setLogin({...login,[e.target.name]:e.target.value})}
                                    />
                                </div>
                                <input type="submit" className="btn btn-success" />
                                <Link to="/register">Create New Account</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

Login.propTypes = {
    LogIn:PropTypes.func.isRequired,
    msg:PropTypes.object.isRequired,
    isAuthenticate: PropTypes.bool
}
const mapStateToProps = state => ({
    msg:state.posts.msg,
    isAuthenticate: state.posts.isAuthenticate
  });

export default connect(mapStateToProps,{LogIn})(Login);