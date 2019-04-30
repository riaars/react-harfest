import React from 'react';
import Button from '../components/button/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import './login.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';

const Login = props => {
  const SignUpLink = () => (
    <p>
      Do not have an account? <Link to={ROUTES.REGISTER}>Register here</Link>
    </p>
  );
  return (
    <React.Fragment>
      <div className="login-container">
        <h2 className="center-item"> Welcome back!</h2>
        <br />
        <form>
          <div class="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
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

          <br />
          <div className="center-item">
            <button className="btn-style">Login</button>
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
            text="  Login with Facebook"
          />
          <SignUpLink />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
