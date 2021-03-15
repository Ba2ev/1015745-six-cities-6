import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {routes} from '../../const';
import withPrivateRoute from '../../hocs/withPrivateRoute/';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = () => {

  const {isAuthorized} = useSelector((state) => state.USER);

  const FavoritesPrivateRoute = withPrivateRoute(FavoritesPage, isAuthorized);
  const LoginPrivateRoute = withPrivateRoute(LoginPage, !isAuthorized, routes.MAIN);

  return (
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
  );
};

export default App;
