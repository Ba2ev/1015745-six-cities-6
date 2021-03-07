import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {configureStore} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "./const";
import {requireAuthorization} from './store/action';
import {createAPI} from "./services/api";
import {checkAuth} from "./store/api-actions";
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
