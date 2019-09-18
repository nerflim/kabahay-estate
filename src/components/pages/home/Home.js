import React from 'react';
import Header from './Header';
import Explore from './Explore';
import LatestNews from './LatestNews';
import Partners from './Partners';

const Home = () => {
	return (
		<div className='homepage'>
			<Header />
			<Explore />
			<LatestNews />
			<Partners />
		</div>
	);
};

export default Home;
