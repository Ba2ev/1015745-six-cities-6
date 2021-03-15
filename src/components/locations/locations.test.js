import React from 'react';
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import Locations from './locations';
import {NameSpace} from '../../store/reducer';
import {locations} from '../../const';

const fakeCurrentCity = locations[0].name;

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Locations should render correctly`, () => {
  const initialState = {
    [NameSpace.DATA]: {
      city: fakeCurrentCity,
    }
  };

  const {getByText} = render(
      <redux.Provider store={mockStore(initialState)}>
        <Locations />
      </redux.Provider>
  );

  const currentCity = getByText(fakeCurrentCity);

  expect(currentCity).toBeInTheDocument();
  expect(currentCity.closest(`.tabs__item`)).toHaveClass(`tabs__item--active`);
});
