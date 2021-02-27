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
