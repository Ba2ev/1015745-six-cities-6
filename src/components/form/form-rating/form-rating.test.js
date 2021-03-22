import React from "react";
import {render} from '@testing-library/react';
import FormRating from './form-rating';

it(`FormRating should render correctly`, () => {
  const handler = jest.fn();

  const {container} = render(
      <FormRating handler={handler}/>
  );

  expect(container).toMatchSnapshot();
});
