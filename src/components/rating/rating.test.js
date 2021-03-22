import React from 'react';
import {render} from '@testing-library/react';
import Rating from '../rating';
import {ratingTypes} from '../../const';

const RATING = 4;
describe(`Rating should render correctly`, () => {
  it(`Rating should render correctly by card type`, () => {

    const {queryByText} = render(<Rating rating = {RATING} type={ratingTypes.CARD}/>);

    const hiddenText = queryByText(`Rating`);
    const spanValue = queryByText(RATING);

    expect(hiddenText).toBeInTheDocument();
    expect(spanValue).not.toBeInTheDocument();
  });

  it(`Rating should render correctly by property type`, () => {

    const {queryByText} = render(<Rating rating = {RATING} type={ratingTypes.PROPERTY} isValueShowed/>);

    const hiddenText = queryByText(`Rating`);
    const spanValue = queryByText(RATING);

    expect(hiddenText).toBeInTheDocument();
    expect(spanValue).toBeInTheDocument();
  });

  it(`Rating should render correctly by review type`, () => {

    const {queryByText} = render(<Rating rating = {RATING} type={ratingTypes.REVIEW}/>);

    const hiddenText = queryByText(`Rating`);
    const spanValue = queryByText(RATING);

    expect(hiddenText).toBeInTheDocument();
    expect(spanValue).not.toBeInTheDocument();
  });
});

describe(`Rating should render snapshots correctly`, () => {
  it(`Rating should render snapshot correctly by card type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.CARD}/>);

    expect(container).toMatchSnapshot();
  });

  it(`Rating should render snapshot correctly by property type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.PROPERTY} isValueShowed/>);

    expect(container).toMatchSnapshot();
  });

  it(`Rating should render snapshot correctly by review type`, () => {

    const {container} = render(<Rating rating = {RATING} type={ratingTypes.REVIEW}/>);

    expect(container).toMatchSnapshot();
  });
});
