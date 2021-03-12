import {adaptCommentToClient, adaptOfferToClient} from './adapter';
/* eslint-disable */
describe(`Adapters work correctly`, () => {
  describe(`Comment adapter works correctly`, () => {

    const comment = {
      id: 1,
      user: {
        id: 18,
        name: `Sophie`,
        avatar_url: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
        is_pro: true,
      },
      rating: 2,
      comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
      date: `2021-03-07T08:04:28.647Z`,
    };
    it(`should has modified keys`, () => {
      expect(adaptCommentToClient(comment)).toHaveProperty(`user.avatarUrl`);
      expect(adaptCommentToClient(comment)).toHaveProperty(`user.isPro`);
    });

    it(`should not has server keys`, () => {
      expect(adaptCommentToClient(comment)).not.toHaveProperty(`user.avatar_url`);
      expect(adaptCommentToClient(comment)).not.toHaveProperty(`user.is_pro`);
    });
  });

  describe(`Offer adapter works correctly`, () => {
    const offer = {
      "city": {
          "name": "Paris",
          "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
          }
      },
      "preview_image": "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg",
      "images": [
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg",
          "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg"
      ],
      "title": "The house among olive ",
      "is_favorite": false,
      "is_premium": true,
      "rating": 3,
      "type": "room",
      "bedrooms": 1,
      "max_adults": 1,
      "price": 169,
      "goods": [
          "Breakfast",
          "Air conditioning",
          "Laptop friendly workspace",
          "Washer"
      ],
      "host": {
          "id": 25,
          "name": "Angelina",
          "is_pro": true,
          "avatar_url": "img/avatar-angelina.jpg"
      },
      "description": "Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.",
      "location": {
          "latitude": 48.83861,
          "longitude": 2.350499,
          "zoom": 16
      },
      "id": 1
  }

  it(`should has modified keys`, () => {
    expect(adaptOfferToClient(offer)).toHaveProperty(`host.avatarUrl`);
    expect(adaptOfferToClient(offer)).toHaveProperty(`host.isPro`);
    expect(adaptOfferToClient(offer)).toHaveProperty(`isFavorite`);
    expect(adaptOfferToClient(offer)).toHaveProperty(`isPremium`);
    expect(adaptOfferToClient(offer)).toHaveProperty(`maxAdults`);
    expect(adaptOfferToClient(offer)).toHaveProperty(`previewImage`);
  });

  it(`should not has server keys`, () => {
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`host.avatar_url`);
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`host.is_pro`);
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`is_favorite`);
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`is_premium`);
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`max_adults`);
    expect(adaptOfferToClient(offer)).not.toHaveProperty(`preview_image`);
  });
  });
});
