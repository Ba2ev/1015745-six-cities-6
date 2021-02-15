import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {propsOffers} from '../props-validation';
import {cardTypes} from '../../const';
import Card from '../card/card';

const FavoriteRow = ({city, offers}) => {
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
        {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={cardTypes.FAVORITES}/>)}
      </div>
    </Fragment>
  );
};

FavoriteRow.propTypes = {
  city: PropTypes.string.isRequired,
  offers: propsOffers,
};

export default FavoriteRow;
