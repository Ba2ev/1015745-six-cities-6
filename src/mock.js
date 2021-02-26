const AVATAR_URL = `https://i.pravatar.cc/64`;
export const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 3,
    price: 120,
    adultsMax: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washong machine`, `Coffee machine`, `Dishwasher`],
    imagePreview: `apartment-01`,
    rating: 4.8,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`room`, `apartment-01`, `apartment-02`, `apartment-03`, `studio-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    type: `Private room`,
    bedrooms: 2,
    price: 110,
    adultsMax: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`],
    imagePreview: `apartment-01`,
    rating: 4.3,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `room`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Erik`
    },
    isPremium: false,
    isFavorite: true,
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 4,
    price: 132,
    adultsMax: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`],
    imagePreview: `apartment-02`,
    rating: 4.6,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Erik`
    },
    isPremium: false,
    isFavorite: false,
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.939784666401257,
      zoom: 12,
    },
    type: `Apartment`,
    price: 180,
    bedrooms: 3,
    adultsMax: 2,
    goods: [`Heating`, `Kitchen`, `Coffee machine`],
    imagePreview: `apartment-03`,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 7,
      isPro: true,
      name: `Carla`
    },
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 5,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.90309612506256,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 1,
    price: 80,
    adultsMax: 5,
    goods: [`Heating`, `Kitchen`, `Coffee machine`],
    imagePreview: `room`,
    rating: 3.2,
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-03`, `studio-01`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 9,
      isPro: false,
      name: `Lana`
    },
    isPremium: false,
    isFavorite: true,
  },
  {
    id: 6,
    city: {
      name: `Paris`,
      location: {
        latitude: 38.138468,
        longitude: 7.546847,
        zoom: 12,
      }
    },
    location: {
      latitude: 48.86442,
      longitude: 2.35083,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 2,
    price: 200,
    adultsMax: 3,
    goods: [`Kitchen`, `Cable TV`, `Washong machine`, `Dishwasher`],
    imagePreview: `apartment-03`,
    rating: 4.7,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris`,
    images: [`apartment-03`, `studio-01`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 81,
      isPro: true,
      name: `Remy`
    },
    isPremium: false,
    isFavorite: true,
  },
];

export const nearOffers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 3,
    price: 120,
    adultsMax: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washong machine`, `Coffee machine`, `Dishwasher`],
    imagePreview: `apartment-01`,
    rating: 4.8,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`room`, `apartment-01`, `apartment-02`, `apartment-03`, `studio-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    type: `Private room`,
    bedrooms: 2,
    price: 110,
    adultsMax: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`],
    imagePreview: `apartment-01`,
    rating: 4.3,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `room`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Erik`
    },
    isPremium: false,
    isFavorite: true,
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    type: `Apartment`,
    bedrooms: 4,
    price: 132,
    adultsMax: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`],
    imagePreview: `apartment-02`,
    rating: 4.6,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Erik`
    },
    isPremium: false,
    isFavorite: false,
  },
];

export const reviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-06T13:15:46:1354`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-06-08T16:21:44:2165`,
    id: 2,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: `Elis`
    }
  }
];

