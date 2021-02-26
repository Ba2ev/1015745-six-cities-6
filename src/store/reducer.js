import {ActionType} from './action';
import {locations, sortTypes} from '../const';
import {offers} from '../mock';

const initialState = {
  city: locations[0].name,
  offers,
  currentSort: sortTypes.POPULAR,
  isSortOpened: false,
  hoveredOffer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.UPDATE_SORT:
      return {
        ...state,
        currentSort: action.payload,
      };
    case ActionType.TOGGLE_SORTLIST:
      return {
        ...state,
        isSortOpened: !state.isSortOpened,
      };
    case ActionType.UPDATE_HOVERED_OFFER_ID:
      return {
        ...state,
        hoveredOffer: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
