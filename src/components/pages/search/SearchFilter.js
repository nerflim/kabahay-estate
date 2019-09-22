import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const SearchFilter = () => {
	const propertyTypes = ['Any', 'Commercial', 'Land', 'House', 'Apartment', 'Condominium', 'Forclosures'];
	const bedrooms = [1, 2, 3, 4, 5];
	return (
		<div>
			<div className='flex mb-5'>
				<button
					type='button'
					className='p-3 rounded-full bg-white border border-primary text-primary hover:bg-primary hover:text-white w-full text-sm'>
					<FontAwesomeIcon icon={faStar} className='mr-2' size='sm' /> Save Search
				</button>
			</div>

			<p className='text-lg font-medium'>Filters</p>
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
