import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, routes} from '../../const';


const PrivateRoute = ({render, path, exact, isAuth}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        switch (path) {
          case routes.FAVORITES:
            return isAuth ? render(routeProps) : <Redirect to={routes.LOGIN} />;
          case routes.LOGIN:
            return !isAuth ? render(routeProps) : <Redirect to={routes.MAIN} />;
          default:
            return <Redirect to={routes.MAIN}/>;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const isAuth = state.authorizationStatus === AuthorizationStatus.AUTH;

  return {
    isAuth,
  };
};


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
