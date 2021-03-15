import React from 'react';
import {render} from '@testing-library/react';
import FavoriteEmpty from '../favorite-empty';

it(`FavoriteEmpty should render correctly`, () => {
  const {getByText} = render(<FavoriteEmpty />);

  const textHeader = getByText(`Nothing yet saved.`);

  expect(textHeader).toBeInTheDocument();
});
