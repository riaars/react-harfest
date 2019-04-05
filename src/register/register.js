import React from 'react';
import "./register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons' 
import Button from '../components/button/button';
import Navbar from "../components/navbar/navbar";

const Register = props => {
  return (
    <React.Fragment>
      <div className ="register-container"> 
      <h2> Register Page</h2>
      <br/>
      <form>
      <div>
          <label for="email">Full Name</label>
          <br />
          <input
            type="text"
            className="form-control email"
            id="email"
            placeholder="Full Name"
          />
        </div>
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
        <div className="form-group">
          <label for="noHp">No Handphone</label>
          <input
            type="number"
            className="form-control"
            id="noHp"
            placeholder="+46"
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
        <div class="form-group">
          <label for="repassword">Re-Password</label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            placeholder="Re-Password"
          />
        </div>
        <button type="submit" className="btn btn-warning">Register</button>
      </form>
      <br/>
      OR
      <br/>
      <br/>
      <Button
        className="btn btn-primary btn-auth btn-facebook"
        type="submit"
        icon={<FontAwesomeIcon icon={faFacebookF} />}
        text="  Register with Facebook"
      />

      <div>
        Have an account?
      </div>
      <div>
        Sign in here
      </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
