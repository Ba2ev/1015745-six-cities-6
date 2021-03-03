import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const AccountLink = ({account}) => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{account}</span>
    </Link>
  );
};

AccountLink.propTypes = {
  account: PropTypes.string.isRequired,
};

export default AccountLink;
