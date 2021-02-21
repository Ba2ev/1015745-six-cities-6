import React from 'react';
import {propsOffers} from '../../props-validation';
import {mapTypes} from '../../../const';
import Locations from '../../locations';
import CitiesPlaces from '../../cities-places';
import Header from '../../layouts/header/header';
import Map from '../../map';

const currentCity = `Amsterdam`;

const MainPage = ({offers}) => {
  const cityOffers = offers.filter((offer) => offer.city.name === currentCity);
  const cityParams = cityOffers[0].city.location;
  const pointsParams = cityOffers.map((offer) => Object.assign({title: offer.title}, {location: offer.location}));

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces offers={cityOffers}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map place={cityParams} points={pointsParams} type={mapTypes.MAIN}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: propsOffers,
};

export default MainPage;
