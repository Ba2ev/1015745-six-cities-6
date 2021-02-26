import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {locations, mapTypes, sortTypes} from '../../const';
import {sortOfferPriceHigh, sortOfferPriceLow, sortOfferRating} from '../../offer';
import CitiesPlaces from '../cities-places';
import Map from '../map';

const Cities = ({city, offers, currentSort}) => {
  const cityParams = locations.find(({name}) => name === city).point;
  const cityOffers = offers.filter(({city: {name}}) => name === city);

  switch (currentSort) {
    case sortTypes.PRICE_LOW:
      cityOffers.sort(sortOfferPriceLow);
      break;
    case sortTypes.PRICE_HIGH:
      cityOffers.sort(sortOfferPriceHigh);
      break;
    case sortTypes.RATING:
      cityOffers.sort(sortOfferRating);
      break;
  }

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
  currentSort: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  currentSort: state.currentSort,
});

export {Cities};
export default connect(mapStateToProps)(Cities);
