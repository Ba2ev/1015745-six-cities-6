import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import NearPlaces from './near-places';
import {NameSpace} from '../../store/reducer';

const nearbyOffers = [
  {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
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
    "maxAdults": 6,
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
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
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
    "maxAdults": 3,
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
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
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
    "maxAdults": 8,
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

const mockStore = configureStore({});

it(`NearPlaces should render correctly`, () => {
  const history = createMemoryHistory();

  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: true,
    }
  };

  const {getByText} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Router history={history}>
          <NearPlaces offers={nearbyOffers}/>
        </Router>
      </redux.Provider>
  );

  const title = getByText(`Other places in the neighbourhood`);

  expect(title).toBeInTheDocument();
});
