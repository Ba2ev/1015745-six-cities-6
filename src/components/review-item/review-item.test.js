import React from 'react';
import {render} from '@testing-library/react';
import ReviewItem from './review-item';
import {getLocalizedDate} from '../../util/util';

const review = {
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
};

it(`ReviewItem should render correctly`, () => {
  const {queryByText} = render(<ReviewItem review={review}/>);

  const textTime = queryByText(getLocalizedDate(review.date));
  const textName = queryByText(review.user.name);
  const textRatingValue = queryByText(review.rating);

  expect(textTime).toBeInTheDocument();
  expect(textName).toBeInTheDocument();
  expect(textRatingValue).not.toBeInTheDocument();
});


it(`ReviewItem should render snapshot correctly`, () => {
  const {container} = render(<ReviewItem review={review}/>);

  expect(container).toMatchSnapshot();
});
