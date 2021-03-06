import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {logoLinkTypesParams} from "../../const";

const LogoLink = ({linkType}) => {
  return (
    <Link className={`${logoLinkTypesParams[linkType].MIX_CLASS}__logo-link`} to="/">
      <img className={`${logoLinkTypesParams[linkType].MIX_CLASS}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoLinkTypesParams[linkType].IMAGE_WIDTH}
        height={logoLinkTypesParams[linkType].IMAGE_HEIGHT}/>
    </Link>
  );
};

LogoLink.propTypes = {
  linkType: PropTypes.string,
};

export default LogoLink;
