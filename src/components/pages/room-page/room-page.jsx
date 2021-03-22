import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchOfferData, fetchOfferComments, fetchOfferNearby} from "../../../store/api-actions";
import withLoadingScreen from "../../../hocs/withLoadingScreen";
import Header from '../../layouts/header';
import Property from '../../property';

const PropertyWithLoading = withLoadingScreen(Property);

const RoomPage = ({id}) => {

  const dispatch = useDispatch();

  const isLoaded = useSelector(({DATA}) => DATA.currentOffer.isInfoLoaded && DATA.currentOffer.isCoomentsLoaded && DATA.currentOffer.isNearbyLoaded
  );

  useEffect(() => {
    dispatch(fetchOfferData(id));
    dispatch(fetchOfferComments(id));
    dispatch(fetchOfferNearby(id));
  }, [id, isLoaded]);

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
};

export default RoomPage;
