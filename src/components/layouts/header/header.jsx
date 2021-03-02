import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from '../../../const';
import LoginLink from '../../login-link';
import LogoLink from '../../logo-link';
import AccountLink from '../../account-link';

const Header = ({isAuth, account}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuth ? <AccountLink account={account} /> : <LoginLink /> }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  account: PropTypes.string,
};


const mapStateToProps = (state) => {
  const isAuth = state.authorizationStatus === AuthorizationStatus.AUTH;

  return {
    isAuth,
    account: state.account
  };
};


export {Header};
export default connect(mapStateToProps)(Header);
