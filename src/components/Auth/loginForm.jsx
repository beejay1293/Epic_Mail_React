import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions';
import { withRouter } from 'react-router-dom';

export class Login extends Component {

  state = {
    email: '',
    password: ''
  }


  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const userDetails = {
      email, password,
    };
    this.props.auth('login', userDetails, this.props.history);
  }

  handleInput(e) {
    e.preventDefault();
    const { name, value } = e.target
    
    this.setState({[name]: value})
    
  }

  render() {
    return (
      <form action="dashboard.html" className="login-form" onSubmit={e => this.handleSubmit(e)} noValidate>
        <div className="login_container">
          <div className="feedback-message-login" />
          <hr />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="sign-in-email"
            onChange= {e => this.handleInput(e)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="sign-in-password"
            onChange= {e => this.handleInput(e)}
          />

          <hr />
          <button type="submit" className="loginbtn" id={this.props.isLoading ? "sign-in-btn" : ''} disabled = {this.props.isLoading ? true : false}>
            <div className="tit" >{this.props.isLoading ? 'Loading...' : 'Login'}</div>
            {this.props.isLoading ? <i className="fas fa-spinner btnspinner" id="spinbtn"> </i> : ''}
          </button>
          <em className="forgot__password"><a href='/'>Forgot Password? </a></em>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.loading,
  user: state.auth.user,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { auth })(withRouter(Login));
