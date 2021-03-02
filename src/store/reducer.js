import {ActionType} from './action';
import {locations, sortTypes, AuthorizationStatus} from '../const';

const initialState = {
  city: locations[0].name,
  offers: [],
  currentSort: sortTypes.POPULAR,
  isSortOpened: false,
  hoveredOffer: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  account: ``,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
