import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import App from './app';
import {NameSpace} from '../../store/reducer';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render MainPage when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

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
        "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
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
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "maxAdults": 6,
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
        "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "maxAdults": 6,
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
    ];

    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: false,
      },
      [NameSpace.DATA]: {
        city: `Paris`,
        offers,
        isOffersLoaded: true,
      }
    };

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Render FavoritesPage when user navigate to '/favorites' url`, () => {
    const history = createMemoryHistory();

    const favorites = [
      {
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
        "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "maxAdults": 6,
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
    ];

    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: true,
        account: `test@test.ru`,
      },
      [NameSpace.DATA]: {
        favorites,
        isFavoritesLoaded: true,
      }
    };

    history.push(`/favorites`);

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Render LoginPage when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();


    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: false,
      }
    };

    history.push(`/login`);

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Render 'NotFoundPage' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();

    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: true,
        account: `test@test.ru`,
      }
    };

    history.push(`/non-existent-route`);

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
