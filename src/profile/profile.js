import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';

import {faPhone, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Profile = props => (
  <React.Fragment>
    <div className="profile-container">
      <h2>My Profile</h2>
      <img
        alt="profile"
        className="profile-picture"
        src="https://static.thenounproject.com/png/538846-200.png"
      />
      <h4> Hey, I am {props.name}</h4>

      <br />
      <span className="phone-number">
        <FontAwesomeIcon icon={faPhone} />
        {'  ' + props.phone}
      </span>
      <br />
      <span className="mail">
        <FontAwesomeIcon icon={faEnvelope} />
        {'  ' + props.email}
      </span>
      <br />
      <span className="loc">
        <FontAwesomeIcon icon={faHome} />
        {'  ' + props.location}
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
  name: 'John Doe',
  location: 'Jakarta, Indonesia',
  phone: '0816919867',
  email: 'riaratnasari@gmail.com',
};

export default Profile;
