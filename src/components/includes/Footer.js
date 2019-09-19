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
			<div className='bg-secondary h-64 text-gray-300 text-sm flex items-center'>
				<div className='container mx-auto'>
					<div className='flex'>
						{items.map((item, index) => (
							<div className='w-1/6' key={index}>
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
								<FontAwesomeIcon icon={faFacebook} size='2x' className='inline-block mr-5' />
								<FontAwesomeIcon icon={faTwitter} size='2x' className='inline-block mr-5' />
								<FontAwesomeIcon icon={faInstagram} size='2x' className='inline-block mr-5' />
								<FontAwesomeIcon icon={faRss} size='2x' className='inline-block mr-5' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
