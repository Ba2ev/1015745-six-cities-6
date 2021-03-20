import React from 'react';
import {render} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import withPrivateRoute from './with-private-route';
import {routes} from '../../const';

describe(`should HOC withPrivateRoute render correctly`, () => {
  it(`should HOC withPrivateRoute render correctly with authorisation`, () => {
    const Component = () => <h1>Intro Component</h1>;
    const ComponentWrapped = withPrivateRoute(Component, true, routes.LOGIN);

    const {container} = render(<ComponentWrapped />);

    expect(container).toMatchSnapshot();
  });

  it(`should HOC withPrivateRoute render correctly without authorisation`, () => {
    const history = createMemoryHistory();
    const Component = () => <h1>Intro Component</h1>;
    const ComponentWrapped = withPrivateRoute(Component, false, routes.LOGIN);

    const {container} = render(
        <Router history={history}>
          <Route exact path="/login"><h1>Login Component</h1></Route>
          <ComponentWrapped />
        </Router>
    );

    expect(container).toMatchSnapshot();
  });
});

