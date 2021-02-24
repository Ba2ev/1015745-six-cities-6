import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {offers} from './mock';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

render(
    <Provider store={store}>
      <App offers = {offers} />
    </Provider>,
    document.querySelector(`#root`)
);
