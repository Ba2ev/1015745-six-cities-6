import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app';

const placesData = [
  {
    id: 1,
    isPremium: true,
    imageName: `apartment-01`,
    price: 120,
    isFavourite: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    id: 2,
    isPremium: false,
    imageName: `room`,
    price: 80,
    isFavourite: true,
    rating: 4,
    title: `Wood and stone place`,
    type: `Private room`,
  },
  {
    id: 3,
    isPremium: false,
    imageName: `apartment-02`,
    price: 132,
    isFavourite: false,
    rating: 4,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    id: 4,
    isPremium: true,
    imageName: `apartment-03`,
    price: 180,
    isFavourite: false,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
  {
    id: 5,
    isPremium: false,
    imageName: `room`,
    price: 80,
    isFavourite: true,
    rating: 4,
    title: `Wood and stone place`,
    type: `Private room`,
  },
];

render(<App places = {placesData} />, document.querySelector(`#root`));
