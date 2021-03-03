import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {AuthorizationStatus} from "./const";
import {ActionCreator} from './store/action';
import {createAPI} from "./services/api";
import {checkAuth} from "./store/api-actions";
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
