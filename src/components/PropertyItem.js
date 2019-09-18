import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons';

const PropertyItem = () => {
	return (
		<div className='bg-white rounded-lg overflow-hidden border property-item'>
			<div className='thumbnail overflow-hidden'>
				<img src='/img/home-header.jpg' />
			</div>

			<div className='flex p-3'>
				<div className='text-gray-600 text-sm'>
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
				<FontAwesomeIcon icon={faHeart} className='ml-auto' />
			</div>
		</div>
	);
};

export default PropertyItem;
