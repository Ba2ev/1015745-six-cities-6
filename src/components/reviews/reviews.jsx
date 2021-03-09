import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ReviewList from '../review-list';
import ReviewForm from '../review-form';

const Reviews = ({reviews}) => {

  const {isAuthorized} = useSelector((state) => state.USER);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews} />

      { isAuthorized && <ReviewForm /> }
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Reviews;
