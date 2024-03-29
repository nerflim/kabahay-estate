import React from 'react';
import SearchBar from '../../../SearchBar';
import SearchItem from './SearchItem';

const SearchAgent = () => {
	return (
		<div className='bg-gray-100'>
			<div className='container mx-auto'>
				<SearchBar />
				<div className='flex flex-col md:flex-row'>
					<div className='w-full md:w-9/12 p-3'>
						<h3 className='text-lg'>
							Real Estate & Property for sale in <strong>Davao City</strong>
						</h3>
						<p className='text-sm'>1-10 of 140 results</p>
					</div>
					<div className='w-full md:w-4/12 p-3 flex items-center border-t border-b md:border-t-0 md:border-b-0'>
						<p className='text-sm mr-3 inline-block flex-shrink-0'>Sort by:</p>
						<div className='relative inline-block w-full'>
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

				<div className='flex flex-col flex-wrap md:flex-row'>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
					<div className='w-1/3 px-3'>
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchAgent;
