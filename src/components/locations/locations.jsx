import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateCity} from '../../store/action';
import {locations} from '../../const';

const Locations = ({city, onUpdateCity}) => {

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    onUpdateCity(textContent);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map(({name}) => (
          <li key={name} className="locations__item">
            <a className={`locations__item-link tabs__item ${name === city ? `tabs__item--active` : ``}`} onClick={handleClick} href="#">
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  city: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({PLACES}) => ({
  city: PLACES.city
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateCity(city) {
    dispatch(updateCity(city));
  },
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
