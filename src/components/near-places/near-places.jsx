import React from 'react';
import PropTypes from 'prop-types';
import {cardTypes} from '../../const';
import PlaceCard from '../place-card';

const NearPlaces = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={cardTypes.NEARS}/>)}
      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default NearPlaces;
