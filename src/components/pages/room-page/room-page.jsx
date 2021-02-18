import React from 'react';
import {propsOffer} from '../../props-validation';
import {nearOffers, reviews} from '../../../mock';
import {mapTypes, ratingTypes} from '../../../const';
import Header from '../../layouts/header/header';
import Rating from '../../rating/rating';
import ImageList from '../../image-list/image-list';
import Map from '../../map/map';
import GoodList from '../../good-list/good-list';
import ReviewList from '../../review-list/review-list';
import ReviewForm from '../../review-form/review-form';
import NearPlaces from '../../sections/near-places';

const RoomPage = ({offer}) => {

  const {images, isPremium, title, isFavorite, rating, type, bedrooms, adultsMax, price, goods, host, description, location} = offer;

  const pointsParams = nearOffers.map((nearOffer) => Object.assign({title: nearOffer.title}, {location: nearOffer.location}));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <ImageList images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <Rating rating={rating} type={ratingTypes.PROPERTY} isValueShowed/>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${adultsMax} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <GoodList goods={goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map place={location} points={pointsParams} type={mapTypes.CARD}/>
          </section>
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

export default RoomPage;
