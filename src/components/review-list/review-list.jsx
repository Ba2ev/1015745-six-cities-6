import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const ReviewList = ({reviews, limit = 0}) => {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, limit).map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  limit: PropTypes.number
};

export default ReviewList;
