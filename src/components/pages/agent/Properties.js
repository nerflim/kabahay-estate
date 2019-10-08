import React from 'react';
import PropertyItem from '../../PropertyItem';

const Properties = () => {
	return (
		<div className='border-t'>
			<h2 className='text-xl mb-3 mt-8 text-center'>Properties</h2>
			<p className='text-center'>
				The property lists contain all properties Jane Doe has sold published on Kabahay Estate.
				<br /> It may not contain off-market and private sales, properties with unknown sold dates and sales that may be exclusively listed on other
				websites.
			</p>

			<div className='flex justify-center items-center py-5'>
				<button className='mx-2 px-8 py-2 border border-primary bg-primary text-white focus:outline-none rounded-full hover:shadow'>For Sale</button>
				<button className='mx-2 px-8 py-2 border border-gray-500 focus:outline-none rounded-full hover:border-primary hover:text-primary hover:shadow'>
					Sold
				</button>
				<button className='mx-2 px-8 py-2 border border-gray-500 focus:outline-none rounded-full hover:border-primary hover:text-primary hover:shadow'>
					For Rent
				</button>
			</div>

			<p className='text-xs text-gray-600 text-center'>
				Showing <strong>21</strong> for sale properties
			</p>

			<div className='h-px w-24 bg-primary my-5 mx-auto'></div>

			<div className='flex flex-wrap'>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
				<div className='w-1/3 px-2 mb-3'>
					<PropertyItem />
				</div>
			</div>
		</div>
	);
};

export default Properties;
