import React from 'react';
import {locations} from '../../../mock';
const Locations = () => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map(({name, isActive}) => (
          <li key={name} className="locations__item">
            <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Locations;
