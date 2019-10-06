import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Login = props => {
	return (
		<React.Fragment>
			<div className='fixed bg-black z-50 opacity-75 w-full h-full'></div>
			<div className='fixed h-full w-full z-50 flex items-center'>
				<div className='bg-white opacity-100 w-7/12 m-auto p-5 rounded-lg'>
					<div className='flex'>
						<button type='button' className='focus:outline-none hover:text-primary ml-auto' onClick={() => props.login()}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</div>

					<h2 className='uppercase text-center text-2xl mb-5'>Sign In</h2>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
