import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
	return (
		<div className='flex text-sm min-h-screen'>
			<div className='w-3/5 bg-blue-500'></div>
			<div className='p-5 w-2/5'>
				<div className='flex items-center flex-shrink-0 text-primary'>
					<svg className='fill-current h-8 w-8 mr-2' width='54' height='54' viewBox='0 0 54 54' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
					</svg>
					<span className='font-semibold text-xl tracking-tight'>Kabahay</span>
				</div>
				<div className='mt-20'>
					<h2 className='text-2xl'>Create an account</h2>
					<p>
						By signing up to{' '}
						<Link to='/' className='font-bold text-primary hover:text-primary-dark'>
							Kabahay
						</Link>
						, I agree to the{' '}
						<Link to='/' className='text-primary hover:text-primary-dark'>
							Conditions
						</Link>{' '}
						of use and{' '}
						<Link to='/' className='text-primary hover:text-primary-dark'>
							Privacy policy
						</Link>
					</p>
					<form className='my-8' onSubmit={e => e.preventDefault()}>
						<div>
							<label>Sign up with your email address</label>
							<div className='rounded-full w-full border border-gray-500 overflow-hidden text-gray-500 mt-2 mb-3'>
								<span className='absolute py-3 px-5 text-gray-500'>
									<FontAwesomeIcon icon={faEnvelope} />
								</span>

								<input type='email' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Email Address' />
							</div>
							<div className='rounded-full w-full border border-gray-500 overflow-hidden text-gray-500 mb-3'>
								<span className='absolute py-3 px-5 text-gray-500'>
									<FontAwesomeIcon icon={faKey} />
								</span>

								<input type='password' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Password' />
							</div>
							<button
								type='submit'
								className='bg-primary w-full text-white py-3 px-5 hover:bg-primary-dark focus:outline-none rounded-full hover:shadow'>
								Sign Up
							</button>
						</div>
					</form>
					<div className='mb-8'>
						<p>Or sign up with:</p>
						<button
							type='button'
							className='bg-facebook w-full text-white mt-2 py-3 px-5 focus:outline-none rounded-full text-left hover:shadow flex'>
							<span className='w-5'>
								<FontAwesomeIcon icon={faFacebookF} />
							</span>{' '}
							Facebook
						</button>
						<button type='button' className='bg-google w-full text-white mt-2 py-3 px-5 focus:outline-none rounded-full text-left hover:shadow flex'>
							<span className='w-5'>
								<FontAwesomeIcon icon={faGoogle} className='mr-3' />
							</span>
							Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
