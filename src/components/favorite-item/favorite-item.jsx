import React from 'react';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {cardListTypes} from '../../const';
import PlaceList from '../place-list';

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
      <PlaceList offers={offers} listType={cardListTypes.FAVORITES}/>
    </li>
  );
};

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

export default FavoriteItem;
