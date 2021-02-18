import React, {Fragment} from 'react';
import {getDateTimeFormat, getLocalizedDate} from '../../util';
import {ratingTypes} from '../../const';
import Rating from '../rating/rating';
import PropTypes from 'prop-types';

const Review = ({reviewData}) => {

  const {user, rating, comment, date} = reviewData;
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} type={ratingTypes.REVIEW}/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getDateTimeFormat(date)}>{getLocalizedDate(date)}</time>
      </div>
    </Fragment>
  );
};

Review.propTypes = {
  reviewData: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  })
};

export default Review;
