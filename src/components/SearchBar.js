import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SearchBar = props => {
	// prop should take
	// current search
	const submitHandler = e => {
		e.preventDefault();
	};

	return (
		<form className='md:w-8/12 w-full px-3 md:px-0 m-auto py-8 text-sm' onSubmit={e => submitHandler(e)}>
			<p className='text-xs mb-2 ml-5 text-gray-500'>Property</p>
			<div className='flex'>
				<div className='rounded-l-full w-full border-primary border border-r-0 overflow-hidden text-gray-500'>
					<span className='absolute py-3 px-5 text-primary'>
						<FontAwesomeIcon icon={faMapMarkerAlt} />
					</span>

					<input type='text' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Search' />
				</div>
				<div className='bg-white border border-primary border-l-0 rounded-r-full overflow-hidden flex-shrink-0'>
					<button type='submit' className='bg-primary text-white py-3 px-5 rounded-l-full w-full focus:outline-none h-full'>
						Search
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
