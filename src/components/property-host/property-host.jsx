import React from 'react';
import PropTypes from 'prop-types';
import {userTypes} from '../../const';
import User from '../user';

const PropertyHost = ({host, description}) => {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <User user={host} userType={userTypes.PROPERTY}/>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

PropertyHost.propTypes = {
  host: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default PropertyHost;
