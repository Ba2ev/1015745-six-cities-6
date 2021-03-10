import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoritesOffer} from "../../../store/api-actions";
import withLoadingScreen from '../../../hocs/withLoadingScreen';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import FavoriteContainer from '../../favorite-container';

const FavoritesWithLoading = withLoadingScreen(FavoriteContainer);
const FavoritesPage = () => {

  const dispatch = useDispatch();

  const {favorites, isFavoritesLoaded} = useSelector((state) => state.DATA);

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavoritesOffer());
    }
  }, [isFavoritesLoaded]);

  const isNoOffers = favorites.length === 0;

  return (
    <div className={`page ${isNoOffers ? `page--favorites-empty` : ``}`}>
      <Header />

      <main className={`page__main page__main--favorites ${isNoOffers ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          <FavoritesWithLoading offers={favorites} isLoaded={isFavoritesLoaded}/>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FavoritesPage;
