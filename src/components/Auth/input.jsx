import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, placeholder, name, id,
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      required
    />
    <small className="error" />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};

export default Input;
