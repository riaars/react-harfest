import React from 'react';
import './forgotpassword.css';
import Button from '../components/button/button';

const Forgot = props => {
  return (
    <React.Fragment>
      <div className="forgot-container">
        <h2 className="text-center">Forgot Password</h2>
        <div className="notif"> We'll send you an email with a reset link.</div>
        <div className="container">
          <div>
            <br />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <br />

          <div className="center-item">
            <button className="btn-style">Reset</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forgot;
