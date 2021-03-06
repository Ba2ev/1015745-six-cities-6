import React, {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {mapTypesParams} from '../../const';

import "leaflet/dist/leaflet.css";

const Map = ({place, points, mapType}) => {

  const {hoveredOffer} = useSelector((state) => state.DATA);

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

    const customIcon = leaflet.icon({
      iconUrl: mapTypesParams[mapType].iconActiveUrl,
      iconSize: mapTypesParams[mapType].iconSize
    });

    if (place.title) {
      leaflet.marker({
        lat: place.latitude,
        lng: place.longitude
      },
      {
        icon: customIcon
      })
      .bindPopup(place.title)
      .addTo(mapRef.current);
    }

    return () => {
      mapRef.current.remove();
    };
  }, [place]);

  useEffect(() => {

    const markers = points.map((point) => {
      const currentIconUrl = point.id === hoveredOffer ? mapTypesParams[mapType].iconActiveUrl : mapTypesParams[mapType].iconUrl;

      const customIcon = leaflet.icon({
        iconUrl: currentIconUrl,
        iconSize: mapTypesParams[mapType].iconSize
      });

      return leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .bindPopup(point.title);
    });

    let map = leaflet.layerGroup(markers).addTo(mapRef.current);

    return () => map.clearLayers();
  }, [place, points, hoveredOffer]);

  return (
    <section className={`${mapTypesParams[mapType].mixClass || ``} map`}>
      <div id="map" style={{height: `${mapTypesParams[mapType].height}`}}></div>
    </section>
  );
};

Map.propTypes = {
  place: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
  })).isRequired,
  mapType: PropTypes.string.isRequired,
};

export default Map;
