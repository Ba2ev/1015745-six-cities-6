import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../store/api-actions";

const AccountLink = ({account}) => {

  const dispatch = useDispatch();

  const handleSpanClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <Fragment>
      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{account}</span>
      </Link>
      <a onClick={handleSpanClick}>Sign out</a>
    </Fragment>
  );
};

AccountLink.propTypes = {
  account: PropTypes.string.isRequired,
};

export default AccountLink;
