import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Avatar = () => {
	return (
		<div className='flex items-center py-8'>
			<div>
				<img src='/img/jane-doe.jpg' alt='Jane Doe' className='h-40 w-40 object-cover rounded-full' />
			</div>
			<div className='px-5'>
				<h1 className='text-3xl'>Jane Doe</h1>
				<p>Real Estate Broker</p>
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
	);
};

export default Avatar;
