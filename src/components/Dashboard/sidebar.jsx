import React from 'react';
import Compose from './compose';
import Btn from './btn';

const SideBar = ({click, navname}) => (
  <div className={navname}>
    <Compose click={click}/>
    <hr />
    <Btn />
  </div>
);

SideBar.defaultProps = {
  navname: 'nav',
};

export default SideBar;
