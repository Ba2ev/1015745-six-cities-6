export const routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
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
