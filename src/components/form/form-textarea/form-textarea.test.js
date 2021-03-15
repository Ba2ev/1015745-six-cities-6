import React from "react";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormTextArea from './form-textarea';

it(`TextArea should render correctly`, () => {
  const handler = jest.fn();

  render(
      <FormTextArea handler={handler}/>
  );

  const textArea = screen.getByTestId(`textarea`);

  expect(textArea).toBeInTheDocument();

  userEvent.type(textArea, `test`);

  expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
});
