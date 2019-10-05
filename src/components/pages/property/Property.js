import React from 'react';
import SearchBar from '../../SearchBar';
import Agent from './Agent';
import PropertyItem from '../../PropertyItem';
import Appointment from './Appointment';
import Location from './Location';
import Gallery from './Gallery';
import Info from './Info';

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
			<div className='flex flex-col md:flex-row mb-5 border-t border-b shadow-lg'>
				<div className='md:w-2/3 w-full'>
					<Gallery />
				</div>
				<div className='md:w-1/3 p-4 w-full'>
					<Info info={information} />
				</div>
			</div>
			<div className='container mx-auto flex'>
				<div className='w-2/3 p-3 text-sm'>
					<Location />

					<div className='mb-8'>
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

					<Appointment />

					<div className='mb-8'>
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
