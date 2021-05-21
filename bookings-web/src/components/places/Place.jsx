import React from 'react';
import PropTypes from 'prop-types';
import './PlaceStyle.css';

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <div>
      <ul className='place-ul'>
        <li>Name: {name}</li>
        <br />
        <li>Description: {description}</li>
        <br />
        <li>Location: {location}</li>
        <br />
        <li>Price per Night: ${pricePerNight}</li>
        <li><img src={image} /></li>
        <li><img src={imageThumbnail} /></li>
        <li>Max Guests: {maxGuests}</li>
        <br />
        <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
        {pool ? <li>Has a Pool!</li> : null}
        {wifi ? <li>Free Wifi</li> : null}
      </ul>
    </div>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
