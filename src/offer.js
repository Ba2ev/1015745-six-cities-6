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

const deleteOffer = (offers, deletedOffer) => {
  return offers.filter((offer) => offer.id !== deletedOffer.id);
};

export const updateOffers = (offers, updatedOffer) => {
  const offerIndex = offers.findIndex((offer) => offer.id === updatedOffer.id);

  return [...offers.slice(0, offerIndex),
    updatedOffer,
    ...offers.slice(offerIndex + 1)];
};

export const updateNearOffers = (offers, updatedOffer) => {
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
  return updatedOffer.isFavorite ? [updatedOffer, ...offers] : deleteOffer(offers, updatedOffer);
};
