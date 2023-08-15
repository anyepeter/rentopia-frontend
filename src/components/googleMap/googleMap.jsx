


import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 3.745,
  lng: 11.523
};

function GooglesMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAFMbjca_jtUOeaQoeBZIiDbXmdyrN0Di0"
  })
  
    const [map, setMap] = useState(null);
    const [zoom, setZoom] = useState(100);
  
    useEffect(() => {
      const savedZoom = localStorage.getItem('mapZoom');
      if (savedZoom) {
        setZoom(Number(savedZoom));
      }
    }, []);
  
    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map);
    }, []);
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null);
    }, []);
  
    const handleZoomChange = newZoom => {
      setZoom(newZoom);
      localStorage.setItem('mapZoom', newZoom);
    };
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    ) : <></>;
  }
  
  export default React.memo(GooglesMap);
  