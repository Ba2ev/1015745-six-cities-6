import React from 'react';
import PropTypes from 'prop-types';
import Places from '../../components/places/places';
import Header from './../../components/header/header';

const MainPage = ({places}) => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places places={places}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            imageName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            isFavourite: PropTypes.bool.isRequired,
            rating: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
          }
      )
  ).isRequired
};

export default MainPage;
