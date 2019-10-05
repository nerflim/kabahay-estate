import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Info = props => {
	return (
		<div className='flex text-sm'>
			<div>
				<h1 className='text-2xl mb-3'>{props.info.title}</h1>
				<div className='h-px w-12 bg-primary mb-3'></div>
				<h3 className='text-xl'>{props.info.price}</h3>
				<div className='my-3'>
					<span className='bg-gray-600 text-white uppercase px-2 rounded-full'>HOUSE</span>
				</div>
				<ul>
					<li className='flex'>
						<span className='w-8'>
							<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' />
						</span>{' '}
						{props.info.location}
					</li>
					<li className='flex'>
						<span className='w-8'>
							<FontAwesomeIcon icon={faBed} />
						</span>{' '}
						{props.info.bed} Bedrooms
					</li>
					<li className='flex'>
						<span className='w-8'>
							<FontAwesomeIcon icon={faBath} />
						</span>
						{props.info.bath} Bathrooms
					</li>
					<li className='flex'>
						<span className='w-8'>
							<FontAwesomeIcon icon={faCarSide} />
						</span>
						{props.info.parking} Parking
					</li>
					<li className='flex'>
						<span className='w-8'>
							<FontAwesomeIcon icon={faChartArea} />
						</span>
						{props.info.area}
					</li>
				</ul>
			</div>
			<div className='ml-auto'>
				<button type='button' className='focus:outline-none'>
					<FontAwesomeIcon icon={faHeart} />
				</button>
			</div>
		</div>
	);
};

export default Info;
