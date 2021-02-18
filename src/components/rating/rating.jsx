import React from 'react';
import PropTypes from 'prop-types';
import {ratingTypesParams} from '../../const';

const RATING_STEP = 20;

const Rating = ({rating, type, isValueShowed}) => {
  return (
    <div className={`${ratingTypesParams[type].MIX_CLASS || ``} rating`}>
      <div className={`${ratingTypesParams[type].STARS_CLASS || ``} rating__stars`}>
        <span style={{width: `${rating * RATING_STEP}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isValueShowed && <span className={`${ratingTypesParams[type].VALUE_CLASS || ``} rating__value`}>{rating}</span>}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isValueShowed: PropTypes.bool,
};

export default Rating;
