import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import Reviews from './reviews';
import {NameSpace} from '../../store/reducer';

const reviews = [
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

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
it(`Reviews should render correctly`, () => {
  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: true
    },
    [NameSpace.DATA]: {
      currentOffer: {
        data: {
          id: 1,
        }
      }
    }
  };

  const {container} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Reviews reviews={reviews}/>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
