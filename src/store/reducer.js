import {ActionType} from './action';
import {locations, sortTypes, AuthorizationStatus} from '../const';
import {changeFavoriteOffers, getFavoritesOffers} from '../offer';

const initialState = {
  city: locations[0].name,
  offers: [],
  isDataLoaded: false,
  favoritesOffers: [],
  isFavoritesLoaded: false,
  currentOffer: {
    data: null,
    comments: null,
    nearOffers: null,
    isDataLoaded: false,
    isCoomentsLoaded: false,
    isNearbyLoaded: false,
  },
  currentSort: sortTypes.POPULAR,
  isSortOpened: false,
  hoveredOffer: null,
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
        favoritesOffers: getFavoritesOffers(action.payload),
        isDataLoaded: true
      };
    case ActionType.LOAD_FAVORITES_OFFERS:
      return {
        ...state,
        favoritesOffers: action.payload,
        isFavoritesLoaded: true,
      };
    case ActionType.UPDATE_FAVORITES_OFFERS:
      return {
        ...state,
        favoritesOffers: changeFavoriteOffers(state.favoritesOffers, action.payload),
        isDataLoaded: false,
      };
    case ActionType.LOAD_OFFER_DATA:
      return {
        ...state,
        currentOffer: {
          ...state.currentOffer,
          data: action.payload,
          isDataLoaded: true,
        },
      };
    case ActionType.LOAD_OFFER_COMMENTS:
      return {
        ...state,
        currentOffer: {
          ...state.currentOffer,
          comments: action.payload,
          isCoomentsLoaded: true,
        },
      };
    case ActionType.LOAD_OFFER_NEARBY:
      return {
        ...state,
        currentOffer: {
          ...state.currentOffer,
          nearOffers: action.payload,
          isNearbyLoaded: true,
        },
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
