import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../../actions/';


export class Register extends Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    pw2: ''
  }


  handleChange(e) {
  e.preventDefault();
  const {name, value} = e.target
  this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault();
   this.props.auth( 'signup', this.state, this.props.history)
  }
  render(){
    
    return (
      <form action="dashboard.html" className="login-form" method="POST" onSubmit={e => this.handleSubmit(e)} noValidate>
        <div className="login_container">
          <hr />
    
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            id="firstname"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            id="lastname"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="number"
            id="number"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            onChange={(e) => this.handleChange(e)}
          />
          <div className="feedback_container2" />
          <input
            type="password"
            placeholder="Comfirm password"
            name="psw2"
            id="password2"
            onChange={(e) => this.handleChange(e)}
          />
    
          <hr />
    
          <button type="submit" className="registerbtn" id={this.props.isLoading ? "sign-in-btn" : ''} disabled = {this.props.isLoading ? true : false}>
          <div className="tit" >{this.props.isLoading ? 'Loading...' : 'sign up'}</div>
           {this.props.isLoading ? <i className="fas fa-spinner btnspinner" id="spinbtn2"> </i> : ''} 
          </button>
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
  })

export default connect(mapStateToProps, { auth })(withRouter(Register));
