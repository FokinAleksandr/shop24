import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const Box = ({ quantity }) => {
  return (
    <a href="/" className="profile-box">
      <span className="profile-box__box-icon" />
      <p className="profile-box__box-text">
        В корзине:
        <br />
        <b>{quantity} товара</b>
      </p>
    </a>
  );
};

Box.propTypes = {
  quantity: propTypes.number.isRequired
};

export default Box;
