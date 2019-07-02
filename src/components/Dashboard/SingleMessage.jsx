import React from 'react';
import propTypes from 'prop-types';

const SingleMessage = ({
  style, name, messages, time, click, click2
}) => (

  <li className={style} onClick={click}>
    <input type="checkbox" />
    <h1 className="name">{name}</h1>
    <h1 className="message">{messages}</h1>
    <h1 className="time">{time}</h1>
    <div className="delete__icon">
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
