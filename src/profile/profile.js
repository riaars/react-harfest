import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';

import {faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Profile = props => (
  <React.Fragment>
    <div className="profile-container">
      
      <h2> Profile Page</h2>
      <img
        className="profile-picture"
        src="http://pngimg.com/uploads/spongebob/spongebob_PNG61.png"
      />
      <h4 className>{props.name}</h4>
      <h5 className>{props.location}</h5>
      <br/>
      <span className="phone-number">
        <FontAwesomeIcon icon={faPhone} />
        {'  ' + props.phone}
        <br />
      </span>
      <span className="mail">
        <FontAwesomeIcon icon={faMailBulk} />
        {'  ' + props.email}
      </span>

      <br />

      <button className="btn-edit-profile">Edit Profile </button>
      
    </div>
  </React.Fragment>
);

Profile.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};

Profile.defaultProps = {
  name: 'Spongebob',
  location: 'Jakarta, Indonesia',
  phone: '0816919867',
  email: 'riaratnasari@gmail.com',
};

export default Profile;
