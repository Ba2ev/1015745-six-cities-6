import React from 'react';
import {render} from '@testing-library/react';
import withLoadingScreen from './with-loading-screen';

describe(`should HOC withLoadingScreen render correctly`, () => {
  it(`should HOC withLoadingScreen render correctly after loaded data`, () => {
    const Component = () => <h1>Intro Component</h1>;
    const ComponentWrapped = withLoadingScreen(Component);

    const {getByText} = render(<ComponentWrapped isLoaded/>);

    expect(getByText(`Intro Component`)).toBeInTheDocument();
  });

  it(`should HOC withLoadingScreen render correctly with loading data`, () => {
    const Component = () => <h1>Intro Component</h1>;
    const ComponentWrapped = withLoadingScreen(Component);

    const {getByText} = render(<ComponentWrapped isLoaded={false}/>);

    expect(getByText(`Loading ...`)).toBeInTheDocument();
  });
});

