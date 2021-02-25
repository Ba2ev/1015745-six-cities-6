import React from 'react';
import PropTypes from 'prop-types';
import {locations} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Locations = ({city, updateCity}) => {

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    updateCity(textContent);
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
  updateCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  updateCity(city) {
    dispatch(ActionCreator.updateCity(city));
  },
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
