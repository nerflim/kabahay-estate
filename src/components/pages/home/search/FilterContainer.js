import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FilterItems from './FilterItems';

const FilterContainer = () => {
	const [active, setActive] = useState('');

	const filterItemClass = 'mr-3 focus:outline-none mb-2 py-1 px-2 hover:bg-white rounded-full hover:shadow';
	const filterItemActiveClass = 'mr-3 focus:outline-none mb-2 py-1 px-2 bg-white rounded-full shadow';

	const filterItems = [
		{ name: 'All Property Types', items: ['All Property Types', 'House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land'] },
		{ name: 'Beds', items: ['Any', 'Studio', '1 Bed', '2 Beds', '3 Beds', '4 Beds', '5 Beds'] }
	];

	return (
		<div className='w-8/12 m-auto py-1 mt-1 flex text-sm text-primary'>
			{filterItems.map((item, index) => (
				<div key={index}>
					<button
						className={active === item.name ? filterItemActiveClass : filterItemClass}
						onClick={() => (active === item.name ? setActive('') : setActive(item.name))}>
						{item.name}
						<FontAwesomeIcon icon={faChevronDown} className='text-xs ml-1' />
					</button>

					{/* show items if active */}
					{active === item.name ? <FilterItems items={item.items} /> : null}
				</div>
			))}

			<button className={active === 'price' ? filterItemActiveClass : filterItemClass} onClick={() => setActive('price')}>
				Price
				<FontAwesomeIcon icon={faChevronDown} className='text-xs ml-1' />
			</button>
			<button className={active === 'property size' ? filterItemActiveClass : filterItemClass} onClick={() => setActive('property size')}>
				Property Size
				<FontAwesomeIcon icon={faChevronDown} className='text-xs ml-1' />
			</button>
		</div>
	);
};

export default FilterContainer;
