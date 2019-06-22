import React from 'react';
import Input from './input';

const Register = () => (
  <form action="dashboard.html" className="login-form" method="POST">
    <div className="login_container">
      <div className="feedback-message-login" />
      <hr />
      <Input
        type="email"
        placeholder="Enter Email"
        name="email"
        id="sign-in-email"
      />
      <Input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="sign-in-password"
      />

      <hr />
      <button type="submit" className="loginbtn" id="sign-in-btn">
        <div className="tit">Login</div>
        <i className="fas fa-spinner btnspinner" id="spinbtn"> </i>
      </button>
      <em className="forgot__password"><a href>Forgot Password? </a></em>
    </div>

  </form>
);

export default Register;
