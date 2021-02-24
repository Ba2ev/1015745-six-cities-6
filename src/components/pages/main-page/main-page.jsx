import React from 'react';
import {connect} from 'react-redux';
import {propsOffers} from '../../props-validation';
import Locations from '../../locations';
import Header from '../../layouts/header/header';
import CitiesEmpty from '../../cities-empty';
import Cities from '../../cities';

const MainPage = ({cityOffers}) => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${cityOffers.length ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        { cityOffers.length ? <Cities/> : <CitiesEmpty />}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  cityOffers: propsOffers,
};

const mapStateToProps = (state) => ({
  cityOffers: state.cityOffers,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
