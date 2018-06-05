import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Contacts, PersonalInfo, Links } from '../components';

const Header = ({ quantity }) => {
  return (
    <React.Fragment>
      <Contacts />
      <PersonalInfo quantity={quantity} />
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
