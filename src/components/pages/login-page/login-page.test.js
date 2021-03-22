import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginPage from './login-page';
import {NameSpace} from '../../../store/reducer';

const mockStore = configureStore({});

jest.spyOn(redux, `useDispatch`);

describe(`Should LoginPage render correctly`, () => {
  it(`Should LoginPage render correctly without authorization`, () => {
    const history = createMemoryHistory();

    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: false
      }
    };

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <LoginPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it(`Should LoginPage render correctly with authorization`, () => {
    const history = createMemoryHistory();

    const initialState = {
      [NameSpace.USER]: {
        isAuthorized: true,
        account: `test@test.ru`
      }
    };

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <LoginPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });

});

