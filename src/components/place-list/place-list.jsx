import React from 'react';
import {cardTypes, cardListTypesParams} from '../../const';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import PlaceCard from '../place-card';

const Placelist = ({offers, listType}) => {
  return (
    <div className={cardListTypesParams[listType].LIST_CLASS}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={cardTypes[listType]}/>)}
    </div>
  );
};

Placelist.propTypes = {
  offers: propsOffers,
  listType: PropTypes.string.isRequired,
};

export default Placelist;
