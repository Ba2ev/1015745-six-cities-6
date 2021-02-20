import React from 'react';
import PropTypes from 'prop-types';
import {cardTypes} from '../../const';
import PlaceSort from '../place-sort';
import PlaceCard from '../place-card';

const CitiesPlaces = ({offers}) => {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">PlaceList</h2>
      <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
      <PlaceSort />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={cardTypes.CITIES}/>)}
      </div>
    </section>
  );
};

CitiesPlaces.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            imagePreview: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            isFavorite: PropTypes.bool.isRequired,
            rating: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
          }
      )
  ).isRequired
};

export default CitiesPlaces;
