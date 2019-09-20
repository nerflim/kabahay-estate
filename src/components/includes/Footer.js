import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faAt, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const items = [
		{ name: 'Popular Areas', items: ['Davao City', 'Quezon City', 'Bonifacio Global City', 'Cebu City', 'Manila', 'NCR'] },
		{
			name: 'Popular Searches',
			items: ['Home Ideas', 'First Home Owners Grant', 'Interest Rates', 'Tax Depreciation Schedule', 'Bedroom Ideas', 'Property Market']
		},
		{ name: 'Property Types', items: ['House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land', 'Rural'] },
		{ name: 'About Us', items: ['Terms & Conditions', 'Privacy Policy', 'Copyrights', 'About us', 'Events', 'Careers'] },
		{ name: 'Customer Service', items: ['How it works', 'Why Partner with us?', 'Contact us', 'FAQs', 'Video Tutorials', 'Broker Academy'] }
	];
	return (
		<footer>
			<div className='bg-secondary py-12 text-gray-300 text-sm flex items-center'>
				<div className='container mx-auto'>
					<div className='flex'>
						{items.map((item, index) => (
							<div className='w-1/6 px-3' key={index}>
								<p className='font-medium text-base mb-3'>{item.name}</p>
								<ul className='text-xs leading-loose font-thin'>
									{item.items.map((footerItem, footerIndex) => (
										<li key={footerIndex}>{footerItem}</li>
									))}
								</ul>
							</div>
						))}
						<div className='w-1/6'>
							<p className='font-medium text-base mb-3'>Connect With Us</p>
							<div className='text-xs font-thin flex items-baseline mb-3'>
								<FontAwesomeIcon icon={faMapMarkerAlt} size='sm' /> <span className='ml-2'>Doña Asuncion Village, Pampanga, Davao City</span>
							</div>
							<div className='text-xs font-thin flex items-baseline mb-3'>
								<FontAwesomeIcon icon={faPhoneAlt} size='sm' /> <span className='ml-2'>305-1234-678</span>
							</div>
							<div className='text-xs font-thin flex items-baseline mb-3'>
								<FontAwesomeIcon icon={faAt} size='sm' /> <span className='ml-2'>contact@kabayanestate.com</span>
							</div>
							<div>
								<FontAwesomeIcon icon={faFacebook} className='inline-block mr-4 text-xl' />
								<FontAwesomeIcon icon={faTwitter} className='inline-block mr-4 text-xl' />
								<FontAwesomeIcon icon={faInstagram} className='inline-block mr-4 text-xl' />
								<FontAwesomeIcon icon={faRss} className='inline-block mr-4 text-xl' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-secondary-dark text-gray-300 text-sm flex items-center border-b-4 border-primary'>
				<div className='p-3 container mx-auto'>
					<div className='flex items-center'>
						<svg className='fill-current h-8 w-8 mr-2' width='40' height='40' viewBox='0 0 54 54' xmlns='http://www.w3.org/2000/svg'>
							<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
						</svg>
						<span className='text-lg'>Kabahay</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
