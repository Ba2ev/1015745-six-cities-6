export const sortOfferPriceLow = (eventA, eventB) => {
  return eventA.price - eventB.price;
};

export const sortOfferPriceHigh = (eventA, eventB) => {
  return eventB.price - eventA.price;
};

export const sortOfferRating = (eventA, eventB) => {
  return eventB.rating - eventA.rating;
};
