import React from 'react';
import './forgotpassword.css';

const Forgot = props => {
  return (
    <React.Fragment>
        <div className='forgot-container'>
      <h2>Forgot Password</h2>
      <div className="container">
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
        <br/>
        <button type="submit" className="btn btn-warning">Reset</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forgot;
