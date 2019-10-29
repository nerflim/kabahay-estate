import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SearchBar = props => {
	// prop should take
	// current search
	const searchTypes = ['buy', 'rent', 'agents', 'architects', 'engineers'];
	const [activeType, setActiveType] = useState(searchTypes[0]);
	const [isType, setIsType] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
	};

	const typeHandler = item => {
		setActiveType(item);
		setIsType(false);
	};

	return (
		<form className='md:w-8/12 w-full px-3 md:px-0 m-auto py-8 text-sm' onSubmit={e => submitHandler(e)}>
			<button type='button' className='block text-xs text-gray-500 focus:outline-none ml-2 mb-2 capitalize' onClick={() => setIsType(!isType)}>
				{activeType} <FontAwesomeIcon icon={faCaretDown} size='sm' className='ml-2' />
			</button>
			{isType ? (
				<div className='absolute bg-white z-20 border rounded border-b-0 shadow'>
					<ul>
						{searchTypes.map((item, index) => (
							<li key={index}>
								<button
									type='button'
									className={`px-3 py-1 text-xs block w-full text-left border-b border-gray-200 capitalize focus:outline-none ${
										item === activeType ? 'bg-primary text-white' : 'text-gray-500'
									}`}
									onClick={() => typeHandler(item)}>
									{item}
								</button>
							</li>
						))}
					</ul>
				</div>
			) : null}
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
