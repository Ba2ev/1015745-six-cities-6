import React from 'react';
import {render} from '@testing-library/react';
import ReviewList from './review-list';

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

it(`ReviewList should render correctly`, () => {
  const {container} = render(<ReviewList reviews={reviews}/>);

  expect(container).toMatchSnapshot();
});
