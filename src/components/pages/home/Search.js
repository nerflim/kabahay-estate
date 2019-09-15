import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
	const submitHandler = () => {
		console.log('Submit Called');
	};
	return (
		<div className='self-center m-auto container'>
			<form className='w-8/12 m-auto' onSubmit={() => submitHandler()}>
				<div className='flex'>
					<div className='rounded-l-full w-10/12 border-primary border border-r-0 overflow-hidden text-gray-500'>
						<span className='absolute py-3 px-5 text-primary'>
							<FontAwesomeIcon icon={faMapMarkerAlt} />
						</span>

						<input
							type='text'
							className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700'
							placeholder='Enter a location, project or developer name'
						/>
					</div>
					<div className='w-2/12 bg-white border border-primary border-l-0 rounded-r-full overflow-hidden'>
						<button type='submit' className='bg-primary text-white p-3 rounded-l-full w-full focus:outline-none'>
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
