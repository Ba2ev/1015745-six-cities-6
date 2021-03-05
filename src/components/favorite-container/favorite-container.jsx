import React from 'react';
import {propsOffers} from '../props-validation';
import FavoriteEmpty from '../favorite-empty';
import Favorites from '../favorites';

const FavoriteContainer = ({offers}) => {
  return offers.length ? <Favorites /> : <FavoriteEmpty />;
};

FavoriteContainer.propTypes = {
  offers: propsOffers,
};

export default FavoriteContainer;
