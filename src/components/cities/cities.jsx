import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {locations, mapTypes} from '../../const';
import {sortOffers} from '../../offer';
import CitiesPlaces from '../cities-places';
import Map from '../map';

const Cities = ({city, offers}) => {
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

Cities.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

const mapStateToProps = ({PLACES}) => {
  const cityOffers = PLACES.offers.filter(({city: {name}}) => name === PLACES.city);
  const sortedOffers = sortOffers(cityOffers, PLACES.currentSort);

  return {
    city: PLACES.city,
    offers: sortedOffers,
  };
};

export {Cities};
export default connect(mapStateToProps)(Cities);
