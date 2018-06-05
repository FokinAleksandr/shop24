import React from 'react';
import propTypes from 'prop-types';
import { SearchInput } from '../';
import './index.css';

const PersonalInfo = ({ quantity }) => {
  return (
    <div className="personal-info">
      <a href="#home" className="personal-info__logo">
        <span className="personal-info__logo-icon" />
      </a>

      <span className="personal-info__search">
        <SearchInput />
      </span>

      <a href="#profile" className="personal-info__profile">
        <span className="personal-info__user-icon" />
        <span>Анастасия</span>
      </a>

      <a href="#box" className="personal-info__box">
        <span className="personal-info__box-icon" />
        <p className="personal-info__box-text">
          В корзине:
          <br />
          <b>{quantity} товара</b>
        </p>
      </a>
    </div>
  );
};

PersonalInfo.propTypes = {
  quantity: propTypes.number.isRequired
};

export default PersonalInfo;
