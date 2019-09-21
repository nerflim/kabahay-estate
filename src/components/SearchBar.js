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
		<form className='w-8/12 m-auto py-8' onSubmit={e => submitHandler(e)}>
			<div className='flex'>
				<div className='rounded-l-full w-10/12 border-primary border border-r-0 overflow-hidden text-gray-500'>
					<span className='absolute py-3 px-5 text-primary'>
						<FontAwesomeIcon icon={faMapMarkerAlt} />
					</span>

					<input type='text' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Search' />
				</div>
				<div className='w-2/12 bg-white border border-primary border-l-0 rounded-r-full overflow-hidden'>
					<button type='submit' className='bg-primary text-white p-3 rounded-l-full w-full focus:outline-none h-full'>
						Search
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
