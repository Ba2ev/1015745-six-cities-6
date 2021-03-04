import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from "../../browser-history";
import {routes} from '../../const';
import PrivateRoute from '../private-route';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={routes.MAIN}>
          <MainPage/>
        </Route>
        <PrivateRoute exact
          path={routes.LOGIN}
          render={() => <LoginPage/>}
        >
        </PrivateRoute>
        <PrivateRoute exact
          path={routes.FAVORITES}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
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

export default App;
