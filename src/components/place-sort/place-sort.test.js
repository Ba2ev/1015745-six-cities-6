import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import PlaceSort from './place-sort';
import {sortTypes} from '../../const';
import {NameSpace} from '../../store/reducer';

const mockStore = configureStore({});

it(`PlaceSort should render correctly`, () => {

  const initialState = {
    [NameSpace.DATA]: {
      currentSort: sortTypes.POPULAR,
    }
  };

  const {getByText, getAllByText} = render(
      <redux.Provider store = {mockStore(initialState)}>
        <PlaceSort />
      </redux.Provider>
  );

  const textCapture = getByText(`Sort by`);
  const currentSortLabels = getAllByText(sortTypes.POPULAR);

  expect(textCapture).toBeInTheDocument();
  expect(currentSortLabels).toHaveLength(2);
});
