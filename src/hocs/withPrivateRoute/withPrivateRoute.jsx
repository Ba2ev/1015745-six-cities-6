import React from 'react';
import {Redirect} from 'react-router-dom';
import {routes} from '../../const';

const withPrivateRoute = (Component, isAuth, redirectRoute = routes.LOGIN) => {
  const WithPrivateRoute = (props) => {
    if (isAuth) {
      return <Component {...props}/>;
    }
    return <Redirect to={redirectRoute}/>;
  };
  return WithPrivateRoute;
};

export default withPrivateRoute;
