import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = () => {
	return (
		<div className='mb-8 hover:bg-gray-100 p-3'>
			<div>
				<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
				<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
				<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
				<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
				<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
			</div>
			<p className='font-bold mt-1'>Jonathan Hopkins</p>
			<p className='text-sm text-gray-500 mb-3'>10 months ago</p>
			<p>
				Jane comes highly recommend!! She sold our property very quickly and without fuss. We had regular updates about the process from him and she
				was very knowledgeable about the area. The whole team at Harcourts Stafford are great!! Not your regular real estate agent
			</p>

			<div className='ml-12 border-l-4 border-primary p-3 mt-2 flex items-center'>
				<img src='/img/jane-doe.jpg' alt='Jane Doe replied' className='w-8 h-8 rounded-full mr-3' />
				<span>
					<strong>Replied: </strong>
					<em>Thank you so much, it was my absolute pleasure. All the best for the future</em>
				</span>
			</div>
		</div>
	);
};

export default ReviewItem;
