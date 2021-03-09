import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFavoritesOffer} from "../../../store/api-actions";
import PropTypes from 'prop-types';
import {propsOffers} from '../../props-validation';
import withLoadingScreen from '../../../hocs/withLoadingScreen';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import FavoriteContainer from '../../favorite-container';

const FavoritesPage = ({offers, onLoadOffers, isFavoritesLoaded}) => {

  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadOffers();
    }
  }, [isFavoritesLoaded]);

  const FavoritesWithLoading = withLoadingScreen(FavoriteContainer);
  const isNoOffers = offers.length === 0;

  return (
    <div className={`page ${isNoOffers ? `page--favorites-empty` : ``}`}>
      <Header />

      <main className={`page__main page__main--favorites ${isNoOffers ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          <FavoritesWithLoading offers={offers} isLoaded={isFavoritesLoaded}/>
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

const mapStateToProps = ({PLACES}) => ({
  offers: PLACES.favorites,
  isFavoritesLoaded: PLACES.isFavoritesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchFavoritesOffer());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
