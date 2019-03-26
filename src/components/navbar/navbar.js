import React from 'react';
import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const Navbar = props => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="brand-logo"> PlantMoney</div>
        <div>
            <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
