import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    const {placeId} = useParams();
    const [places, setPlaces] = useState([]);
    const {_id, name, description, price, img} = places;
    // console.log(places);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let myData = data;
        myData.id = _id;
        myData.placeName = name;
        myData.offerPrice = price;
        myData.placeDescription = description;
        myData.status = "PENDING";

        fetch('http://localhost:5000/addBooking', {
            method:"POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
                alert('Booking Successful');
                reset();
           }
        })
    };

    useEffect(() => {
        fetch(`http://localhost:5000/places/${placeId}`)
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, []);
    
    return (
        <Container className="mt-5">
            <h3 className="text-warning text-start">{name}</h3>
            <hr />
            <div className="row">
                <div className="col-lg-6 shadow-lg p-2">
                    <img width="100%" src={img} alt="" />
                    <h6 className="mt-3">{description}</h6>
                </div>

                <div className="col-lg-6 hook-form">
                    <h4>Your Information</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Your Name" />
                        <input defaultValue={user.email} {...register("email")} placeholder="Enter Your Email Address"/>
                        <input type="number" {...register("phone")} placeholder="Enter Your Phone Number" />
                        <input {...register("address")} placeholder="Enter Your Address" />
                        <input className="btn btn-danger" type="submit" />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;