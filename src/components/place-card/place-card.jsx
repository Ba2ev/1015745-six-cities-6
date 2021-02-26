import React from 'react';
import PropTypes from 'prop-types';
import {propsOffer} from '../props-validation';
import {markPremiumTypes, cardTypesParams, ratingTypes, bookmarkBtnTypes} from '../../const';
import {Link} from 'react-router-dom';
import PremiumMark from '../premium-mark';
import BookmarkBtn from '../bookmark-btn';
import Rating from '../rating/rating';

const PlaceCard = ({offer, cardType}) => {
  const {id, isPremium = false, imagePreview, price, isFavorite, rating, title, type} = offer;

  return (
    <article className={`${cardTypesParams[cardType].MIX_CLASS || ``} place-card`}>
      {isPremium && <PremiumMark type={markPremiumTypes.CARD}/>}
      <div className={`${cardTypesParams[cardType].IMAGE_WRAP_CLASS || ``} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={`img/${imagePreview}.jpg`}
            width={`${cardTypesParams[cardType].IMAGE_WIDTH}`}
            height={`${cardTypesParams[cardType].IMAGE_HEIGHT}`}
            alt="Place image"/>
        </Link>
      </div>
      <div className={`${cardTypesParams[cardType].INFO_CLASS || ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkBtn btnType={bookmarkBtnTypes.PLACES} isFavorite={isFavorite}/>
        </div>
        <Rating rating={rating} type={ratingTypes.CARD}/>
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
  cardType: PropTypes.string.isRequired,
};

export default PlaceCard;
