export const ActionType = {
  UPDATE_CITY: `city/updateCity`,
  UPDATE_SORT: `sort/updateSort`,
  TOGGLE_SORTLIST: `sort/toggleSortList`,
  UPDATE_HOVERED_OFFER_ID: `offer/updateHoveredOfferId`,
  LOAD_OFFERS: `offers/loadOffers`,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  updateAccount: (email) => ({
    type: ActionType.UPDATE_ACCOUNT,
    payload: email,
  }),
};
