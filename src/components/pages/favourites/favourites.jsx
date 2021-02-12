import React from 'react';
import {propsOffers} from '../../props-validation';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import FavouriteEmpty from '../../favourite-empty/favourite-empty';
import FavouriteList from '../../favourite-list/favourite-list';

const Favourites = ({offers}) => {
  const isNoOffers = offers.length === 0;

  return (
    <div className={`page ${isNoOffers ? `page--favorites-empty` : ``}`}>
      <Header />

      <main className={`page__main page__main--favorites ${isNoOffers ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          {isNoOffers ? <FavouriteEmpty /> : <FavouriteList offers={offers} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

Favourites.propTypes = {
  offers: propsOffers,
};

export default Favourites;
