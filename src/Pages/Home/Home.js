import React from 'react';
import Banner from './Banner/Banner';
import Places from './Places/Places';
import Feedback from './Feedback/Feedback';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Feedback></Feedback>
            <About></About>
        </div>
    );
};

export default Home;