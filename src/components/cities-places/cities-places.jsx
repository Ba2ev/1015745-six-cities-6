import React from 'react';
import {cardListTypes} from '../../const';
import {propsOffers} from '../props-validation';
import PlaceSort from '../place-sort';
import PlaceList from '../place-list';

const CitiesPlaces = ({offers}) => {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">PlaceList</h2>
      <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
      <PlaceSort />
      <PlaceList offers={offers} listType={cardListTypes.CITIES}/>
    </section>
  );
};

CitiesPlaces.propTypes = {
  offers: propsOffers,
};

export default CitiesPlaces;
