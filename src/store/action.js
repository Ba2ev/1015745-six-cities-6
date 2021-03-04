export const ActionType = {
  UPDATE_CITY: `city/updateCity`,
  UPDATE_SORT: `sort/updateSort`,
  TOGGLE_SORTLIST: `sort/toggleSortList`,
  UPDATE_HOVERED_OFFER_ID: `offer/updateHoveredOfferId`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_FAVORITES_OFFERS: `offers/loadFavoritesOffers`,
  UPDATE_FAVORITES_OFFERS: `offers/updateFavoritesOffers`,
  LOAD_OFFER_DATA: `offer/loadOfferData`,
  LOAD_OFFER_COMMENTS: `offer/loadOfferComments`,
  LOAD_OFFER_NEARBY: `offer/loadOfferNearby`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  UPDATE_ACCOUNT: `user/updateAccount`,
};

export const ActionCreator = {
  updateCity: (city) => ({
    type: ActionType.UPDATE_CITY,
    payload: city
  }),
  updateSort: (sortType) => ({
    type: ActionType.UPDATE_SORT,
    payload: sortType
  }),
  toggleSortList: () => ({
    type: ActionType.TOGGLE_SORTLIST,
  }),
  updateHoveredOfferId: (id) => ({
    type: ActionType.UPDATE_HOVERED_OFFER_ID,
    payload: id
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadFavoritesOffer: (offers) => ({
    type: ActionType.LOAD_FAVORITES_OFFERS,
    payload: offers
  }),
  loadOfferNearby: (nearblyOffers) => ({
    type: ActionType.LOAD_OFFER_NEARBY,
    payload: nearblyOffers
  }),
  loadOfferData: (offerData) => ({
    type: ActionType.LOAD_OFFER_DATA,
    payload: offerData
  }),
  loadOfferComments: (offerComments) => ({
    type: ActionType.LOAD_OFFER_COMMENTS,
    payload: offerComments
  }),
  updateFavoriteOffers: (offerData) => ({
    type: ActionType.UPDATE_FAVORITES_OFFERS,
    payload: offerData
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  updateAccount: (email) => ({
    type: ActionType.UPDATE_ACCOUNT,
    payload: email,
  }),
};

