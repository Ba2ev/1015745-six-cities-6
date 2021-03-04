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

const deleteOffer = (offers, updatedOffer) => {
  const index = offers.findIndex((event) => event.id === updatedOffer.id);

  if (index === -1) {
    throw new Error(`Can't delete unexisting event`);
  }

  const newOffers = [
    ...offers.slice(0, index),
    ...offers.slice(index + 1)
  ];

  return newOffers;
};

export const getFavoritesOffers = (offers) => {
  return offers.filter((offer) => offer.isFavorite);
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
