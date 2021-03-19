import React from 'react';
import {render} from '@testing-library/react';
import Rating from '.';
import {ratingTypes} from '../../const';

const RATING = 4;
describe(`Rating should render correctly`, () => {
  it(`Rating should render correctly by card type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.CARD}/>);

    expect(container).toMatchSnapshot();
  });

  it(`Rating should render correctly by property type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.PROPERTY} isValueShowed/>);

    expect(container).toMatchSnapshot();
  });

  it(`Rating should render correctly by review type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.REVIEW}/>);

    expect(container).toMatchSnapshot();
  });
});

