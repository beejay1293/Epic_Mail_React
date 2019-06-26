import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, placeholder, name, id, onChange, ref
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
    />
    <small className="error" />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default Input;
