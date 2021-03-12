import {data} from './data';
import {ActionType} from '../action';
import {locations, sortTypes} from '../../const';
import {updateOffers, changeFavoriteOffers} from '../../offer';

const offers = [
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
    ],
    "title": `The house among olive `,
    "isFavorite": false,
    "isPremium": true,
    "rating": 3,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 1,
    "price": 169,
    "goods": [
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Washer`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 48.83861,
      "longitude": 2.350499,
      "zoom": 16
    },
    "id": 1
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
    ],
    "title": `Waterfront with extraordinary view`,
    "isFavorite": true,
    "isPremium": false,
    "rating": 4.8,
    "type": `apartment`,
    "bedrooms": 5,
    "max_adults": 6,
    "price": 310,
    "goods": [
      `Dishwasher`,
      `Towels`,
      `Washer`,
      `Breakfast`,
      `Baby seat`,
      `Air conditioning`,
      `Fridge`,
      `Laptop friendly workspace`,
      `Coffee machine`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 50.844556999999995,
      "longitude": 4.346697,
      "zoom": 16
    },
    "id": 2
  },
  {
    "city": {
      "name": `Cologne`,
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
    ],
    "title": `Penthouse, 4-5 rooms + 5 balconies`,
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.2,
    "type": `hotel`,
    "bedrooms": 4,
    "max_adults": 6,
    "price": 182,
    "goods": [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 50.950361,
      "longitude": 6.961974,
      "zoom": 16
    },
    "id": 3
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
    ],
    "title": `The house among olive `,
    "isFavorite": true,
    "isPremium": false,
    "rating": 5,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 1,
    "price": 115,
    "goods": [
      `Washer`,
      `Laptop friendly workspace`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    "location": {
      "latitude": 50.849557,
      "longitude": 4.374696999999999,
      "zoom": 16
    },
    "id": 4
  },
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`
    ],
    "title": `The Joshua Tree House`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.3,
    "type": `hotel`,
    "bedrooms": 4,
    "max_adults": 5,
    "price": 457,
    "goods": [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 52.36354,
      "longitude": 4.889976,
      "zoom": 16
    },
    "id": 5
  }];

const favorites = offers.filter((offer) => offer.isFavorite);

const propertyData = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`
  ],
  "title": `The house among olive `,
  "isFavorite": false,
  "isPremium": false,
  "rating": 4.4,
  "type": `room`,
  "bedrooms": 1,
  "max_adults": 1,
  "price": 159,
  "goods": [
    `Laptop friendly workspace`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
  "location": {
    "latitude": 48.861610000000006,
    "longitude": 2.340499,
    "zoom": 16
  },
  "id": 12
};

const favoritePropertyData = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`
  ],
  "title": `The house among olive `,
  "isFavorite": true,
  "isPremium": false,
  "rating": 4.4,
  "type": `room`,
  "bedrooms": 1,
  "max_adults": 1,
  "price": 159,
  "goods": [
    `Laptop friendly workspace`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
  "location": {
    "latitude": 48.861610000000006,
    "longitude": 2.340499,
    "zoom": 16
  },
  "id": 12
};

const propertyComments = [
  {
    "id": 1,
    "user": {
      "id": 18,
      "isPro": true,
      "name": `Sophie`,
      "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
    },
    "rating": 2,
    "comment": `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    "date": `2021-03-07T08:04:28.647Z`
  },
  {
    "id": 2,
    "user": {
      "id": 15,
      "isPro": false,
      "name": `Kendall`,
      "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
    },
    "rating": 4,
    "comment": `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
    "date": `2021-03-07T08:04:28.647Z`
  }
];

const propertyNearblyOffers = [
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`
    ],
    "title": `The Pondhouse - A Magical Place`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.8,
    "type": `hotel`,
    "bedrooms": 3,
    "max_adults": 6,
    "price": 295,
    "goods": [
      `Laptop friendly workspace`,
      `Fridge`,
      `Coffee machine`,
      `Baby seat`,
      `Dishwasher`,
      `Breakfast`,
      `Towels`,
      `Washer`,
      `Air conditioning`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 48.868610000000004,
      "longitude": 2.342499,
      "zoom": 16
    },
    "id": 103
  },
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`
    ],
    "title": `Waterfront with extraordinary view`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.4,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 3,
    "price": 123,
    "goods": [
      `Baby seat`,
      `Washer`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Air conditioning`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 48.858610000000006,
      "longitude": 2.330499,
      "zoom": 16
    },
    "id": 102
  },
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
    ],
    "title": `Wood and stone place`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3,
    "type": `house`,
    "bedrooms": 2,
    "max_adults": 8,
    "price": 560,
    "goods": [
      `Washer`,
      `Dishwasher`,
      `Air conditioning`,
      `Breakfast`,
      `Fridge`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Towels`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    "location": {
      "latitude": 48.865610000000004,
      "longitude": 2.350499,
      "zoom": 16
    },
    "id": 33
  }
];

describe(`Data reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(undefined, {}))
      .toEqual({
        city: locations[0].name,
        offers: [],
        isOffersLoaded: false,
        hoveredOffer: null,
        favorites: [],
        isFavoritesLoaded: false,
        currentSort: sortTypes.POPULAR,
        currentOffer: {
          data: [],
          comments: [],
          nearOffers: [],
          isInfoLoaded: false,
          isCoomentsLoaded: false,
          isNearbyLoaded: false,
        }
      });
  });

  it(`Reducer should update current city`, () => {
    const state = {city: locations[0].name};

    const updateCityAction = {
      type: ActionType.UPDATE_CITY,
      payload: locations[1].name
    };

    expect(data(state, updateCityAction)).toEqual({city: locations[1].name});
  });

  it(`Reducer should update hovered offer id by 'onMouseEnter' event`, () => {
    const state = {hoveredOffer: null};

    const updateHoveredOfferIdAction = {
      type: ActionType.UPDATE_HOVERED_PLACE_ID,
      payload: 4
    };

    expect(data(state, updateHoveredOfferIdAction)).toEqual({hoveredOffer: 4});
  });

  it(`Reducer should remove hovered offer id by 'onMouseLeave' event`, () => {
    const state = {hoveredOffer: 4};

    const updateHoveredOfferIdAction = {
      type: ActionType.UPDATE_HOVERED_PLACE_ID,
      payload: null
    };

    expect(data(state, updateHoveredOfferIdAction)).toEqual({hoveredOffer: null});
  });

  it(`Reducer should update offer's favorite status by 'onClick' event`, () => {

    const updatedOffers = updateOffers(offers, favoritePropertyData);
    const updatedFavoritex = changeFavoriteOffers(favorites, favoritePropertyData);
    const updatedNearblyOffers = updateOffers(propertyNearblyOffers, favoritePropertyData);

    const state = {
      offers,
      favorites,
      currentOffer: {
        data: propertyData,
        nearOffers: propertyNearblyOffers
      }
    };

    const updateOfferFavoriteAction = {
      type: ActionType.UPDATE_OFFER_FAVORITE,
      payload: favoritePropertyData
    };

    expect(data(state, updateOfferFavoriteAction))
      .toEqual({
        offers: updatedOffers,
        favorites: updatedFavoritex,
        currentOffer: {
          data: favoritePropertyData,
          nearOffers: updatedNearblyOffers
        }});
  });

  it(`Reducer should update offers by load offers`, () => {
    const state = {offers: [], isOffersLoaded: false};
    const loadOffersAction = {
      type: ActionType.LOAD_PLACES,
      payload: offers
    };

    expect(data(state, loadOffersAction))
      .toEqual({offers, isOffersLoaded: true});
  });

  it(`Reducer should update favorite offers by load favorite offers`, () => {

    const state = {favorites: [], isFavoritesLoaded: false};

    const loadFavoritesOfferAction = {
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: favorites
    };

    expect(data(state, loadFavoritesOfferAction))
      .toEqual({favorites, isFavoritesLoaded: true});
  });

  it(`Reducer should update property data by load property data`, () => {

    const state = {currentOffer: {
      data: [],
      isInfoLoaded: false,
    }};

    const loadOfferDataAction = {
      type: ActionType.LOAD_PROPERTY_DATA,
      payload: propertyData
    };

    expect(data(state, loadOfferDataAction))
      .toEqual({currentOffer: {
        data: propertyData,
        isInfoLoaded: true,
      }});
  });

  it(`Reducer should update property comments by load property comments`, () => {

    const state = {currentOffer: {
      comments: [],
      isCoomentsLoaded: false,
    }};

    const loadOfferCommentsAction = {
      type: ActionType.LOAD_PROPERTY_COMMENTS,
      payload: propertyComments
    };

    expect(data(state, loadOfferCommentsAction))
      .toEqual({currentOffer: {
        comments: propertyComments,
        isCoomentsLoaded: true,
      }});
  });

  it(`Reducer should update property nearbly offers by load property nearbly offers`, () => {

    const state = {currentOffer: {
      nearOffers: [],
      isNearbyLoaded: false,
    }};

    const loadOfferNearbyAction = {
      type: ActionType.LOAD_PROPERTY_NEARBY,
      payload: propertyNearblyOffers
    };

    expect(data(state, loadOfferNearbyAction))
      .toEqual({currentOffer: {
        nearOffers: propertyNearblyOffers,
        isNearbyLoaded: true,
      }});
  });

  it(`Reducer should update sorting type`, () => {
    const state = {currentSort: sortTypes.POPULAR};

    const updateSortAction = {
      type: ActionType.UPDATE_SORT,
      payload: sortTypes.RATING
    };

    expect(data(state, updateSortAction)).toEqual({currentSort: sortTypes.RATING});
  });
});
