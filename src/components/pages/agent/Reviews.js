import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<div className='mt-8 border-t pt-8'>
			<div className='flex items-center mb-12'>
				<div>
					<img src='/img/jane-doe.jpg' alt='Jane Doe Reviews' className='w-20 h-20 rounded-full' />
				</div>
				<div className='px-5'>
					<h1 className='text-xl'>Jane Doe's Reviews</h1>
					<ul>
						<li className='inline-block mr-5'>5.0</li>
						<li className='inline-block mr-5'>
							<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
							<FontAwesomeIcon icon={faStar} className='text-yellow-500' />
						</li>
						<li className='inline-block mr-5'>2 reviews</li>
						<li className='inline-block mr-5'>Leave Review</li>
					</ul>
				</div>
			</div>
			<div className='mb-24'>
				<ReviewItem />
				<ReviewItem />
			</div>
		</div>
	);
};

export default Reviews;
