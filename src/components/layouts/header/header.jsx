import React from 'react';
import {useSelector} from "react-redux";
import {logoLinkTypes} from '../../../const';
import LoginLink from '../../login-link';
import LogoLink from '../../logo-link';
import AccountLink from '../../account-link';

const Header = () => {

  const {isAuthorized, account} = useSelector((state) => state.USER);

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
                {isAuthorized ? <AccountLink account={account} /> : <LoginLink /> }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
