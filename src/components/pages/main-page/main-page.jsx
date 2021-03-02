import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../../props-validation';
import Locations from '../../locations';
import Header from '../../layouts/header/header';
import CitiesEmpty from '../../cities-empty';
import Cities from '../../cities';
import LoadingScreen from '../../loading-screen';
import {fetchOffers} from "../../../store/api-actions";

const MainPage = ({city, offers, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityOffers = offers.filter(({city: {name}}) => name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${cityOffers.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        { cityOffers.length ? <Cities /> : <CitiesEmpty />}
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
