import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Header from './header';
import {NameSpace} from '../../../store/reducer';

const FAKE_EMAIL = `test@test.ru`;

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
it(`Header should render correctly`, () => {
  const history = createMemoryHistory();

  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: true,
      account: FAKE_EMAIL
    }
  };

  const {getByText} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Header />
        </Router>
      </redux.Provider>
  );

  const email = getByText(FAKE_EMAIL);

  expect(email).toBeInTheDocument();
});
