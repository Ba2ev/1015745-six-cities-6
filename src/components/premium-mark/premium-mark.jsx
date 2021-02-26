import React from 'react';
import {markPremiumTypesParams} from '../../const';
import PropTypes from 'prop-types';

const PremiumMark = ({type}) => {
  return (
    <div className={markPremiumTypesParams[type]}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PremiumMark;
