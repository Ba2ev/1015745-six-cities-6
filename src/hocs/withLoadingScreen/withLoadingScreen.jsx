import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../../components/loading-screen';

const withLoadingScreen = (Component) => {
  const WithLoadingScreen = (props) => {
    return props.isLoaded ? <Component {...props}/> : <LoadingScreen />;
  };

  WithLoadingScreen.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
  };

  return WithLoadingScreen;
};

export default withLoadingScreen;
