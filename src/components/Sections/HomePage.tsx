import React from 'react';
import Intro from './Intro';
import Brands from './Brands';
import Offers from './Offers';

const HomePage: React.FC = () => {
    return (
        <>
            <Intro />
            <Brands />
            <Offers />
        </>
    );
};

export default HomePage;