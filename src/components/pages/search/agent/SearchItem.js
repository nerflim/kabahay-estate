import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SearchItem = () => {
	return (
		<div className='border rounded-lg p-5 text-sm mb-6'>
			<div className='flex w-full'>
				<img src='/img/jane-doe.jpg' alt='Jane Doe' className='w-20 h-20 rounded-full object-cover' />
				<div className='px-5'>
					<h1 className='text-xl'>Jane Doe</h1>
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
					</ul>
				</div>
			</div>

			<div className='my-5'>
				<ul>
					<li>
						<strong>21</strong> Sold Properties
					</li>
					<li>
						<strong>18</strong> For Sale Properties
					</li>
					<li>
						<strong>21</strong> For Rent Properties
					</li>
				</ul>
			</div>

			<div className='flex w-full'>
				<button className='text-white px-5 px-3 border border-primary bg-primary rounded-full focus:outline-none hover:outline-none'>
					View Profile
				</button>
				<button className='text-primary px-5 py-3 border border-primary rounded-full ml-auto focus:outline-none hover:outline-none'>Message</button>
			</div>
		</div>
	);
};

export default SearchItem;
