import React from 'react';
import Compose from './compose';
import Btn from './btn';

const SideBar = ({click}) => (
  <div className="nav">
    <Compose click={click}/>
    <hr />
    <Btn />
  </div>
);

export default SideBar;
