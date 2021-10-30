import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h5 className="text-danger">Why Hero Traveller</h5>
            <h2 className="mb-4">Why You Are Travel with <br />Hero Traveller</h2>
            <div className="row">
                <div className="col-lg-4 bg-secondary rounded p-3 w-25 ms-5 me-5">
                    <div className="text-white">
                    <i className="fas fa-user-tie fa-5x mb-3"></i>
                    <h4>1000+ Our World <br /> Wide Guide</h4>
                    </div>
                </div>
                <div className="col-lg-4 bg-secondary rounded p-3 w-25 ms-3 me-5">
                    <div className="text-white">
                    <i className="fas fa-handshake fa-5x mb-3"></i>
                    <h4>100% Trusted <br /> Travel Agency</h4>
                    </div>
                </div>
                <div className="col-lg-4 bg-secondary rounded p-3 ms-3 w-25">
                    <div className="text-white">
                    <i className="fas fa-running fa-5x mb-3"></i>
                    <h4>12+ Years of <br /> Travel Experience</h4>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default About;