import React from 'react';
import {connect} from 'react-redux';
import {propsOffers} from '../props-validation';
import FavoriteList from '../favorite-list';

const Favorites = ({offers}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={offers}/>
    </section>
  );
};

Favorites.propTypes = {
  offers: propsOffers,
};

const mapStateToProps = (state) => ({
  offers: state.favoritesOffers,
});


export default connect(mapStateToProps)(Favorites);
