import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

it(`Footer should render correctly`, () => {
  const history = createMemoryHistory();

  const {getByAltText} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );

  const image = getByAltText(`6 cities logo`);

  expect(image).toBeInTheDocument();
});

it(`Footer should render snapshot correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );

  expect(container).toMatchSnapshot();
});
