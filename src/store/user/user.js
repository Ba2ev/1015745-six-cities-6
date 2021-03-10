import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, updateAccount} from '../action';

const initialState = {
  isAuthorized: false,
  account: ``,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.isAuthorized = action.payload;
  });
  builder.addCase(updateAccount, (state, action) => {
    state.account = action.payload;
  });
});

export {user};
