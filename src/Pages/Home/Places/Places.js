import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Place from './Place';


const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, []);

    return (
        <Container className="mt-5 mb-5">
            <h5 className="text-danger">Choose Your Package</h5>
            <h2 className="mb-4">Select Your Best Package <br /> For Your Travel</h2>
            <div className="row">
                {
                places.map(place => <Place
                    key={place._id}
                    place={place}
                ></Place>)
                }
            </div>
        </Container>
    );
};

export default Places;