import React from 'react';
import {propsOffers} from '../props-validation';
import FavoriteList from '../favorite-list';

const Favorites = ({offers}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={offers}/>
    </section>
  );
};

Favorites.propTypes = {
  offers: propsOffers,
};

export default Favorites;
