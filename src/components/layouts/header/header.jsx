import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus, logoLinkTypes} from '../../../const';
import LoginLink from '../../login-link';
import LogoLink from '../../logo-link';
import AccountLink from '../../account-link';

const Header = ({isAuth, account}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink linkType={logoLinkTypes.HEADER}/>
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


const mapStateToProps = ({USER}) => ({
  isAuth: USER.authorizationStatus === AuthorizationStatus.AUTH,
  account: USER.account,
});


export {Header};
export default connect(mapStateToProps)(Header);
