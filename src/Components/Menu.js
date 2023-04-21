import React from 'react';
import './Menu.css'
import { useSelector ,useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine ,faHouse,faNoteSticky,faBell,faUserDoctor,faHeart,faPrescription,faHandHoldingMedical ,faClipboard,faCircleExclamation,faGear} from '@fortawesome/free-solid-svg-icons'

function Menu() {
  const isLoggedIn = useSelector(state => state.isLoggedIn.state);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators , dispatch);
  const username = useSelector(state => state.isLoggedIn.username);
  return (
    <div>
<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="menu" aria-labelledby="menuLabel">
<div className="offcanvas-header">

<div className="row">
  <div className="col-3">
  {isLoggedIn === true ?  
   <img className="profile-pic" src="./images/profile-pic.jpg" alt="profile-pic" /> :
   <img className="profile-pic" src="./images/NoProfilepic.png" alt="profile-pic" />}
  </div>
  <div className="col-7">
<div className="row">
  <div className="col-12">
    {isLoggedIn === true ?  <strong>{username}</strong>: <strong> Welcome guest</strong>}
  </div>
  <div className="col-12">
  {isLoggedIn === true ?  'Joseph.tyler@gmail.com' : <></>}
  </div>
</div>
  </div>
  <div className="col-1" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu">
    X
  </div>
</div> 

</div>
<div className="offcanvas-body">
<ul className="list-group">
{ <li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faChartLine} /><span>Dashboard</span>
  <span className="badge bg-primary rounded-pill">14</span>
</li> }
<li className="list-group-item d-flex active justify-content-between align-items-center">
<FontAwesomeIcon icon={faHouse} /><span>Home</span>
  <span className="badge bg-primary rounded-pill">2</span>
</li>
{isLoggedIn === true ? 
<>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faNoteSticky} /><span>My Medications</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faBell} /><span>Reminders</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faHeart} /><span>My Favourite</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faNoteSticky} /><span>My Records</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faUserDoctor} /><span>My Doctor</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faPrescription} /><span>My Pharmacy</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faHandHoldingMedical} /><span>Caregiver</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faClipboard} /><span>Notes</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
</>
 : <></>}
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faCircleExclamation} /><span>Notifications</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
<FontAwesomeIcon icon={faGear} /><span>Settings</span>
  <span className="badge bg-primary rounded-pill">1</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
{
isLoggedIn === true ? <button type="button" className="btn btn-danger" onClick={()=>{actions.logout()}}>Logout</button>:
<button type="button" className="btn btn-success" onClick={()=>{actions.login()}}>Login</button>
}
</li>
</ul>
</div>
</div>
    </div>
  );
}

export default Menu;
