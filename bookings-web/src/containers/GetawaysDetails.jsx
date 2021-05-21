import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Details from '../components/details/Details';
import { getPlaceById } from '../services/placesApi';


const GetawaysDetails = () => {
    const [place, setPlace] = useState({});
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        getPlaceById(id)
            .then(setPlace)
            .finally(() => setLoading(false))
    }, [])

    console.log(place);
    if (loading) return <h1>Loading...</h1>;
    return <Details place={place} />

}

export default GetawaysDetails;