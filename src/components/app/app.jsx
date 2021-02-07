import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignIn from './../../pages/sign-in/sing-in';
import Favourites from './../../pages/favourites/favourites';
import Room from './../../pages/room/room';
import NotFoundPage from './../../pages/not-found-page/not-found-page';


const App = ({places}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage places={places}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route excat path="/favourites">
          <Favourites/>
        </Route>
        <Route exact path="/offer/:id?">
          <Room />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            imageName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            isFavourite: PropTypes.bool.isRequired,
            rating: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
          }
      )
  ).isRequired
};

export default App;
