import React from 'react';
import PropTypes from 'prop-types';
const ImageList = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => {
          return (
            <div key={image} className="property__image-wrapper">
              <img className="property__image" src={`img/${image}.jpg`} alt="Photo studio"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageList;
