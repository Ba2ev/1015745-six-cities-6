export const routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const cardTypes = {
  CITIES: `CITIES`,
  FAVORITES: `FAVORITES`,
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
