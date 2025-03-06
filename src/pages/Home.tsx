import React from 'react';
import Intro from '../components/Intro/Intro';
import Brands from '../components/Brands/Brands';
import Offers from '../components/Offers/Offer';


const Home: React.FC = () => {
	return (
		<>
			<Intro />
			<Brands />
			<Offers />
		</>
	);
};

export default Home;