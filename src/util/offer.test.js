import {
  sortOffers,
  updateOffers,
  changeFavoriteOffers
} from './offer';
import {sortTypes} from '../const';

describe(`Offer functions work correctly`, () => {

  describe(`SortOffers works correctly`, () => {

    const offers = [
      {
        id: 1,
        price: 300,
        rating: 5,
      },
      {
        id: 2,
        price: 400,
        rating: 4
      },
      {
        id: 3,
        price: 300,
        rating: 4
      },
      {
        id: 4,
        price: 500,
        rating: 3
      },
    ];
    it(`should returns sorted array by default`, () => {
      expect(sortOffers(offers, sortTypes.POPULAR)).toEqual(offers);
    });

    it(`should returns sorted array by price (low to hight)`, () => {
      const sortedOffers = [
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 3,
          price: 300,
          rating: 4
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 4,
          price: 500,
          rating: 3
        },
      ];
      expect(sortOffers(offers, sortTypes.PRICE_LOW)).toEqual(sortedOffers);
    });

    it(`should returns sorted array by price (hight to low)`, () => {
      const sortedOffers = [
        {
          id: 4,
          price: 500,
          rating: 3
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 3,
          price: 300,
          rating: 4
        },
      ];

      expect(sortOffers(offers, sortTypes.PRICE_HIGH)).toEqual(sortedOffers);
    });

    it(`should returns sorted array by rating`, () => {

      const sortedOffers = [
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 3,
          price: 300,
          rating: 4
        },
        {
          id: 4,
          price: 500,
          rating: 3
        },
      ];

      expect(sortOffers(offers, sortTypes.RATING)).toEqual(sortedOffers);
    });
  });

  describe(`UpdateOffers works correctly`, () => {
    it(`should return updated offers array`, () => {

      const offers = [
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 3,
          price: 300,
          rating: 4
        },
      ];

      const updatedOffer = {
        id: 3,
        price: 500,
        rating: 4
      };

      const expectedOffers = [
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 3,
          price: 500,
          rating: 4
        },
      ];

      expect(updateOffers(offers, updatedOffer)).toEqual(expectedOffers);
    });

    it(`should return initial offers array if updated offer is not found`, () => {

      const offers = [
        {
          id: 1,
          price: 300,
          rating: 5,
        },
        {
          id: 2,
          price: 400,
          rating: 4
        },
        {
          id: 3,
          price: 300,
          rating: 4
        },
      ];

      const updatedOffer = {
        id: 4,
        price: 500,
        rating: 4
      };

      expect(updateOffers(offers, updatedOffer)).toEqual(offers);
    });
  });

  describe(`ChangeFavoriteOffers works correctly`, () => {
    it(`should return updated favorite offers array with new offer`, () => {

      const favoriteOffers = [
        {
          id: 1,
          price: 300,
          isFavorite: true,
        },
        {
          id: 2,
          price: 400,
          isFavorite: true,
        },
        {
          id: 3,
          price: 300,
          isFavorite: true,
        },
      ];

      const favoriteOffer = {
        id: 4,
        price: 500,
        isFavorite: true,
      };

      expect(changeFavoriteOffers(favoriteOffers, favoriteOffer)).toContain(favoriteOffer);
    });

    it(`should return updated favorite offers array without unfavorite offer`, () => {

      const offers = [
        {
          id: 1,
          price: 300,
          isFavorite: true,
        },
        {
          id: 2,
          price: 400,
          isFavorite: true,
        },
        {
          id: 3,
          price: 300,
          isFavorite: true,
        },
      ];

      const unfavoriteOffer = {
        id: 2,
        price: 400,
        isFavorite: false,
      };

      expect(changeFavoriteOffers(offers, unfavoriteOffer)).not.toContain(unfavoriteOffer);
    });
  });

});
