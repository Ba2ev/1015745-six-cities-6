import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchOffers} from "../../../store/api-actions";
import PropTypes from 'prop-types';
import {propsOffers} from '../../props-validation';
import withLoadingScreen from '../../../hocs/withLoadingScreen';
import Header from '../../layouts/header/header';
import Locations from '../../locations';
import CitiesContainer from '../../cities-container';

const MainPage = ({city, offers, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  const CitiesWithLoading = withLoadingScreen(CitiesContainer);
  const cityOffers = offers.filter(({city: {name}}) => name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${cityOffers.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <CitiesWithLoading offers={offers} isLoaded={isDataLoaded} />
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
