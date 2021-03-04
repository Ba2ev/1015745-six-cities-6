import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffer} from '../../props-validation';
import {markPremiumTypes, mapTypes, ratingTypes, bookmarkBtnTypes} from '../../../const';
import LoadingScreen from '../../loading-screen';
import {fetchOfferData, fetchOfferComments, fetchOfferNearby} from "../../../store/api-actions";
import Header from '../../layouts/header';
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

const RoomPage = ({id, data, comments, nearOffers, onLoadOfferData, onLoadComments, onLoadNearby}) => {

  useEffect(() => {

    if (!data) {
      onLoadOfferData(id);
    }

    if (!comments) {
      onLoadComments(id);
    }

    if (!nearOffers) {
      onLoadNearby(id);
    }

  }, [data, comments, nearOffers]);

  if (!data || !comments || !nearOffers) {
    return (
      <LoadingScreen />
    );
  }

  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, location} = data;

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

              <Reviews reviews={comments}/>

            </div>
          </div>
          <Map place={{...location, title}} points={nearOffers} mapType={mapTypes.PROPERTY}/>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers}/>
        </div>
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  id: PropTypes.string.isRequired,
  data: propsOffer,
  comments: PropTypes.array,
  nearOffers: PropTypes.array,
  onLoadOfferData: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  onLoadNearby: PropTypes.func.isRequired,
};

const mapStateToProps = ({currentOffer}, props) => {

  const isNeeedUpdate = !currentOffer.data || (currentOffer.data.id !== Number(props.id));

  return {
    id: props.id,
    data: isNeeedUpdate ? null : currentOffer.data,
    comments: isNeeedUpdate ? null : currentOffer.comments,
    nearOffers: isNeeedUpdate ? null : currentOffer.nearOffers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadOfferData(id) {
    dispatch(fetchOfferData(id));
  },
  onLoadComments(id) {
    dispatch(fetchOfferComments(id));
  },
  onLoadNearby(id) {
    dispatch(fetchOfferNearby(id));
  }
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
