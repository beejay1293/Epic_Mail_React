import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Forms from './forms';

class Form extends PureComponent {
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
export default Form;
