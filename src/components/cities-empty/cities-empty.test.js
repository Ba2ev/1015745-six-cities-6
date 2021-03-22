import React from "react";
import {render} from '@testing-library/react';
import CitiesEmpty from '../cities-empty';

it(`CitiesEmpty should render correctly`, () => {
  const {getByText} = render(<CitiesEmpty />);

  const textHeader = getByText(`No places to stay available`);

  expect(textHeader).toBeInTheDocument();
});

it(`CitiesEmpty should render snapshot correctly`, () => {
  const {container} = render(<CitiesEmpty />);

  expect(container).toMatchSnapshot();
});
