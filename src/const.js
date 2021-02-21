export const routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const markPremiumTypes = {
  CARD: `CARD`,
  PROPERTY: `PROPERTY`,
};

export const markPremiumTypesParams = {
  CARD: `place-card__mark`,
  PROPERTY: `property__mark`,
};

export const bookmarkBtnTypes = {
  PLACES: `PLACES`,
  PROPERTY: `PROPERTY`,
};

export const bookmarkBtnTypesParams = {
  PLACES: {
    BTN_CLASS: `place-card`,
    ICON_WIDTH: 18,
    ICON_HEIGHT: 19,
  },
  PROPERTY: {
    BTN_CLASS: `property`,
    ICON_WIDTH: 31,
    ICON_HEIGHT: 33,
  },
};

export const cardListTypes = {
  CITIES: `CITIES`,
  FAVORITES: `FAVORITES`,
  NEARS: `NEARS`
};

export const cardListTypesParams = {
  CITIES: {
    LIST_CLASS: `cities__places-list places__list tabs__content`
  },
  FAVORITES: {
    LIST_CLASS: `favorites__places`
  },
  NEARS: {
    LIST_CLASS: `near-places__list places__list`
  },
};

export const cardTypes = {
  CITIES: `CITIES`,
  FAVORITES: `FAVORITES`,
  NEARS: `NEARS`
};

export const cardTypesParams = {
  CITIES: {
    MIX_CLASS: `cities__place-card`,
    IMAGE_WRAP_CLASS: `cities__image-wrapper`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  },
  FAVORITES: {
    MIX_CLASS: `favorites__card`,
    IMAGE_WRAP_CLASS: `favorites__image-wrapper`,
    IMAGE_WIDTH: 150,
    IMAGE_HEIGHT: 110,
    INFO_CLASS: `favorites__card-info`
  },
  NEARS: {
    MIX_CLASS: `near-places__card`,
    IMAGE_WRAP_CLASS: `near-places__image-wrapper`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  }
};

export const ratingTypes = {
  REVIEW: `REVIEW`,
  PROPERTY: `PROPERTY`,
  CARD: `CARD`
};

export const ratingTypesParams = {
  PROPERTY: {
    MIX_CLASS: `property__rating`,
    STARS_CLASS: `property__stars`,
    VALUE_CLASS: `property__rating-value`,
  },
  REVIEW: {
    MIX_CLASS: `reviews__rating`,
    STARS_CLASS: `reviews__stars`,
  },
  CARD: {
    MIX_CLASS: `place-card__rating`,
    STARS_CLASS: `place-card__stars`
  },
};

export const ratingStarsParams = [
  {
    value: `5`,
    title: `perfect`,
  },
  {
    value: `4`,
    title: `good`,
  },
  {
    value: `3`,
    title: `not bad`,
  },
  {
    value: `2`,
    title: `badly`,
  },
  {
    value: `1`,
    title: `terribly`,
  },
];

export const mapTypes = {
  MAIN: `MAIN`,
  CARD: `CARD`,
};

export const mapTypesParams = {
  MAIN: {
    iconUrl: `./img/pin.svg`,
    iconSize: [30, 30],
    height: 736,
  },
  CARD: {
    iconUrl: `./img/pin.svg`,
    iconSize: [30, 30],
    height: 579,
  },
};

export const userTypes = {
  PROPERTY: `PROPERTY`,
  REVIEW: `REVIEW`,
};

export const userTypesParams = {
  PROPERTY: {
    MIX_CLASS: `property__host-user`,
    IMAGE_WRAP_CLASS: `property__avatar-wrapper`,
    IMAGE_WRAP_PRO_CLASS: `property__avatar-wrapper--pro`,
    IMAGE_AVATAR_CLASS: `property__avatar`,
    IMAGE_WIDTH: 74,
    IMAGE_HEIGHT: 74,
    IMAGE_ALT: `Host avatar`,
    USER_NAME_CLASS: `property__user-name`,
    USER_STATUS_CLASS: `property__user-status`,
  },
  REVIEW: {
    MIX_CLASS: `reviews__user`,
    IMAGE_WRAP_CLASS: `reviews__avatar-wrapper`,
    IMAGE_AVATAR_CLASS: `reviews__avatar`,
    IMAGE_WIDTH: 54,
    IMAGE_HEIGHT: 54,
    IMAGE_ALT: `Reviews avatar`,
    USER_NAME_CLASS: `reviews__user-name`,
  },
};
