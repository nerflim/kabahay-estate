import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NewsLetter = () => {
	return (
		<div className='flex items-center'>
			<div className='w-7/12 bg-primary-dark h-64 overflow-hidden'>
				<img src='/img/home-header.jpg' alt='Newsletter' className='opacity-25' />
			</div>
			<div className='w-5/12 p-8'>
				<h1 className='tracking-widest text-primary font-bold text-2xl uppercase'>Keep in touch</h1>
				<p className='text-sm text-gray-600'>Never miss a thing. Subscribe to our newsletter for updates!</p>

				<form onSubmit={e => e.preventDefault()} className='mt-8'>
					<div className='flex items-center border border-primary rounded-full'>
						<div className='rounded-full w-10/12 overflow-hidden text-gray-500'>
							<span className='absolute py-3 px-5 text-primary'>
								<FontAwesomeIcon icon={faEnvelope} />
							</span>

							<input type='text' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700' placeholder='Enter your email address' />
						</div>
						<div className='p-1 w-2/12'>
							<button type='submit' className='bg-primary text-white p-2 focus:outline-none rounded-full w-full'>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewsLetter;
