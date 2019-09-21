import React from 'react';
import Search from './search/Search';
import { withRouter } from 'react-router';

const SearchWithRouter = withRouter(Search);

const Header = () => {
	return (
		<div className='header h-full bg-contain bg-right bg-no-repeat flex'>
			<SearchWithRouter />
		</div>
	);
};

export default Header;
