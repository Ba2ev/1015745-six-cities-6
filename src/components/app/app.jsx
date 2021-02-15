import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {propsOffers} from '../props-validation';
import {routes} from '../../const';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.MAIN}>
          <MainPage offers={offers}/>
        </Route>
        <Route exact path={routes.LOGIN}>
          <LoginPage/>
        </Route>
        <Route excat
          path={routes.FAVORITES}
          render = {() => {
            const favoriteOffers = offers.filter((offer) => offer.isFavorite);
            return <FavoritesPage offers={favoriteOffers}/>;
          }}>
        </Route>
        <Route exact
          path={routes.OFFER}
          render= { ({match}) => {
            const currentOffer = offers.find((offer) => offer.id === Number(match.params.id));
            return <RoomPage offer={currentOffer}/>;
          }
          }>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: propsOffers,
};

export default App;
