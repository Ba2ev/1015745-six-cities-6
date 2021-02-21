import React from 'react';
import {propsOffers} from '../props-validation';
import FavoriteItem from '../favorite-item';

const FavoriteList = ({offers}) => {
  const favoriteCities = offers.map((offer) => offer.city.name).sort();
  const cities = [...new Set(favoriteCities)];

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => {
          const cityFavoriteOffers = offers.filter((offer) => offer.city.name === city);
          return <FavoriteItem key={city} city={city} offers={cityFavoriteOffers}/>;
        })
      }
    </ul>
  );
};

FavoriteList.propTypes = {
  offers: propsOffers,
};

export default FavoriteList;
