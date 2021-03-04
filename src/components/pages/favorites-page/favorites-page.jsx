import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../../props-validation';
import {fetchFavoritesOffer} from "../../../store/api-actions";
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import FavoriteEmpty from '../../favorite-empty/favorite-empty';
import Favorites from '../../favorites';
import LoadingScreen from "../../loading-screen";

const FavoritesPage = ({offers, onLoadOffers, isFavoritesLoaded}) => {

  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadOffers();
    }
  }, [isFavoritesLoaded, offers]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
  onLoadOffers: PropTypes.func.isRequired,
  isFavoritesLoaded: PropTypes.bool,
};

const mapStateToProps = ({favoritesOffers, isFavoritesLoaded}) => ({
  offers: favoritesOffers,
  isFavoritesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchFavoritesOffer());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
