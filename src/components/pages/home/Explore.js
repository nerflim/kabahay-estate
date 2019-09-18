import React from 'react';
import PropertyItem from '../../PropertyItem';

const Explore = () => {
	return (
		<div className='bg-gray-100'>
			<div className='container mx-auto px-3 py-5'>
				<h3 className='text-center font-medium text-lg text-gray-500 uppercase tracking-widest'>Explore</h3>

				<div className='w-full bg-gray-300 h-1 rounded-full my-3'>
					<div className='w-4/12 bg-primary h-1 rounded-full'></div>
				</div>

				<div className='flex'>
					<div className='w-1/3 px-2'>
						<PropertyItem />
					</div>
					<div className='w-1/3 px-2'>
						<PropertyItem />
					</div>
					<div className='w-1/3 px-2'>
						<PropertyItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
