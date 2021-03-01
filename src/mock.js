const avatarUrl = `https://i.pravatar.cc/64`;

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
    maxAdults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washong machine`, `Coffee machine`, `Dishwasher`],
    previewImage: `apartment-01`,
    rating: 4.8,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`room`, `apartment-01`, `apartment-02`, `apartment-03`, `studio-01`],
    host: {
      avatarUrl: `${avatarUrl}?rnd=${Math.random()}`,
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
    maxAdults: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`],
    previewImage: `apartment-01`,
    rating: 4.3,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `room`, `apartment-01`],
    host: {
      avatarUrl: `${avatarUrl}?rnd=${Math.random()}`,
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
    maxAdults: 3,
    goods: [`Heating`, `Kitchen`, `Coffee machine`],
    previewImage: `apartment-02`,
    rating: 4.6,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam`,
    images: [`apartment-02`, `apartment-03`, `apartment-01`],
    host: {
      avatarUrl: `${avatarUrl}?rnd=${Math.random()}`,
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
      avatarUrl: `${avatarUrl}?rnd=${Math.random()}`,
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
      avatarUrl: `${avatarUrl}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: `Elis`
    }
  }
];

