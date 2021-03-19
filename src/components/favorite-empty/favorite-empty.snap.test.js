import React from 'react';
import {render} from '@testing-library/react';
import FavoriteEmpty from '.';

it(`FavoriteEmpty should render correctly`, () => {
  const {container} = render(<FavoriteEmpty />);

  expect(container).toMatchSnapshot();
});
