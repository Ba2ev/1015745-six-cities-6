import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchOfferData, fetchOfferComments, fetchOfferNearby} from "../../../store/api-actions";
import withLoadingScreen from "../../../hocs/withLoadingScreen";
import Header from '../../layouts/header';
import Property from '../../property';


const RoomPage = ({id, isLoaded, onLoadOffer}) => {

  useEffect(() => {
    onLoadOffer(id);
  }, [isLoaded]);

  const PropertyWithLoading = withLoadingScreen(Property);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <PropertyWithLoading isLoaded={isLoaded} />
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  id: PropTypes.string,
  isLoaded: PropTypes.bool,
  onLoadOffer: PropTypes.func,
};

const mapStateToProps = ({currentOffer}, props) => {

  const isLoaded = currentOffer.isDataLoaded && currentOffer.isCoomentsLoaded && currentOffer.isNearbyLoaded;

  return {
    id: props.id,
    isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    dispatch(fetchOfferData(id));
    dispatch(fetchOfferComments(id));
    dispatch(fetchOfferNearby(id));
  },
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
