import React from 'react';
import SearchBar from '../../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Agent from './Agent';
import PropertyItem from '../../PropertyItem';

const Property = props => {
	const information = {
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
			title: 'Real Estate Broker',
			mobile: '+639 123 456 789',
			email: 'janedoe@kabahayestate.com'
		}
	};

	return (
		<div>
			<div className='container mx-auto'>
				<SearchBar />
			</div>
			<div className='flex mb-5 bg-gray-200'>
				<div className='bg-yellow-300 w-2/3 p-3'>Photo slider here</div>
				<div className='w-1/3 p-3'>
					<h1 className='text-2xl mb-3'>{information.title}</h1>
					<h3 className='text-xl mb-5'>{information.price}</h3>
					<p>
						<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' /> {information.location}
					</p>
					<ul className='mt-5'>
						<li>HOUSE</li>
						<li>
							<FontAwesomeIcon icon={faBed} /> {information.bed}
						</li>
						<li>
							<FontAwesomeIcon icon={faBath} /> {information.bath}
						</li>
						<li>
							<FontAwesomeIcon icon={faCarSide} /> {information.parking}
						</li>
						<li>
							<FontAwesomeIcon icon={faChartArea} /> {information.area}
						</li>
					</ul>
				</div>
			</div>
			<div className='container mx-auto flex'>
				<div className='w-2/3 p-3 text-sm'>
					<div className='mb-5'>
						<h3 className='text-xl mb-2'>Property Description</h3>
						<p className='mb-3'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eget nisi nec molestie. Maecenas sed libero non risus pharetra
							aliquet. In fringilla id tortor porta maximus. Pellentesque dictum neque eget mi dignissim, a mattis velit commodo. Etiam a orci ac odio
							gravida gravida ut eu arcu. Ut augue odio, semper id nunc a, euismod cursus augue. Mauris a nisl et sem placerat ornare. Vivamus
							tristique convallis neque at blandit.
						</p>
						<p className='mb-3'>
							Maecenas nec nulla mi. Nulla odio nunc, euismod nec eleifend vehicula, tristique eu est. Nullam cursus massa eros, eu pellentesque est
							sodales ut. Aenean at risus eu leo dictum ullamcorper. Praesent ac urna ac nisl congue condimentum eu vitae velit. Nunc molestie et
							ipsum eleifend tempus. Cras ullamcorper aliquam nisi eu tempor. Aliquam erat volutpat. Nullam vulputate dui finibus fermentum blandit.
							Ut a ligula dictum sapien cursus consequat porta quis ligula. Nulla mattis pretium dapibus. Quisque eu dignissim orci, in tristique
							augue.
						</p>
						<p className='mb-3'>
							Donec vitae venenatis mauris. Cras facilisis varius diam a fringilla. Donec elementum nec felis gravida venenatis. Maecenas malesuada
							dapibus mi, eget placerat urna egestas in. Morbi imperdiet dapibus tortor, eu gravida magna egestas non. Vivamus cursus ligula id odio
							bibendum elementum. Fusce tincidunt mauris sed erat luctus eleifend. Curabitur vitae aliquam lectus, quis fermentum ante. Proin nulla
							lacus, ultricies quis purus nec, blandit auctor est.
						</p>
					</div>
					<div className='mb-5'>
						<h3 className='text-xl mb-2'>Make an appointment</h3>
						<div className='flex'>
							<div className='h-64 bg-blue-400 rounded-lg flex-1'></div>
							<div className='flex-1'>
								<h3 className='text-lg mb-2 text-center'>Select available time</h3>
							</div>
						</div>
					</div>
					<div className='mb-5'>
						<h3 className='text-xl mb-2'>Other properties for sale near this area</h3>
						<div className='flex'>
							<div className='px-2'>
								<PropertyItem />
							</div>
							<div className='px-2'>
								<PropertyItem />
							</div>
						</div>
					</div>
				</div>
				<div className='w-1/3 p-3'>
					<Agent agent={information.agent} />
				</div>
			</div>
		</div>
	);
};

export default Property;
