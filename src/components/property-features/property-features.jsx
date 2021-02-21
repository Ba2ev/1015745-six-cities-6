import React from 'react';
import PropTypes from 'prop-types';

const PropertyFeatures = ({type, bedrooms, adultsMax}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${adultsMax} adults`}
      </li>
    </ul>
  );
};

PropertyFeatures.propTypes = {
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adultsMax: PropTypes.number.isRequired,
};

export default PropertyFeatures;
