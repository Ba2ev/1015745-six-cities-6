import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li key={review.id} className="reviews__item">
          <Review reviewData={review}/>
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewList;
