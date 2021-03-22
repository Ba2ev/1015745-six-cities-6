import {loadOffers, loadOfferData, loadOfferComments, loadOfferNearby, loadFavoritesOffer, updateOfferFavorite, requireAuthorization, updateAccount} from './action';
import {adaptOfferToClient, adaptCommentToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => (data.map(adaptOfferToClient)))
    .then((data) => dispatch(loadOffers(data)))
);

export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => (adaptOfferToClient(data)))
    .then((data) => dispatch(loadOfferData(data)))
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => (data.map(adaptCommentToClient)))
    .then((data) => dispatch(loadOfferComments(data)))
);

export const fetchOfferNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => (data.map(adaptOfferToClient)))
    .then((data) => dispatch(loadOfferNearby(data)))
);

export const fetchFavoritesOffer = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => (data.map(adaptOfferToClient)))
    .then((data) => dispatch(loadFavoritesOffer(data)))
);

export const changeFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => (adaptOfferToClient(data)))
    .then((data) => dispatch(updateOfferFavorite(data)))
);

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => (data.map(adaptCommentToClient)))
    .then((data) => dispatch(loadOfferComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(updateAccount(data.email)))
    .then(() => dispatch(requireAuthorization(true)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(true)))
    .then(() => dispatch(updateAccount(email)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(false)))
    .then(() => dispatch(updateAccount(``)))
);
