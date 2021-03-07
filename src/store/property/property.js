import {createReducer} from '@reduxjs/toolkit';
import {loadOfferData, loadOfferComments, loadOfferNearby} from '../action';

const initialState = {
  data: null,
  comments: null,
  nearOffers: null,
  isInfoLoaded: false,
  isCoomentsLoaded: false,
  isNearbyLoaded: false,
};

const property = createReducer(initialState, (builder) => {
  builder.addCase(loadOfferData, (state, action) => {
    state.data = action.payload;
    state.isInfoLoaded = true;
  });
  builder.addCase(loadOfferComments, (state, action) => {
    state.comments = action.payload;
    state.isCoomentsLoaded = true;
  });
  builder.addCase(loadOfferNearby, (state, action) => {
    state.nearOffers = action.payload;
    state.isNearbyLoaded = true;
  });
});

export {property};
