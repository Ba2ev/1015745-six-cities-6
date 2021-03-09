import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../const";
import ReviewList from '../review-list';
import ReviewForm from '../review-form';

const Reviews = ({reviews, isAuth}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews} />

      { isAuth && <ReviewForm /> }
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAuth: PropTypes.bool.isRequired,
};


const mapStateToProps = ({USER}) => ({
  isAuth: USER.authorizationStatus === AuthorizationStatus.AUTH,
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
