import React from 'react';
import {locations} from '../../../mock';
import {propsOffers} from '../../props-validation';
import PlaceList from '../../place-list/place-list';
import Header from '../../layouts/header/header';

const MainPage = ({offers}) => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {locations.map(({id, name, isActive}) => {
                return (
                  <li key={id} className="locations__item">
                    <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <PlaceList offers={offers}/>
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
  offers: propsOffers,
};

export default MainPage;
