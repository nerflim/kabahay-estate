import React from 'react';

const FilterItems = props => {
	return (
		<ul className='bg-white text-gray-700 text-sm absolute rounded border'>
			{props.items.map((item, index) => (
				<li key={index}>
					<button className='px-3 py-1 border-b focus:outline-none w-full text-left hover:bg-gray-200'>{item}</button>
				</li>
			))}
		</ul>
	);
};

export default FilterItems;
