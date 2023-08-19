import React, { useState } from 'react';
import axios from 'axios';

const AddressToLatLng = () => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);



  const handleConvertAddress = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&AIzaSyAFMbjca_jtUOeaQoeBZIiDbXmdyrN0Di0`
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      } else {
        setLatitude(null);
        setLongitude(null);
      }

      console.log(response.data);

    } catch (error) {
      console.error('Error converting address to coordinates:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter an address"
      />
      <button onClick={handleConvertAddress}>Convert</button>
      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default AddressToLatLng;
