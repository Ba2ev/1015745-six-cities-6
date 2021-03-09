import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteList from '../favorite-list';

const Favorites = () => {

  const {favorites} = useSelector((state) => state.DATA);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={favorites}/>
    </section>
  );
};


export default Favorites;
