import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {Router as BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {requireAuthorization} from './store/action';
import {createAPI} from "./services/api";
import {checkAuth} from "./store/api-actions";
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {redirect} from "./store/middlewares/redirect";
import browserHistory from "./browser-history";

const api = createAPI(
    () => store.dispatch(requireAuthorization(false))
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
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
