import React from 'react';
import propTypes from 'prop-types';
import { SearchInput, User, Box } from './';
import './index.css';

const LowerHeader = ({ quantity }) => {
  return (
    <div className="header-2">
      <div className="header-2__left">
        <a href="/" className="">
          <div className="logo-icon" />
        </a>
        <div className="">
          <SearchInput />
        </div>
      </div>

      <div className="header-2__right">
        <User />
        <Box quantity={quantity} />
      </div>
    </div>
  );
};

LowerHeader.propTypes = {
  quantity: propTypes.number.isRequired
};

export default LowerHeader;
