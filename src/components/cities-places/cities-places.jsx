import React from 'react';
import {cardListTypes} from '../../const';
import {propsOffers} from '../props-validation';
import PlaceSort from '../place-sort';
import PlaceList from '../place-list';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CitiesPlaces = ({city, cityOffers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">PlaceList</h2>
      <b className="places__found">{`${cityOffers.length} places to stay in ${city}`}</b>
      <PlaceSort />
      <PlaceList offers={cityOffers} listType={cardListTypes.CITIES}/>
    </section>
  );
};

CitiesPlaces.propTypes = {
  city: PropTypes.string.isRequired,
  cityOffers: propsOffers,
};

const mapStateToProps = (state) => ({
  city: state.city,
  cityOffers: state.cityOffers,
});

export {CitiesPlaces};
export default connect(mapStateToProps)(CitiesPlaces);
