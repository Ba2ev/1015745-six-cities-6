import React from 'react';
import {propsOffers} from '../props-validation';
import CitiesEmpty from '../cities-empty';
import Cities from '../cities';

const CitiesContainer = ({offers}) => {
  return offers.length ? <Cities /> : <CitiesEmpty />;
};

CitiesContainer.propTypes = {
  offers: propsOffers,
};

export default CitiesContainer;
