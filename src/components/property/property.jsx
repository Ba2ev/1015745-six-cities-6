import React from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import PropTypes from 'prop-types';
import {propsOffer} from '../props-validation';
import {markPremiumTypes, mapTypes, ratingTypes, bookmarkBtnTypes} from '../../const';
import ImageList from '../image-list';
import PremiumMark from '../premium-mark';
import Rating from '../rating';
import BookmarkBtn from '../bookmark-btn';
import PropertyFeatures from '../property-features';
import GoodList from '../good-list';
import PropertyHost from '../property-host';
import Map from '../map';
import Reviews from '../reviews';
import NearPlaces from '../near-places';

const Property = () => {

  const commentsSelector = (state) => state.DATA.currentOffer.comments;

  const sortedCommentsSelector = createSelector(
      commentsSelector,
      (comments) => comments.slice().sort((commentA, commentB) => commentB.date - commentA.date)
  );

  const {data, nearOffers} = useSelector((state) => state.DATA.currentOffer);

  const {comments} = useSelector((state) => ({comments: sortedCommentsSelector(state)}));

  const {id, images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, location} = data;

  return (
    <section className="property">
      <ImageList images={images} limit={6}/>
      <div className="property__container container">
        <div className="property__wrapper">
          {
            isPremium && <PremiumMark type={markPremiumTypes.PROPERTY}/>
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <BookmarkBtn
              btnType={bookmarkBtnTypes.PROPERTY}
              id={id}
              isFavorite={isFavorite}/>
          </div>
          <Rating
            rating={rating}
            type={ratingTypes.PROPERTY}
            isValueShowed/>
          <PropertyFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}/>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <GoodList goods={goods}/>
          </div>
          <PropertyHost host={host} description={description}/>
          <Reviews reviews={comments}/>
        </div>
      </div>
      <Map
        place={{...location, title}}
        points={nearOffers}
        mapType={mapTypes.PROPERTY}/>
      <div className="container">
        <NearPlaces offers={nearOffers}/>
      </div>
    </section>
  );
};

Property.propTypes = {
  data: propsOffer,
  comments: PropTypes.array,
  nearOffers: PropTypes.array,
};

export default Property;
