import React from 'react';
import SearchBar from '../../SearchBar';
import SearchItem from './SearchItem';
import SearchFilter from './SearchFilter';

const SearchProperty = () => {
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
					<SearchItem />
					<SearchItem />
				</div>
				<div className='w-4/12 p-3'>
					<SearchFilter />
				</div>
			</div>
		</div>
	);
};

export default SearchProperty;
