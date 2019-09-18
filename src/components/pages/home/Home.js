import React from 'react';
import Header from './Header';
import Explore from './Explore';
import LatestNews from './LatestNews';

const Home = () => {
	return (
		<div className='homepage'>
			<Header />
			<Explore />
			<LatestNews />
		</div>
	);
};

export default Home;
