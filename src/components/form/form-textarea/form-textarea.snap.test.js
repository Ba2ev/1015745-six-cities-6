import React from "react";
import {render} from '@testing-library/react';
import FormTextArea from './form-textarea';

it(`TextArea should render correctly`, () => {
  const handler = jest.fn();

  const {container} = render(
      <FormTextArea handler={handler}/>
  );

  expect(container).toMatchSnapshot();
});
