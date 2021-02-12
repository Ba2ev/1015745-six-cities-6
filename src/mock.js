const AVATAR_URL = `https://i.pravatar.cc/64`;
export const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitide: 42.384687,
        longitude: 4.468876,
        zoom: 10,
      }
    },
    location: {
      latitide: 42.38468784384,
      longitude: 4.46887668486,
      zoom: 8,
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
    images: [`room`, `apartment-01`, `apartment-02`, `apartment-03`, `studio-01`, `apartment-01`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    isPremium: true,
    isFavourite: false,
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitide: 42.384687,
        longitude: 4.468876,
        zoom: 10,
      }
    },
    location: {
      latitide: 42.38468745879,
      longitude: 4.46887631574,
      zoom: 8,
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
    isFavourite: true,
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitide: 42.384687,
        longitude: 4.468876,
        zoom: 10,
      }
    },
    location: {
      latitide: 42.38468721354,
      longitude: 4.46887648768,
      zoom: 8,
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
    isFavourite: false,
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {
        latitide: 42.384687,
        longitude: 4.468876,
        zoom: 10,
      }
    },
    location: {
      latitide: 42.38468721354,
      longitude: 4.46887648768,
      zoom: 8,
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
    isFavourite: false,
  },
  {
    id: 5,
    city: {
      name: `Amsterdam`,
      location: {
        latitide: 42.384687,
        longitude: 4.468876,
        zoom: 10,
      }
    },
    location: {
      latitide: 42.38468744658,
      longitude: 4.46887695468,
      zoom: 8,
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
    isFavourite: true,
  },
  {
    id: 6,
    city: {
      name: `Paris`,
      location: {
        latitide: 38.138468,
        longitude: 7.546847,
        zoom: 10,
      }
    },
    location: {
      latitide: 38.13846884384,
      longitude: 7.54684768486,
      zoom: 8,
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
    isFavourite: true,
  },
];

export const locations = [
  {
    id: 1,
    name: `Paris`,
    isActive: false
  },
  {
    id: 2,
    name: `Cologne`,
    isActive: false
  },
  {
    id: 3,
    name: `Brussels`,
    isActive: false
  },
  {
    id: 4,
    name: `Amsterdam`,
    isActive: true
  },
  {
    id: 5,
    name: `Hamburg`,
    isActive: false
  },
  {
    id: 6,
    name: `Dusseldorf`,
    isActive: false
  }
];
