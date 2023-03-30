import React from 'react';
import './Navbar.css'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators , dispatch);
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <div>
                <span className='mx-3' data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu"><FontAwesomeIcon icon={faBars} /></span>
                <img className="navbar-logo" src="./images/AristoNewLogo.svg" alt='logo'/>
            </div>
        <div className="d-flex">
        <button type="button" className="btn btn-success" onClick={()=>{actions.login()}}>Login</button>
        <button type="button" className="btn btn-danger" onClick={()=>{actions.logout()}}>Logout</button>
         </div>
  </div>
</nav>
      </div>
    );
  
}

export default Navbar;
