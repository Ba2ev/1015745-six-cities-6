import React from 'react';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {cardTypes} from '../../const';
import PlaceCard from '../place-card/place-card';

const FavoriteItem = ({city, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={cardTypes.FAVORITES}/>)}
      </div>
    </li>
  );
};

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

export default FavoriteItem;
