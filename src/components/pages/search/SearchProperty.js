import React from 'react';
import SearchBar from '../../SearchBar';
import SearchItem from './SearchItem';
import SearchFilter from './SearchFilter';
import { withRouter } from 'react-router';

const SearchProperty = () => {
	const SearchItemWithRouter = withRouter(SearchItem);

	return (
		<div className='container mx-auto'>
			<SearchBar />
			<div className='flex'>
				<div className='w-9/12 p-3'>
					<h3 className='text-lg'>
						Real Estate & Property for sale in <strong>Davao City</strong>
					</h3>
					<p className='text-sm'>1-10 of 140 results</p>
				</div>
				<div className='w-4/12 p-3 flex'>
					<div className='ml-auto'>
						<p className='text-base mb-3 mr-3 inline-block'>Sort by:</p>
						<div className='relative inline-block'>
							<select className='block appearance-none w-full bg-white border p-3 pr-8 focus:outline-none text-sm rounded-full'>
								<option>Most Relevant</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex'>
				<div className='w-9/12 p-3'>
					<SearchItemWithRouter />
					<SearchItemWithRouter />
					<SearchItemWithRouter />
					<SearchItemWithRouter />
					<SearchItemWithRouter />
				</div>
				<div className='w-4/12 p-3'>
					<SearchFilter />
				</div>
			</div>
		</div>
	);
};

export default SearchProperty;
