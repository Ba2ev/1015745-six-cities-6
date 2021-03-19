import React from 'react';
import {render} from '@testing-library/react';
import PropertyHost from './property-host';

const fakeHost = {
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`
};

it(`PropertyHost should render correctly`, () => {
  const {container} = render(<PropertyHost host={fakeHost.host} description={fakeHost.description}/>);

  expect(container).toMatchSnapshot();
});
