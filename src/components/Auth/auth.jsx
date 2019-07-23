import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Forms from './forms';
import { connect } from 'react-redux';
import { auth } from '../../actions';

export class Form extends PureComponent {
  render() {

    
    return (
      <div className="container">
        <div className="login__wrapper">
          <h1 className="header">
            <Link className="link" to="/">
              <span>
                <em>E</em>
              </span>
            PIC
              <b className="mails">Mail</b>
            </Link>
          </h1>
          <Forms />
        </div>
        <div className="wrapper" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps)(Form);
