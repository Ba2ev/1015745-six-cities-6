import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import ReviewForm from './review-form';
import {NameSpace} from '../../store/reducer';

const mockStore = configureStore({});

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`ReviewForm should render correctly`, () => {
  const initialState = {
    [NameSpace.DATA]: {
      currentOffer: {
        data: {
          id: 1,
        }
      }
    }
  };

  const {container} = render(
      <redux.Provider store={mockStore(initialState)}>
        <ReviewForm />
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
