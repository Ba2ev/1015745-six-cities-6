import {ActionCreator} from './action';
import {adaptOffersToClient, adaptCommentsToClient} from '../adapter';
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => (data.map(adaptOffersToClient)))
    .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => (adaptOffersToClient(data)))
    .then((data) => dispatch(ActionCreator.loadOfferData(data)))
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => (data.map(adaptCommentsToClient)))
    .then((data) => dispatch(ActionCreator.loadOfferComments(data)))
);

export const fetchOfferNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => (data.map(adaptOffersToClient)))
    .then((data) => dispatch(ActionCreator.loadOfferNearby(data)))
);

export const fetchFavoritesOffer = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => (data.map(adaptOffersToClient)))
    .then((data) => dispatch(ActionCreator.loadFavoritesOffer(data)))
);

export const toggleToFavorites = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => (adaptOffersToClient(data)))
    .then((data) => dispatch(ActionCreator.updateFavoriteOffers(data)))
);

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => (data.map(adaptCommentsToClient)))
    .then((data) => dispatch(ActionCreator.loadOfferComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.updateAccount(email)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.updateAccount(``)))
);
