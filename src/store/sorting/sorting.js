import {createReducer} from '@reduxjs/toolkit';
import {updateSort} from '../action';
import {sortTypes} from '../../const';

const initialState = {
  currentSort: sortTypes.POPULAR,
};

const sorting = createReducer(initialState, (builder) => {
  builder.addCase(updateSort, (state, action) => {
    state.currentSort = action.payload;
  });
});

export {sorting};
