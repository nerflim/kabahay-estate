import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const PropertyItem = () => {
	const [favorite, setFavorite] = useState(false);
	const property = {
		title: 'Lorem Ipsum Dolor Sit',
		location: 'Quezon City',
		bed: 5,
		bath: 3,
		parking: 2,
		area: '180sqm',
		price: 'P 1,000,000.00',
		type: 'house',
		favorite: false,
		agent: {
			name: 'Jane Doe',
			title: 'Real Estate Broker'
		}
	};

	return (
		<div className='bg-white rounded-lg overflow-hidden border property-item'>
			<div className='thumbnail overflow-hidden'>
				<Link to='/search-property/view'>
					<img src='/img/home-header.jpg' alt={property.title} />
				</Link>
			</div>

			<div className='flex p-3 text-gray-600'>
				<div className='text-sm'>
					<h3 className='text-gray-700 text-lg font-medium'>
						<Link to='/search-property/view'>{property.title}</Link>
					</h3>
					<p className='mb-1'>
						<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' className='ml-auto' /> {property.location}
					</p>
					<div className='mb-1'>
						<span className='inline-block mr-3'>
							<FontAwesomeIcon icon={faBed} /> {property.bed}
						</span>
						<span className='inline-block mr-3'>
							<FontAwesomeIcon icon={faBath} /> {property.bath}
						</span>
						<span className='inline-block mr-3'>
							<FontAwesomeIcon icon={faCarSide} /> {property.parking}
						</span>
						<span className='inline-block mr-3'>
							<FontAwesomeIcon icon={faChartArea} /> {property.area}
						</span>
						<span className='inline-block bg-gray-600 text-white uppercase px-2 rounded-full text-xs'>{property.type}</span>
					</div>
					<p className='font-medium text-base'>{property.price}</p>
				</div>

				<div className='ml-auto'>
					<button className='focus:outline-none' onClick={() => setFavorite(!favorite)}>
						{favorite ? <FontAwesomeIcon icon={faHeartSolid} className='text-primary' /> : <FontAwesomeIcon icon={faHeart} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PropertyItem;
