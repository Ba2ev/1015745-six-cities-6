import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LogoLink from './logo-link';
import {logoLinkTypes} from '../../const';

it(`LogoLink should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <LogoLink linkType={logoLinkTypes.HEADER}/>
      </Router>
  );

  expect(container).toMatchSnapshot();
});
