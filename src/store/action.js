import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  UPDATE_CITY: `places/updateCity`,
  LOAD_PLACES: `places/loadPlaces`,
  UPDATE_HOVERED_PLACE_ID: `places/updateHoveredPlaceId`,
  UPDATE_SORT: `places/updateSort`,
  LOAD_FAVORITES_OFFERS: `favorites/loadFavorites`,
  UPDATE_FAVORITES_OFFERS: `favorites/updateFavorites`,
  LOAD_PROPERTY_DATA: `property/loadPropertyData`,
  LOAD_PROPERTY_COMMENTS: `property/loadPropertyComments`,
  LOAD_PROPERTY_NEARBY: `property/loadPropertyNearby`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  UPDATE_ACCOUNT: `user/updateAccount`,
  REDIRECT_TO_ROUTE: `navigation/redirectToRoute`,
};

export const updateCity = createAction(ActionType.UPDATE_CITY, (city) => ({
  payload: city,
}));

export const updateSort = createAction(ActionType.UPDATE_SORT, (sortType) => ({
  payload: sortType,
}));

export const updateHoveredOfferId = createAction(ActionType.UPDATE_HOVERED_PLACE_ID, (id) => ({
  payload: id,
}));

export const loadOffers = createAction(ActionType.LOAD_PLACES, (offers) => ({
  payload: offers,
}));

export const loadFavoritesOffer = createAction(ActionType.LOAD_FAVORITES_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOfferData = createAction(ActionType.LOAD_PROPERTY_DATA, (offerData) => ({
  payload: offerData,
}));

export const loadOfferComments = createAction(ActionType.LOAD_PROPERTY_COMMENTS, (offerComments) => ({
  payload: offerComments,
}));

export const loadOfferNearby = createAction(ActionType.LOAD_PROPERTY_NEARBY, (nearblyOffers) => ({
  payload: nearblyOffers,
}));

export const updateFavoriteOffers = createAction(ActionType.UPDATE_FAVORITES_OFFERS, (offerData) => ({
  payload: offerData,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const updateAccount = createAction(ActionType.UPDATE_ACCOUNT, (email) => ({
  payload: email,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
