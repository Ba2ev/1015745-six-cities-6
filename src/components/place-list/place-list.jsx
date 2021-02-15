import React from 'react';
import PropTypes from 'prop-types';
import {cardTypes} from '../../const';
import Card from '../card/card';

const PlaceList = ({offers}) => {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">PlaceList</h2>
      <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
      Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        { offers.map((offer) => <Card key={offer.id} offer={offer} cardType={cardTypes.CITIES}/>) }
      </div>
    </section>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            imagePreview: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            isFavorite: PropTypes.bool.isRequired,
            rating: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
          }
      )
  ).isRequired
};

export default PlaceList;
