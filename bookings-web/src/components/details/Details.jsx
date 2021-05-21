import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

const Details = ({ place }) => (
    <>
        <h1 class={'header'} >{place.name}</h1>
        <br /><br />
        <img class='image-1' src={place.image} />
        <img src={place.image_thumbnail} />
        <br />
        <p>Description: {place.description}</p>
        <br />
        <p>Location: {place.location}</p>
        <br />
        <p>Price Per Night: ${place.pricePerNight}</p>
        <br />
        <p>Max Guests: {place.maxGuests}</p>
        <br />
        <p>{place.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
        {place.pool ? <p>Has a Pool!</p> : null}
        {place.wifi ? <p>Free Wifi</p> : null}

    </>
)

Details.propTypes = {
    place: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.object.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            pricePerNight: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_thumbnail: PropTypes.string.isRequired,
            maxGuests: PropTypes.number.isRequired,
            petFriendly: PropTypes.bool.isRequired,
            pool: PropTypes.bool.isRequired,
            wifi: PropTypes.bool.isRequired,
        })
    ).isRequired
};

export default Details;