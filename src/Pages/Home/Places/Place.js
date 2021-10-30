import React from 'react';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const {_id, name, price, description, img} = props.place;
    return (
            <div className="col-lg-4 mb-5 shadow-lg p-3">
                <div>
                <img width="100%" src={img} alt="" />
                </div>
                <div className="text-start">
                <h4 className="text-danger mt-3">{name}</h4>
                <h5>Per Person : <span className="text-danger">${price}</span></h5>
                <h6>{description}</h6>
                <Link to={`/placeOrder/${_id}`}>
                    <button className="btn btn-danger">Book Now</button>
                </Link>
                </div>
            </div>
    );
};

export default Place;