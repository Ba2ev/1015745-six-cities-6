import {ActionType} from './action';
import {locations} from '../const';
import {offers} from '../mock';

const initialState = {
  city: locations[0].name,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
