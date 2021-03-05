import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffer} from '../props-validation';
import {markPremiumTypes, mapTypes, ratingTypes, bookmarkBtnTypes} from '../../const';
import ImageList from '../image-list';
import PremiumMark from '../premium-mark';
import Rating from '../rating/rating';
import BookmarkBtn from '../bookmark-btn';
import PropertyFeatures from '../property-features';
import GoodList from '../good-list/good-list';
import PropertyHost from '../property-host';
import Map from '../map';
import Reviews from '../reviews';
import NearPlaces from '../near-places';

const Property = ({data, comments, nearOffers}) => {

  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, location} = data;

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
            <BookmarkBtn btnType={bookmarkBtnTypes.PROPERTY} isFavorite={isFavorite}/>
          </div>
          <Rating rating={rating} type={ratingTypes.PROPERTY} isValueShowed/>
          <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
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
      <Map place={{...location, title}} points={nearOffers} mapType={mapTypes.PROPERTY}/>
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

const mapStateToProps = ({currentOffer}) => ({
  data: currentOffer.data,
  comments: currentOffer.comments,
  nearOffers: currentOffer.nearOffers,
});

export {Property};
export default connect(mapStateToProps)(Property);
