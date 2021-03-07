import {createReducer} from '@reduxjs/toolkit';
import {updateCity, updateHoveredOfferId, loadOffers, loadFavoritesOffer, updateFavoriteOffers, updateSort} from '../action';
import {locations, sortTypes} from '../../const';
import {updateOffers, changeFavoriteOffers} from '../../offer';

const initialState = {
  city: locations[0].name,
  offers: [],
  isOffersLoaded: false,
  hoveredOffer: null,
  favorites: [],
  isFavoritesLoaded: false,
  currentSort: sortTypes.POPULAR,
};

const places = createReducer(initialState, (builder) => {
  builder.addCase(updateCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(updateHoveredOfferId, (state, action) => {
    state.hoveredOffer = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadFavoritesOffer, (state, action) => {
    state.favorites = action.payload;
    state.isFavoritesLoaded = true;
  });
  builder.addCase(updateFavoriteOffers, (state, action) => {
    state.favorites = changeFavoriteOffers(state.favorites, action.payload);
    state.offers = updateOffers(state.offers, action.payload);
  });
  builder.addCase(updateSort, (state, action) => {
    state.currentSort = action.payload;
  });
});

export {places};
