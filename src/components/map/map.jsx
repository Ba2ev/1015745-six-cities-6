import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {mapTypesParams} from '../../const';
import PropTypes from 'prop-types';

import "leaflet/dist/leaflet.css";

const Map = ({place, points, type}) => {

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: place.latitude,
        lng: place.longitude
      },
      zoom: place.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: mapTypesParams[type].iconUrl,
        iconSize: mapTypesParams[type].iconSize
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, [place, points]);

  return (
    <div id="map" style={{height: `${mapTypesParams[type].height}px`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  place: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
  })).isRequired,
  type: PropTypes.string.isRequired
};

export default Map;
