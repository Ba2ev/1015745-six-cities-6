import React from 'react';
import {propsOffers} from '../props-validation';
import {cardListTypes} from '../../const';
import PlaceList from '../place-list';

const NearPlaces = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceList offers={offers} listType={cardListTypes.NEARS}/>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: propsOffers,
};

export default NearPlaces;
