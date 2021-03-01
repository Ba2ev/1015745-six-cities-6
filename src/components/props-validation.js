import PropTypes from 'prop-types';

export const propsOffer = PropTypes.shape(
    {
      maxAdults: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
      }),
      description: PropTypes.string.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isPro: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }),
      id: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      isFavorite: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }
);

export const propsOffers = PropTypes.arrayOf(propsOffer).isRequired;
