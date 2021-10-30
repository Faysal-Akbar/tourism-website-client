import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                height="600px"
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="600px"
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Tour is actractive for tour lovers. we can try to fly with country.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="600px"
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;