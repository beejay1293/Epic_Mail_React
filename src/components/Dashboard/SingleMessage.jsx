import React from 'react';

import propTypes from 'prop-types';

const SingleMessage = ({
  style, name, messages, time, click, click2, del
}) => (

  <li className={style} >
    <input type="checkbox" className="checkbox" />
    <h1 className="name" onClick={click}>{name}</h1>
    <h1 className="message" onClick={click}>{messages}</h1>
    <h1 className="time" onClick={click}>{time}</h1>
    <div className="delete__icon" onClick={del}>
      <i className="fas fa-trash-alt" />
    </div>
  </li>
);

SingleMessage.propTypes = {
  style: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  messages: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};
export default SingleMessage;
