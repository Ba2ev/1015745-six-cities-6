import React from "react";
import {render} from '@testing-library/react';
import PremiumMark from './premium-mark';
import {markPremiumTypes} from '../../const';

it(`PremiumMark should render correctly`, () => {
  const {container} = render(<PremiumMark type={markPremiumTypes.CARD}/>);

  expect(container).toMatchSnapshot();
});
