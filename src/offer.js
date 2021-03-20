import {sortTypes} from './const';

const sortOfferPriceLow = (offerA, offerB) => {
  return offerA.price - offerB.price;
};

const sortOfferPriceHigh = (offerA, offerB) => {
  return offerB.price - offerA.price;
};

const sortOfferRating = (offerA, offerB) => {
  return offerB.rating - offerA.rating;
};

const deleteOffer = (offers, deletedOffer) => {
  return offers.filter((offer) => offer.id !== deletedOffer.id);
};

export const updateCurrentOffer = (stateOffer, payloadOffer) => {
  return stateOffer.id === payloadOffer.id ? payloadOffer : stateOffer;
};

export const updateOffers = (offers, updatedOffer) => {
  const offerIndex = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (offerIndex === -1) {
    return offers;
  }

  return [...offers.slice(0, offerIndex),
    updatedOffer,
    ...offers.slice(offerIndex + 1)];
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

export const changeFavoriteOffers = (offers, updatedOffer) => {
  return updatedOffer.isFavorite ? [...offers, updatedOffer] : deleteOffer(offers, updatedOffer);
};
