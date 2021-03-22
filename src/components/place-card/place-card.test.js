import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';
import {cardTypes} from '../../const';
import {NameSpace} from '../../store/reducer';

const offer = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
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
  "isFavorite": true,
  "isPremium": true,
  "rating": 3,
  "type": `room`,
  "bedrooms": 1,
  "maxAdults": 1,
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
};

const mockStore = configureStore({});

jest.spyOn(redux, `useDispatch`);

it(`PlaceCard should render correctly`, () => {
  const history = createMemoryHistory();

  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: true,
    }
  };

  const {getByText} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlaceCard offer={offer} cardType={cardTypes.CITIES}/>
        </Router>
      </redux.Provider>
  );

  const priceLabels = getByText(/night/i);

  expect(priceLabels).toBeInTheDocument();
});

it(`PlaceCard should render snapshot correctly`, () => {
  const history = createMemoryHistory();

  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: true,
    }
  };

  const {container} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlaceCard offer={offer} cardType={cardTypes.CITIES}/>
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
