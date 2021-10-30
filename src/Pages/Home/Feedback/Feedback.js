import React from 'react';
import { Container } from 'react-bootstrap';
import traveller1 from '../../../images/traveller/traveller-1.jpg';
import traveller2 from '../../../images/traveller/traveller-2.jpg';
import traveller3 from '../../../images/traveller/traveller-3.jpg';

const Feedback = () => {
    return (
        <Container>
            <h5 className="text-danger mt-5">Our Traveller Say</h5>
            <h2 className="mb-4">What Our Traveller Say <br /> About Us</h2>
            <div className="row mb-5">
                <div className="col-lg-4 bg-light p-2 shadow-lg">
                    <div>
                        <img width="100%" src={traveller1} alt="" />
                    </div>
                    <h4 className="mt-3 text-danger">David Marshal</h4>
                    <h6>Hero Traveller agency is a good environmental agency. There behaviour is too good. There guidance almost awesome.</h6>
                </div>
                <div className="col-lg-4 bg-light p-2 shadow-lg">
                    <div>
                        <img width="100%" src={traveller2} alt="" />
                    </div>
                    <h4 className="mt-3 text-danger">Martin Clark</h4>
                    <h6>Hero Traveller agency is a good environmental agency. There behaviour is too good. There guidance almost awesome.</h6>
                </div>
                <div className="col-lg-4 bg-light p-2 shadow-lg">
                    <div>
                        <img width="100%" src={traveller3} alt="" />
                    </div>
                    <h4 className="mt-3 text-danger">Ema Watson</h4>
                    <h6>Hero Traveller agency is a good environmental agency. There behaviour is too good. There guidance almost awesome.</h6>
                </div>
            </div>
        </Container>
    );
};

export default Feedback;