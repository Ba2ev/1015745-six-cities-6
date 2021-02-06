import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app';
import {placesData} from './mock';

render(<App places = {placesData} />, document.querySelector(`#root`));
