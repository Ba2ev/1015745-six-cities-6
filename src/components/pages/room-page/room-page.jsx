import React from 'react';
import {connect} from 'react-redux';
import {propsOffer} from '../../props-validation';
import {nearOffers, reviews} from '../../../mock';
import {markPremiumTypes, mapTypes, ratingTypes, bookmarkBtnTypes} from '../../../const';
import Header from '../../layouts/header/header';
import ImageList from '../../image-list';
import PremiumMark from '../../premium-mark';
import Rating from '../../rating/rating';
import BookmarkBtn from '../../bookmark-btn';
import PropertyFeatures from '../../property-features';
import GoodList from '../../good-list/good-list';
import PropertyHost from '../../property-host';
import Map from '../../map';
import Reviews from '../../reviews';
import NearPlaces from '../../near-places';

const RoomPage = ({offer}) => {
  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, location} = offer;

  const pointsParams = nearOffers.map((nearOffer) => ({
    title: nearOffer.title,
    location: nearOffer.location
  }));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
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
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <Map place={location} points={pointsParams} mapType={mapTypes.PROPERTY}/>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers}/>
        </div>
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  offer: propsOffer
};

const mapStateToProps = (state, props) => {
  const currentOffer = state.offers.find((offer) => offer.id === Number(props.id));

  return {
    offer: currentOffer,
  };
};

export {RoomPage};
export default connect(mapStateToProps)(RoomPage);
