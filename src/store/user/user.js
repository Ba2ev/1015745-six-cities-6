import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, updateAccount} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  account: ``,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(updateAccount, (state, action) => {
    state.account = action.payload;
  });
});

export {user};
