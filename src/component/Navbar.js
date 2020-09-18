import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../action/postActions';
import { connect } from 'react-redux';

function Navbar({posts:{isAuthenticate,loading},logout}){
    const authLink =(
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link " href="#!"  onClick={logout}><i className='fas fa-sign-out-alt' />{' '}Logout</a>
            </li>
        </ul>
       );
    const guestLink = ( 
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>    
        </ul>
        );
    return(
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="/">
                    <img src={require("./images/mindbowser-logo-2.svg")} width="220" height="30" alt=""/>
               </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {!loading && (
                        <Fragment>{isAuthenticate ? authLink : guestLink}</Fragment>
                    )}
                </div>
          </nav>
        </Fragment>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    posts: state.posts
  });


export default connect(mapStateToProps,{logout})(Navbar);