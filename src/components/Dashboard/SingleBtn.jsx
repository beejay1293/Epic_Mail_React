import React from 'react';
import propTypes from 'prop-types';


const SingleBtn = ({ styles, name, font, click }) => (
  <li className={styles} onClick = {click}>
    <i className={font} />
    {name}
  </li>
);

SingleBtn.propTypes = {
  styles: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  font: propTypes.string.isRequired,
};

export default SingleBtn;
