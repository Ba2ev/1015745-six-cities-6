import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffers} from "../../../store/api-actions";
import withLoadingScreen from '../../../hocs/withLoadingScreen';
import Header from '../../layouts/header/header';
import Locations from '../../locations';
import CitiesContainer from '../../cities-container';

const CitiesWithLoading = withLoadingScreen(CitiesContainer);

const MainPage = () => {

  const dispatch = useDispatch();

  const {city, offers, isOffersLoaded} = useSelector((state) => state.DATA);

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffers());
    }
  }, [isOffersLoaded]);

  const cityOffers = offers.filter(({city: {name}}) => name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${cityOffers.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <CitiesWithLoading offers={offers} isLoaded={isOffersLoaded} />
      </main>
    </div>
  );
};

export default MainPage;
