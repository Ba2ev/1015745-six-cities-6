import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../store/api-actions";

const AccountLink = ({account, onSpanClick}) => {

  const handleSpanClick = (evt) => {
    evt.preventDefault();
    onSpanClick();
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
  onSpanClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSpanClick() {
    dispatch(logout());
  }
});


export {AccountLink};
export default connect(null, mapDispatchToProps)(AccountLink);
