import React from 'react';
import {getDateTimeFormat, getLocalizedDate} from '../../util';
import {ratingTypes, userTypes} from '../../const';
import User from '../user';
import Rating from '../rating/rating';
import PropTypes from 'prop-types';

const ReviewItem = ({review}) => {

  const {user, rating, comment, date} = review;
  return (
    <li className="reviews__item">
      <User user={user} userType={userTypes.REVIEW}/>
      <div className="reviews__info">
        <Rating rating={rating} type={ratingTypes.REVIEW}/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getDateTimeFormat(date)}>{getLocalizedDate(date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
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

export default ReviewItem;
