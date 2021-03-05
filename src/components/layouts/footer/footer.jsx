import React from 'react';
import {logoLinkTypes} from '../../../const';
import LogoLink from '../../logo-link';

const Footer = () => {
  return (
    <footer className="footer container">
      <LogoLink linkType={logoLinkTypes.FOOTER}/>
    </footer>
  );
};

export default Footer;
