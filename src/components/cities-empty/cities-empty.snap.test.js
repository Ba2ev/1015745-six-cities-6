import React from "react";
import {render} from '@testing-library/react';
import CitiesEmpty from '.';

it(`CitiesEmpty should render correctly`, () => {
  const {container} = render(<CitiesEmpty />);

  expect(container).toMatchSnapshot();
});
