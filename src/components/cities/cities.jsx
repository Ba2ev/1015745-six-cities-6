import React from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {locations, mapTypes} from '../../const';
import {sortOffers} from '../../offer';
import CitiesPlaces from '../cities-places';
import Map from '../map';

const Cities = () => {

  const offersSelector = (state) => state.DATA.offers;
  const citySelector = (state) => state.DATA.city;
  const sortSelector = (state) => state.DATA.currentSort;

  const sortedOffersSelector = createSelector(
      [offersSelector, citySelector, sortSelector],
      (offers, city, currentSort) => {
        const cityOffers = offers.filter(({city: {name}}) => name === city);
        return sortOffers(cityOffers, currentSort);
      }
  );

  const {city} = useSelector((state) => state.DATA);
  const {offers} = useSelector((state) => ({offers: sortedOffersSelector(state)}));

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
