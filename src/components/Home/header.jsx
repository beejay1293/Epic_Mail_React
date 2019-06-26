import React from 'react';
import { Link } from 'react-router-dom';
import Email from '../../assets/images/email8.png';

const Header = () => (
  <header className="header__container_index">
    <div className="logo">
      <h1 className="header">
        <div className="epic__mails">
          <span>
            {' '}
            <i className="fas fa-envelope" />
            <em>E</em>
          </span>
          PIC
          <b className="mail">Mail</b>
        </div>
      </h1>
    </div>
    <div>
      <div className="get_started">
        <h5 className="user">
          <a href="/login">GET STARTED</a>
        </h5>
      </div>
    </div>

    <section className="main_landing">
      <div className="pic">
        <h1>
          <img src={Email} width="120px" height="120px;" alt="" />
        </h1>
        <h1>
          WELCOME TO
          {' '}
          <span className="epic">EPIC MAIL</span>
        </h1>
        <p className="note">
          Stay organized With EPIC Mail, you can enjoy the richness of email
          communication delivered extremely fast when compared to traditional
          post. Emails can be sent 24 hours a day, 365 days a year.
        </p>
        <p className="note">
          {' '}
          <Link to="/login">Login</Link>
          {' '}
        </p>
      </div>
    </section>
  </header>
);

export default Header;
