import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsOffers} from '../../props-validation';
import Locations from '../../locations';
import Header from '../../layouts/header/header';
import CitiesEmpty from '../../cities-empty';
import Cities from '../../cities';

const MainPage = ({city, offers}) => {
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
