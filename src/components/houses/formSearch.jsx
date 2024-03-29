import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

function LocationN({ address, onMapClick }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAFMbjca_jtUOeaQoeBZIiDbXmdyrN0Di0',
  });

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  
  useEffect(() => {
    if (map && address) {
      const newCenter = { lat: address.latitude, lng: address.longitude };
      map.panTo(newCenter);
    }
  }, [map, address]);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(parseFloat(address));
    map.fitBounds(bounds);
    setMap(map);

  
    map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      
      onMapClick(lat, lng)

      if (map && address) {
        const newCenter = { lat: lat, lng: lng };
        map.panTo(newCenter);
  
        if (marker) {
          marker.setPosition(newCenter);
        } else {
          const newMarker = new window.google.maps.Marker({
            position: newCenter,
            map,
            icon: {
              url: 'https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg',
              size: new window.google.maps.Size(40, 40),
            },
          });
          setMarker(newMarker);
        }
      }
    }, [map, marker, onMapClick, address])
    });
  

  const onUnmount = useCallback(function callback(map) {
    if (marker) {
      marker.setMap(null); 
    }
    setMap(null);
  }, [marker]);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={address}
      setZoom={20}
      mapTypeId="hybrid"
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
     
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(LocationN);
