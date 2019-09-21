import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const SearchFilter = () => {
	const propertyTypes = ['Any', 'Commercial', 'Land', 'House', 'Apartment', 'Condominium', 'Forclosures'];
	const bedrooms = [1, 2, 3, 4, 5];
	return (
		<div>
			<p className='text-base mb-3'>Sort by:</p>
			<div className='flex'>
				<div className='inline-block relative w-1/2 mr-3'>
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
				<div className='w-1/2 ml-3'>
					<button type='button' className='p-3 rounded-full bg-white border hover:bg-primary hover:text-white w-full text-sm'>
						<FontAwesomeIcon icon={faStar} className='mr-2' size='sm' /> Save Search
					</button>
				</div>
			</div>

			<div className='p-3 mt-3 rounded-lg border shadow'>
				<div className='mb-3'>
					<label>Offer Type:</label>
					<div>
						<input type='radio' name='offerType' id='offerType1' /> <label htmlFor='offerType1'>Buy</label>
					</div>
					<div>
						<input type='radio' name='offerType' id='offerType2' /> <label htmlFor='offerType2'>Rent</label>
					</div>
				</div>
				<div className='mb-3'>
					<label>Property Type:</label>
					{propertyTypes.map((item, index) => (
						<div key={index}>
							<input type='checkbox' name='propertyType' id={`propertyType${index}`} /> <label htmlFor={`propertyType${index}`}>{item}</label>
						</div>
					))}
				</div>
				<div className='mb-3'>
					<label>Price:</label>
					<div className='flex items-center'>
						<div className='flex-1'>
							<input type='number' placeholder='Minimum' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
						<div className='mx-3'>-</div>
						<div className='flex-1'>
							<input type='number' placeholder='Maximum' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
					</div>
				</div>
				<div className='mb-3'>
					<label>Floor Area:</label>
					<div className='flex items-center'>
						<div className='flex-1'>
							<input type='number' placeholder='Minimum Sqm' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
						<div className='mx-3'>-</div>
						<div className='flex-1'>
							<input type='number' placeholder='Maximum Sqm' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
					</div>
				</div>
				<div className='mb-3'>
					<label>Land Area:</label>
					<div className='flex items-center'>
						<div className='flex-1'>
							<input type='number' placeholder='Minimum Sqm' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
						<div className='mx-3'>-</div>
						<div className='flex-1'>
							<input type='number' placeholder='Maximum Sqm' className='border rounded-full w-full p-2 focus:outline-none' />
						</div>
					</div>
				</div>
				<div className='mb-3'>
					<label>Bedrooms:</label>
					<div>
						{bedrooms.map((item, index) => (
							<button
								className='p-2 rounded-full border inline-block h-12 w-12 mr-3 hover:border-primary hover:text-primary hover:shadow focus:outline-none'
								key={index}>
								{item === 5 ? `${item}+` : item}
							</button>
						))}
					</div>
				</div>
				<div className='mb-3'>
					<label>Bathrooms:</label>
					<div>
						{bedrooms.map((item, index) => (
							<button
								className='p-2 rounded-full border inline-block h-12 w-12 mr-3 hover:border-primary hover:text-primary hover:shadow focus:outline-none'
								key={index}>
								{item === 5 ? `${item}+` : item}
							</button>
						))}
					</div>
				</div>
				<div className='mb-3'>
					<label>Car Parks:</label>
					<div>
						{bedrooms.map((item, index) => (
							<button
								className='p-2 rounded-full border inline-block h-12 w-12 mr-3 hover:border-primary hover:text-primary hover:shadow focus:outline-none'
								key={index}>
								{item === 5 ? `${item}+` : item}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchFilter;
