import React from 'react';
import PropTypes from 'prop-types';

const RATING_STEP = 20;
const Card = ({data}) => {
  const {isPremium, imageName, price, isFavourite, rating, title, type} = data;

  const PremiumLabel = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  const BookmarkButton = () => {
    return (
      <button className={`place-card__bookmark-button ${isFavourite ? `place-card__bookmark-button--active` : ``} button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{isFavourite ? `In bookmarks` : `To bookmarks`}</span>
      </button>
    );
  };

  return (
    <article className="cities__place-card place-card">
      {isPremium ? <PremiumLabel /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${imageName}.jpg`} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * RATING_STEP}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};

Card.propTypes = {
  data: PropTypes.shape(
      {
        isPremium: PropTypes.bool.isRequired,
        imageName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }
  ),
};

export default Card;
