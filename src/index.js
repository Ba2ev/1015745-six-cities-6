import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {offers} from './mock';

render(<App offers = {offers} />, document.querySelector(`#root`));
