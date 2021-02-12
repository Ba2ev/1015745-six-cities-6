import React from 'react';
import {propsOffers} from '../props-validation';
import FavouriteRow from '../favourite-row/favourite-row';
import {locations} from '../../mock';

const FavouriteList = ({offers}) => {
  const favCities = offers.map((offer) => offer.city.name).sort();
  const cities = [...new Set(favCities)];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          cities.map((city) => {
            const cityFavOffers = offers.filter((offer) => offer.city.name === city);
            const cityId = locations.find((location) => location.name === city).id;
            return (
              <li key={cityId} className="favorites__locations-items">
                <FavouriteRow city={city} offers={cityFavOffers}/>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

FavouriteList.propTypes = {
  offers: propsOffers,
};

export default FavouriteList;

