import React from 'react';
import './Navbar.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const isLoggedIn = useSelector(state => state.isLoggedIn.state);
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


          <div className="dropdown">
            <button type="button" className="btn btn-outline-dark" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCaretDown}/>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
          <li><hr className="dropdown-divider"/></li>
          {isLoggedIn === true ?  <li className="dropdown-item" onClick={()=>{actions.logout()}} >Logout</li>
          :
          <li className="dropdown-item" onClick={()=>{actions.login()}} >Login</li>
        }
        </ul>
      </div>

        
        
         </div>
  </div>
</nav>
      </div>
    );
  
}

export default Navbar;
