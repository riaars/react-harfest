import React from 'react';
import './register.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';
const Register = props => {
  const SignInLink = () => (
    <p>
      Have an account? <Link to={ROUTES.LOGIN}>Login here</Link>
    </p>
  );
  return (
    <React.Fragment>
      <div className="register-container">
        <h2 className="center-item"> Start Using PlantMoney</h2>
        <br />
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control email"
              id="email"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="noHp"
              placeholder="Phone Number"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              className="form-control"
              id="repassword"
              placeholder="Re-Password"
            />
          </div>
          <br />
          <div className="center-item">
            <button className="btn-style">Register</button>
          </div>
        </form>
        <div className="center-item">
          <br />
          OR
          <br />
          <br />
          <Button
            className="btn btn-primary btn-auth btn-facebook"
            type="submit"
            icon={<FontAwesomeIcon icon={faFacebookF} />}
            text="  Register with Facebook"
          />
          <SignInLink />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
