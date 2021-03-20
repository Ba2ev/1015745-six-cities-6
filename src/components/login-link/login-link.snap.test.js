import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LoginLink from './login-link';

it(`LoginLink should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <LoginLink />
      </Router>
  );

  expect(container).toMatchSnapshot();
});
