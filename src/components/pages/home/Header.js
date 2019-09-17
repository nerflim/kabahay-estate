import React from 'react';
import Search from './search/Search';

const Header = () => {
	return (
		<div className='header h-full bg-contain bg-right bg-no-repeat flex'>
			<Search />
		</div>
	);
};

export default Header;
