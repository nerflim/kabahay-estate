import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const SearchItem = () => {
	const agentThumbnail = {
		background: 'url(/img/jane-doe.jpg)',
		backgroundPosition: 'center'
	};

	return (
		<div className='bg-white rounded-lg overflow-hidden border property-item lg:flex md:block mb-5 shadow'>
			<div className='thumbnail overflow-hidden lg:w-5/12 md:w-full'>
				<img src='/img/home-header.jpg' />
			</div>

			<div className='flex flex-wrap lg:w-7/12 md:w-full'>
				<div className='flex p-3 text-gray-600 w-full'>
					<div className='text-sm'>
						<h3 className='text-gray-700 text-lg font-medium'>Lorem Ipsum Dolor Sit</h3>
						<p className='mb-1'>
							<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' className='ml-auto' /> Quezon
						</p>
						<div className='mb-1'>
							<span className='inline-block mr-3'>
								<FontAwesomeIcon icon={faBed} /> 5
							</span>
							<span className='inline-block mr-3'>
								<FontAwesomeIcon icon={faBath} /> 3
							</span>
							<span className='inline-block mr-3'>
								<FontAwesomeIcon icon={faCarSide} /> 2
							</span>
							<span className='inline-block mr-3'>
								<FontAwesomeIcon icon={faChartArea} /> 180sqm
							</span>
							<span className='inline-block bg-gray-600 text-white uppercase px-2 rounded-full text-xs'>HOUSE</span>
						</div>
						<p className='font-medium text-base'>P 1,000,000.00</p>
					</div>

					<div className='ml-auto'>
						<button className='focus:outline-none'>
							<FontAwesomeIcon icon={faHeart} />
						</button>
					</div>
				</div>
				<div className='flex p-3 items-center w-full self-end'>
					<div className='h-16 w-16 rounded-full border-2 border-primary shadow' style={agentThumbnail}></div>
					<div>
						<span className='text-lg px-2 border-r border-gray-500'>Jane Doe</span>
						<span className='text-sm px-2'>Real Estate Broker</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
