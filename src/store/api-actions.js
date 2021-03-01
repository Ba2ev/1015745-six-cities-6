import {ActionCreator} from './action';
import {adaptToClient} from '../offer';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => (data.map(adaptToClient)))
    .then((data) => dispatch(ActionCreator.loadOffers(data)))
);
