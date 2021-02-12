import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import FavouriteCard from '../favourite-card/favourite-card';

const FavouriteRow = ({city, offers}) => {
  return (
    <Fragment>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavouriteCard key={offer.id} offer={offer}/>)}
      </div>
    </Fragment>
  );
};

FavouriteRow.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

export default FavouriteRow;
