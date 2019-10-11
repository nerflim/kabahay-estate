import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import FilterContainer from './FilterContainer';

const Search = props => {
	const [searchType, setSearchType] = useState('buy');
	const [isFilter, setIsFilter] = useState(false);

	const searchTypeClass = 'p-1 rounded-full text-sm w-24 text-primary border border-primary hover:bg-white focus:outline-none capitalize';
	const searchTypeActiveClass = 'p-1 mb-1 bg-primary rounded-full text-sm w-24 text-white border border-primary focus:outline-none capitalize';
	const searchTypes = ['buy', 'rent', 'agents', 'architects', 'engineers'];

	const filterItemClass = 'mr-3 focus:outline-none mb-2 py-1 px-2 hover:bg-white rounded-full';
	const filterItemActiveClass = 'mr-3 focus:outline-none mb-2 py-1 px-2 bg-white rounded-full';

	const submitHandler = e => {
		e.preventDefault();

		// redirects to search page
		props.history.push('/search/property');
	};
	return (
		<div className='self-center m-auto container'>
			<div className='w-8/12 m-auto flex'>
				{searchTypes.map((item, index) => (
					<div className='text-center mr-5' key={index}>
						<button className={searchType === item ? searchTypeActiveClass : searchTypeClass} onClick={() => setSearchType(item)}>
							{item}
						</button>
						{searchType === item ? <div className='arrow-up m-auto'></div> : null}
					</div>
				))}
			</div>

			<form className='w-8/12 m-auto' onSubmit={e => submitHandler(e)}>
				<div className='flex'>
					<div className='rounded-l-full w-10/12 border-primary border border-r-0 overflow-hidden text-gray-500'>
						<span className='absolute py-3 px-5 text-primary'>
							<FontAwesomeIcon icon={faMapMarkerAlt} />
						</span>

						<input
							type='text'
							className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none'
							placeholder='Enter a location, project or developer name'
						/>
					</div>
					<div className='w-2/12 bg-white border border-primary border-l-0 rounded-r-full overflow-hidden'>
						<button type='submit' className='bg-primary text-white p-3 rounded-l-full w-full focus:outline-none h-full'>
							Search
						</button>
					</div>
				</div>
			</form>

			{/* filter */}

			<div className='w-8/12 m-auto py-1 mt-1 flex text-sm text-primary'>
				<button className={isFilter ? filterItemActiveClass : filterItemClass} onClick={() => setIsFilter(!isFilter)}>
					<FontAwesomeIcon icon={faSlidersH} className='text-xs mr-1' /> Filters
				</button>
			</div>

			{isFilter ? <FilterContainer /> : null}
		</div>
	);
};

export default Search;
