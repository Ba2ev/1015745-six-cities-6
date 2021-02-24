import {ActionType} from './action';
import {locations} from '../const';
import {getCityOffers} from '../util';

const initialState = {
  city: locations[0].name,
  cityOffers: getCityOffers(locations[0].name),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        cityOffers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
