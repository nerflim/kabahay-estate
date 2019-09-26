import React from 'react';

const LatestNews = () => {
	return (
		<div className='bg-primary-dark text-white'>
			<div className='container mx-auto py-3'>
				<h3 className='uppercase tracking-widest font-medium text-lg text-center mb-3'>Latest News</h3>
				<div className='flex'>
					<div className='w-1/3 px-2'>
						<div style={{ height: '250px' }} className='overflow-hidden rounded-lg shadow-md'>
							<img src='/img/home-header.jpg' alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
						</div>
						<h3 className='text-lg font-medium my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
						<p className='text-xs opacity-50'>Maecenas nec nulla mi. Nulla odio nunc, euismod nec eleifend vehicula, tristique eu est...</p>
					</div>
					<div className='w-1/3 px-2'>
						<div style={{ height: '250px' }} className='overflow-hidden rounded-lg shadow-md'>
							<img src='/img/home-header.jpg' alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
						</div>
						<h3 className='text-lg font-medium my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
						<p className='text-xs opacity-50'>Maecenas nec nulla mi. Nulla odio nunc, euismod nec eleifend vehicula, tristique eu est...</p>
					</div>
					<div className='w-1/3 px-2'>
						<div style={{ height: '250px' }} className='overflow-hidden rounded-lg shadow-md'>
							<img src='/img/home-header.jpg' alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
						</div>
						<h3 className='text-lg font-medium my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
						<p className='text-xs opacity-50'>Maecenas nec nulla mi. Nulla odio nunc, euismod nec eleifend vehicula, tristique eu est...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestNews;
