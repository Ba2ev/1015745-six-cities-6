import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`LoadingScreen should render correctly`, () => {
  const {getByText} = render(<LoadingScreen />);

  const mainText = getByText(`Loading ...`);

  expect(mainText).toBeInTheDocument();
});

it(`LoadingScreen should render snapshot correctly`, () => {
  const {container} = render(<LoadingScreen />);

  expect(container).toMatchSnapshot();
});
