import React from 'react';
import PropTypes from 'prop-types';
const ImageList = ({images, limit = 0}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, limit).map((image) => {
          return (
            <div key={image} className="property__image-wrapper">
              <img className="property__image" src={image} alt="Photo studio"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  limit: PropTypes.number
};

export default ImageList;
