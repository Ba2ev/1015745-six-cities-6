import React from 'react';
import {useSelector} from 'react-redux';
import {locations, mapTypes} from '../../const';
import {sortOffers} from '../../offer';
import CitiesPlaces from '../cities-places';
import Map from '../map';

const Cities = () => {

  const {city, offers} = useSelector((state) => {
    const cityOffers = state.DATA.offers.filter(({city: {name}}) => name === state.DATA.city);
    const sortedOffers = sortOffers(cityOffers, state.DATA.currentSort);
    return {
      city: state.DATA.city,
      offers: sortedOffers,
    };
  });

  const cityParams = locations.find(({name}) => name === city).point;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces city={city} offers={offers}/>
        <div className="cities__right-section">
          <Map place={cityParams} points={offers} mapType={mapTypes.MAIN}/>
        </div>
      </div>
    </div>
  );
};

export default Cities;
