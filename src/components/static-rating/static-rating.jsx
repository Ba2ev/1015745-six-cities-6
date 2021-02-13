import React from 'react';
import PropTypes from 'prop-types';

const RATING_STEP = 20;

const StaticRating = ({rating}) => {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${rating * RATING_STEP}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

StaticRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StaticRating;
