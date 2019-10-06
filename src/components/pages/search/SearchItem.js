import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const SearchItem = props => {
	const agentThumbnail = {
		background: 'url(/img/jane-doe.jpg)',
		backgroundPosition: 'center'
	};

	const { match } = props;

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
		<div className='bg-white rounded-lg overflow-hidden border property-item lg:flex md:block mb-5 shadow'>
			<div className='thumbnail overflow-hidden lg:w-5/12 md:w-full'>
				<Link to={`${match.url}/view`}>
					<img src='/img/home-header.jpg' alt={property.title} />
				</Link>
			</div>

			<div className='flex flex-wrap lg:w-7/12 md:w-full'>
				<div className='flex p-3 text-gray-600 w-full'>
					<div className='text-sm'>
						<h3 className='text-gray-700 text-lg font-medium'>
							<Link to={`${match.url}/view`}>{property.title}</Link>
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
						<button className='focus:outline-none'>
							<FontAwesomeIcon icon={faHeart} />
						</button>
					</div>
				</div>
				<div className='flex p-3 items-center w-full self-end'>
					<div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full border-2 border-primary shadow flex-shrink-0' style={agentThumbnail}></div>
					<div>
						<span className='text-lg px-2 sm:border-r border-gray-500'>{property.agent.name}</span>
						<span className='text-sm px-2 block sm:inline-block'>{property.agent.title}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
