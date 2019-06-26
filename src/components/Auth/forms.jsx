import React, { Component } from 'react';
import Register from './registerForm';
import SignIn from './loginForm';

class Forms extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { register: true };
  // }
  state = {
    register: true
  };

  changeForm() {
    this.setState(prev => ({ register: !prev.register }));
  }

  render() {
    const { register } = this.state;
    const word = register ? 'Sign in.' : 'sign up';

    return (
      <div className="login">
        <h3 className="sub_header">{register ? '' : 'Use your EPIC Mail Account'}</h3>
        <h3 className="sub_header">
          {register ? 'Create an EPIC Mail Account' : 'Please login'}
        </h3>
        {register ? <Register /> : <SignIn />}
        <div className="signup">
          <p>
            { register ? 'Already have an account?' : "Don't have an account?"}
            <em className="signinbtn actionbtn" onClick={() => this.changeForm()} >
              {word}
            </em>
          </p>
        </div>
      </div>
    );
  }
}

export default Forms;
