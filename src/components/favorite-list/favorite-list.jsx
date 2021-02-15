import React from 'react';
import {propsOffers} from '../props-validation';
import FavoriteRow from '../favorite-row/favorite-row';

const FavoriteList = ({offers}) => {
  const favoriteCities = offers.map((offer) => offer.city.name).sort();
  const cities = [...new Set(favoriteCities)];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          cities.map((city) => {
            const cityFavoriteOffers = offers.filter((offer) => offer.city.name === city);
            return (
              <li key={city} className="favorites__locations-items">
                <FavoriteRow city={city} offers={cityFavoriteOffers}/>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

FavoriteList.propTypes = {
  offers: propsOffers,
};

export default FavoriteList;

