import React from 'react';
import MainPage from '../../pages/main-page/main-page';
import PropTypes from 'prop-types';

const App = ({places}) => {
  return (
    <MainPage places={places}/>
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
