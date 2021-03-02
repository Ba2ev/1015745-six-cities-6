import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from '../../const';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.MAIN}>
          <MainPage/>
        </Route>
        <Route exact path={routes.LOGIN}>
          <LoginPage/>
        </Route>
        <Route excat path={routes.FAVORITES}>
          <FavoritesPage />
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

export default App;
