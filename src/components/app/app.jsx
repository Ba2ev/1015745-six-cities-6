import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from "../../browser-history";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {routes, AuthorizationStatus} from '../../const';
import withPrivateRoute from '../../hocs/withPrivateRoute/';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = ({isAuth}) => {

  const FavoritesPrivateRoute = withPrivateRoute(FavoritesPage, isAuth);
  const LoginPrivateRoute = withPrivateRoute(LoginPage, !isAuth, routes.MAIN);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={routes.MAIN}>
          <MainPage/>
        </Route>
        <Route exact path={routes.LOGIN}>
          <LoginPrivateRoute />
        </Route>
        <Route exact path={routes.FAVORITES}>
          <FavoritesPrivateRoute />
        </Route>
        <Route exact
          path={routes.OFFER}
          render= { ({match}) => <RoomPage id={match.params.id}/> }>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = ({USER}) => ({
  isAuth: USER.authorizationStatus === AuthorizationStatus.AUTH,
});


export {App};
export default connect(mapStateToProps)(App);
