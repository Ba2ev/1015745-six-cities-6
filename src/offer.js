import {sortTypes} from './const';

const sortOfferPriceLow = (eventA, eventB) => {
  return eventA.price - eventB.price;
};

const sortOfferPriceHigh = (eventA, eventB) => {
  return eventB.price - eventA.price;
};

const sortOfferRating = (eventA, eventB) => {
  return eventB.rating - eventA.rating;
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case sortTypes.PRICE_LOW:
      return offers.sort(sortOfferPriceLow);
    case sortTypes.PRICE_HIGH:
      return offers.sort(sortOfferPriceHigh);
    case sortTypes.RATING:
      return offers.sort(sortOfferRating);
    default:
      return offers;
  }
};

export const adaptToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    previewImage: offer.preview_image,
    maxAdults: offer.max_adults,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptToServer = (offer) => {
  const adaptedOffer = {
    ...offer,
    "host": {
      ...offer.host,
      "avatar_url": offer.host.avatar_url,
      "is_pro": offer.host.is_pro,
    },
    "is_favorite": offer.is_favorite,
    "is_premium": offer.is_premium,
    "preview_image": offer.preview_image,
    "max_adults": offer.max_adults,
  };

  delete adaptedOffer.host.avatarUrl;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.previewImage;

  return adaptedOffer;
};
