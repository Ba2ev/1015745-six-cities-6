import React from 'react';
import {cardListTypes} from '../../const';
import {propsOffers} from '../props-validation';
import PlaceSort from '../place-sort';
import PlaceList from '../place-list';
import PropTypes from 'prop-types';

const CitiesPlaces = ({city, offers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">PlaceList</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
      <PlaceSort />
      <PlaceList offers={offers} listType={cardListTypes.CITIES}/>
    </section>
  );
};

CitiesPlaces.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

export default CitiesPlaces;
