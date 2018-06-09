import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { UpperHeader, LowerHeader, Links } from '../components';

const Header = ({ quantity }) => {
  return (
    <React.Fragment>
      <UpperHeader />
      <LowerHeader quantity={quantity} />
      <Links />
    </React.Fragment>
  );
};

Header.propTypes = {
  quantity: propTypes.number
};

Header.defaultProps = {
  quantity: 0
};

export default connect(state => ({
  quantity: Object.keys(state.items).length
}))(Header);
