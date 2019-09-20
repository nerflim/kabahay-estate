import React from 'react';
import Header from './Header';
import Explore from './Explore';
import LatestNews from './LatestNews';
import Partners from './Partners';
import NewsLetter from './NewsLetter';
import Market from './Market';

const Home = () => {
	return (
		<div className='homepage'>
			<Header />
			<Explore />
			<LatestNews />
			<Market />
			<Partners />
			<NewsLetter />
		</div>
	);
};

export default Home;
