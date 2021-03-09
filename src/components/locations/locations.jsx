import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateCity} from '../../store/action';
import {locations} from '../../const';

const Locations = () => {

  const dispatch = useDispatch();

  const {city} = useSelector((state) => state.DATA);

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    dispatch(updateCity(textContent));
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

export default Locations;
