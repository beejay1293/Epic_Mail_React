import React from 'react';

const Header = ({sideBar, dashstate, icon}) => (
  <header className="header__container">
    <div className="logo">
      <h1 className="header">
        <div className="bars" onClick={sideBar}>
          {icon}
          <h6 className="nav_name">{dashstate}</h6>
        </div>
        <div className="epic__mail">

          <span>

            <i className="fas fa-envelope" />
            <em>E</em>
          </span
            >
PIC
          <b className="mail">Mail</b>

        </div>
      </h1>
    </div>
    <div className="navbar">
      <ul className="dropdown">
        <i className="far fa-user">

          <h5 className="user">
Mobolaji
            <i className="fas fa-caret-down" />
          </h5>
          <div className="dropdown-content">

            <a href="/login" className="reset__password">logout</a>
          </div>

        </i>

      </ul>
    </div>

  </header>
);

export default Header;
