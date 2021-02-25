import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {locations, mapTypes} from '../../const';
import CitiesPlaces from '../cities-places';
import Map from '../map';

const Cities = ({city, offers}) => {
  const cityOffers = offers.filter(({city: {name}}) => name === city);
  const cityParams = locations.find(({name}) => name === city).point;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces city={city} offers={cityOffers}/>
        <div className="cities__right-section">
          <Map place={cityParams} points={cityOffers} mapType={mapTypes.MAIN}/>
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {Cities};
export default connect(mapStateToProps)(Cities);
