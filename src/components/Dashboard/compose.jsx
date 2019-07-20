import React from 'react';

const Compose = ({click}) => (
  <div className="compose__message_wrapper">
    <div className="compose__message_btn" onClick={click}>
            COMPOSE
      <div className="plus__icon"><i className="fas fa-plus" /></div>
    </div>
  </div>
);

export default Compose;
