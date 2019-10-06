import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const LoginModal = props => {
	return (
		<React.Fragment>
			<div className='fixed bg-black z-50 opacity-75 w-full h-full'></div>
			<div className='fixed h-full w-full z-50 flex items-center px-3 md:px-0'>
				<div className='md:w-6/12 w-full m-auto rounded-lg overflow-hidden text-sm'>
					<div className='bg-white p-5'>
						<div className='flex'>
							<button type='button' className='focus:outline-none hover:text-primary ml-auto' onClick={() => props.login()}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</div>

						<h2 className='uppercase text-center text-2xl mb-5'>Log In</h2>
						<form className='xl:w-1/2 lg:w-2/3 w-full mx-auto' onSubmit={e => e.preventDefault()}>
							<div className='rounded-full w-full border border-gray-500 overflow-hidden text-gray-500 mt-2 mb-5'>
								<span className='absolute py-3 px-5 text-gray-500'>
									<FontAwesomeIcon icon={faEnvelope} />
								</span>

								<input type='email' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Email Address' />
							</div>
							<div className='rounded-full w-full border border-gray-500 overflow-hidden text-gray-500 mb-5'>
								<span className='absolute py-3 px-5 text-gray-500'>
									<FontAwesomeIcon icon={faKey} />
								</span>

								<input type='password' className='p-3 pl-12 w-full focus:outline-none focus:text-gray-700 leading-none' placeholder='Password' />
							</div>
							<button
								type='submit'
								className='bg-primary text-white py-3 px-16 hover:bg-primary-dark focus:outline-none rounded-full hover:shadow block mx-auto'>
								Login
							</button>
						</form>
					</div>
					<div className='bg-gray-300 flex flex-col sm:flex-row lg:px-12 text-sm px-5 py-5 shadow-inner'>
						<Link to='/sign-up' onClick={() => props.login()}>
							Create an account
						</Link>
						<Link to='/' className='text-primary hover:text-primary-dark sm:ml-auto'>
							Forgot password
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginModal;
