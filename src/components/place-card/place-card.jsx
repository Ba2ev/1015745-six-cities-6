import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RATING_STEP = 20;
const PlaceCard = ({offer}) => {
  const {id, isPremium, imagePreview, price, isFavourite, rating, title, type} = offer;
  return (
    <article className="cities__place-card place-card">
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`img/${imagePreview}.jpg`} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavourite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavourite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * RATING_STEP}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        imagePreview: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }
  ),
};

export default PlaceCard;
