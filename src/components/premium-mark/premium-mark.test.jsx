import React from "react";
import {render} from '@testing-library/react';
import PremiumMark from './premium-mark';
import {markPremiumTypes} from '../../const';

it(`PremiumMark should render correctly`, () => {
  const {getByText} = render(<PremiumMark type={markPremiumTypes.CARD}/>);

  const markText = getByText(`Premium`);

  expect(markText).toBeInTheDocument();
});
