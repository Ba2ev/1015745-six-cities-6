import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AccountLink from './account-link';


const user = {
  "email": `test@test.ru`
};

const mockStore = configureStore({});

jest.spyOn(redux, `useDispatch`);


it(`AccountLink should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <AccountLink account={user.email}/>
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});

