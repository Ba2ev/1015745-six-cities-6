import React from 'react';
import {connect} from 'react-redux';
import {propsOffers} from '../../props-validation';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import FavoriteEmpty from '../../favorite-empty/favorite-empty';
import Favorites from '../../favorites';

const FavoritesPage = ({offers}) => {
  const isNoOffers = offers.length === 0;

  return (
    <div className={`page ${isNoOffers ? `page--favorites-empty` : ``}`}>
      <Header />

      <main className={`page__main page__main--favorites ${isNoOffers ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          {isNoOffers ? <FavoriteEmpty /> : <Favorites offers={offers} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: propsOffers,
};

const mapStateToProps = (state) => {
  const favoriteOffers = state.offers.filter((offer) => offer.isFavorite);

  return {
    offers: favoriteOffers,
  };
};

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
