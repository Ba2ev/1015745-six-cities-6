import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import FavoritesPage from './favorites-page';
import {NameSpace} from '../../../store/reducer';

const mockStore = configureStore({});

jest.spyOn(redux, `useDispatch`);

it(`Should FavoritesPage render correctly with empty favorites`, () => {
  const history = createMemoryHistory();

  const initialState = {
    [NameSpace.USER]: {
      isAuthorized: false
    },
    [NameSpace.DATA]: {
      favorites: [],
      isFavoritesLoaded: true,
    }
  };

  const {container} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Router history={history}>
          <FavoritesPage />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
