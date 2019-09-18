import React from 'react';

const Footer = () => {
	const items = [
		{ name: 'Popular Areas', items: ['Davao City', 'Quezon City', 'Bonifacio Global City', 'Cebu City', 'Manila', 'NCR'] },
		{
			name: 'Popular Searches',
			items: ['Home Ideas', 'First Home Owners Grant', 'Interest Rates', 'Tax Depreciation Schedule', 'Bedroom Ideas', 'Property Market']
		}
	];
	return (
		<footer className>
			<div className='bg-secondary h-64 text-gray-300 text-sm'>
				<div className='container mx-auto'>
					<div className='flex'>
						{items.map((item, index) => (
							<div className='w-1/6' key={index}>
								<p className='font-medium'>{item.name}</p>
								<ul className='text-xs leading-loose font-thin'>
									{item.items.map((footerItem, footerIndex) => (
										<li key={footerIndex}>{footerItem}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
