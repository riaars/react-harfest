import React from 'react';
import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navbar = props => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link className="brand-logo" to={ROUTES.LANDING}>
            PlantMoney
        </Link>
       
        <div>
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
