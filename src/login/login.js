import React from 'react';
import Button from '../components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons' 
import "./login.css"

const Login = props => {
  return (
    <React.Fragment>
      <div className= 'login-container'>
      <h2> Login Page</h2>
      <form>
        <div>
          <label for="exampleInputEmail1">Email address</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" className="btn btn-warning">
         Login
        </button>
      </form>
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
      </div>
    </React.Fragment>
  );
};

export default Login;
