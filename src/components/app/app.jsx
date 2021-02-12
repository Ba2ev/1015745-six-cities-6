import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {propsOffers} from '../props-validation';
import MainPage from '../pages/main-page/main-page';
import SignIn from '../pages/sign-in/sing-in';
import Favourites from '../pages/favourites/favourites';
import Room from '../pages/room/room';
import NotFoundPage from '../pages/not-found-page/not-found-page';

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route excat
          path="/favourites"
          render = {() => {
            const favOffers = offers.filter((offer) => offer.isFavourite);
            return <Favourites offers={favOffers}/>;
          }}>
        </Route>
        <Route exact
          path="/offer/:id"
          render= { ({match}) => {
            const currentOffer = offers.find((offer) => offer.id === Number(match.params.id));
            return <Room offer={currentOffer}/>;
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
