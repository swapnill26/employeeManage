import React,{useEffect, Fragment}from 'react'
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import {LoadUser} from '../../action/postActions'
import {LoadEmployee} from '../../action/employee';
import { connect } from 'react-redux';
import Employee from './Employee';

function Profile({LoadUser,loading,LoadEmployee}) {

    useEffect(() => {
        LoadUser();
       LoadEmployee();
    }, [LoadUser,LoadEmployee]);

    if(!localStorage.token){
        return <Redirect to="/"/>
    }

    if(loading){
        return <Redirect to="/"/>
    }

    return (
        <Fragment>
            <Employee/>
        </Fragment>
    )
}

Profile.propTypes = {
    LoadUser:PropTypes.func.isRequired,
    loading:PropTypes.bool,
   // user:PropTypes.object.isRequired,
    
}

const mapStateToProps=state=>({
    loading:state.posts.loading,
   // user:state.posts.user,
    
})

export default connect(mapStateToProps,{LoadUser,LoadEmployee})(Profile);