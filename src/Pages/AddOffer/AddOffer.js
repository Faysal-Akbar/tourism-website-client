import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddOffer.css';

const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://ghoulish-moonlight-52209.herokuapp.com/addOffer', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Offer Added Successfully');
                reset();
            }
        })
    };
    return (
        <Container className="add-offer">
            <h4 className="mt-5 text-warning">Add New Offer</h4>
            <h2 className="mb-5">If Admin Want To Add An Offer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Enter Place Name"/>
                <input type="number" {...register("price")} placeholder="Offer price"/>
                <input {...register("description")} placeholder="Description"/>
                <input {...register("img")} placeholder="Enter Image URL"/>
                <input className="btn btn-danger" type="submit" />
            </form>
        </Container>
    );
};

export default AddOffer;