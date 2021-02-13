import React from 'react';
import PropTypes from 'prop-types';
import {propsOffer} from '../props-validation';
import {Link} from 'react-router-dom';
import StaticRating from '../static-rating/static-rating';

const PlaceCard = ({offer, cardParams}) => {
  const {id, isPremium = false, imagePreview, price, isFavorite, rating, title, type} = offer;

  return (
    <article className={`${cardParams.MIX_CLASS || ``} place-card`}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${cardParams.IMAGE_WRAP_CLASS || ``} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={`img/${imagePreview}.jpg`}
            width={`${cardParams.IMAGE_WIDTH}`}
            height={`${cardParams.IMAGE_HEIGHT}`}
            alt="Place image"/>
        </Link>
      </div>
      <div className={`${cardParams.INFO_CLASS || ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <StaticRating rating={rating}/>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: propsOffer,
  cardParams: PropTypes.object,
};

export default PlaceCard;
