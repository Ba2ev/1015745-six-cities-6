import {createReducer} from '@reduxjs/toolkit';
import {updateCity, updateHoveredOfferId, loadOffers, loadFavoritesOffer, updateOfferFavorite, updateSort, loadOfferData, loadOfferComments, loadOfferNearby} from '../action';
import {locations, sortTypes} from '../../const';
import {updateOffers, changeFavoriteOffers, updateCurrentOffer} from '../../offer';

const initialState = {
  city: locations[0].name,
  offers: [],
  isOffersLoaded: false,
  hoveredOffer: null,
  favorites: [],
  isFavoritesLoaded: false,
  currentSort: sortTypes.POPULAR,
  currentOffer: {
    data: [],
    comments: [],
    nearOffers: [],
    isInfoLoaded: false,
    isCoomentsLoaded: false,
    isNearbyLoaded: false,
  }
};

const data = createReducer(initialState, (builder) => {
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
  builder.addCase(updateOfferFavorite, (state, action) => {
    state.favorites = changeFavoriteOffers(state.favorites, action.payload);
    state.offers = updateOffers(state.offers, action.payload);
    state.currentOffer.data = updateCurrentOffer(state.currentOffer.data, action.payload);
    state.currentOffer.nearOffers = updateOffers(state.currentOffer.nearOffers, action.payload);
  });
  builder.addCase(updateSort, (state, action) => {
    state.currentSort = action.payload;
  });
  builder.addCase(loadOfferData, (state, action) => {
    state.currentOffer.data = action.payload;
    state.currentOffer.isInfoLoaded = true;
  });
  builder.addCase(loadOfferComments, (state, action) => {
    state.currentOffer.comments = action.payload;
    state.currentOffer.isCoomentsLoaded = true;
  });
  builder.addCase(loadOfferNearby, (state, action) => {
    state.currentOffer.nearOffers = action.payload;
    state.currentOffer.isNearbyLoaded = true;
  });
});

export {data};
