import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';

const Getaways = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then(setPlaces);
  }, []);

  console.log(places);
  return <PlaceList places={places} />;
};

export default Getaways;
