import React from 'react';
import SearchBar from '../../SearchBar';
import SearchItem from './SearchItem';

const Search = () => {
	return (
		<div className='container mx-auto'>
			<SearchBar />
			<h3 className='text-lg'>
				Real Estate & Property for sale in <strong>Davao City</strong>
			</h3>
			<p className='text-sm'>1-10 of 140 results</p>

			<div className='flex'>
				<div className='w-9/12 p-3'>
					<SearchItem />
					<SearchItem />
					<SearchItem />
				</div>
				<div className='w-4/12 bg-blue-500 p-3'></div>
			</div>
		</div>
	);
};

export default Search;
