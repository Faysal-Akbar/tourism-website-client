import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../src/images/logo/logo.png';
import img from '../../../src/images/footer-image/footer_image.png';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
            <div className="row">
                <div className="col-lg-4">
                   <div className="d-flex">
                        <img
                            src={logo}
                            width="60"
                            height="45"
                            className="d-inline-block align-top"
                            alt=""
                        />
                            <h2 className="text-white mb-4">Hero <span className="text-danger">Traveller</span></h2>
                   </div>
                    <h6 className="text-white mb-4">Hero Traveller is one of the best agency for tour lovers. Traveller can satisfied with Hero Traveller.</h6>
                    <h4 className="text-white text-start mb-2">Follow us :</h4>
                    <div className="text-start">
                    <i className="fab fa-facebook fa-2x text-white me-3"></i>
                    <i className="fab fa-instagram fa-2x text-white me-3"></i>
                    <i className="fab fa-twitter fa-2x text-white"></i>
                    </div>
                </div>
                <div className="col-lg-4 text-white">
                    <h4 className="mb-4 text-start">Contact Us</h4>
                    <div className="d-flex align-items-center mb-4">
                        <div><i className="fas fa-phone-volume fa-1x me-2"></i></div>
                        <div>
                            <h6>+1876391114</h6>
                            <h6>+1787870723</h6>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div><i className="fas fa-mail-bulk fa-1x me-2"></i></div>
                        <div>
                            <h6>herotravell@gmail.com</h6>
                            <h6>faysalrj361@gmail.com</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-white mb-4">We Accepts :</h4>
                    <img width="100%" className="rounded" src={img} alt="" />
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Footer;