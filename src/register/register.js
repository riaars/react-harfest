import React from 'react';
import './register.css';

const Register = props => {
  return (
    <React.Fragment>
      <div className ="register-container"> 
      <h2> Register Page</h2>
      <form>
      <div>
          <label for="email">Full Name</label>
          <br />
          <input
            type="text"
            className="form-control"
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
        <button type="submit" class="btn btn-warning">Register</button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
