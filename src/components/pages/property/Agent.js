import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Agent = props => {
	const agentThumbnail = {
		background: 'url(/img/jane-doe.jpg)',
		backgroundPosition: 'center'
	};

	return (
		<div className='border rounded-lg overflow-hidden shadow'>
			<div className='bg-primary p-3 text-white flex items-center'>
				<div className='h-16 w-16 rounded-full border-2 border-white shadow mr-3' style={agentThumbnail}></div>
				<div>
					<h3 className='text-xl'>{props.agent.name}</h3>
					<p className='text-sm'>{props.agent.title}</p>
				</div>
			</div>
			<div className='p-3 text-sm'>
				<ul>
					<li>
						<FontAwesomeIcon icon={faPhoneAlt} size='sm' className='mr-3' /> {props.agent.mobile}
					</li>
					<li>
						<FontAwesomeIcon icon={faEnvelope} size='sm' className='mr-3' /> {props.agent.email}
					</li>
				</ul>
				<Link to='/agents/view' className='p-2 border rounded-full border-primary text-center w-full block text-primary mt-3 mb-5'>
					Visit Agent's Profile
				</Link>
				<hr />

				<div className='mt-5'>
					<p className='mb-3'>Ask about the property</p>
					<form onSubmit={e => e.preventDefault()}>
						<div className='mb-3'>
							<input type='text' className='border rounded-full focus:outline-none px-3 py-2 w-full' placeholder='Full Name' />
						</div>
						<div className='mb-3'>
							<input type='text' className='border rounded-full focus:outline-none px-3 py-2 w-full' placeholder='Phone Number' />
						</div>
						<div className='mb-3'>
							<input type='email' className='border rounded-full focus:outline-none px-3 py-2 w-full' placeholder='Email Address' />
						</div>
						<div className='mb-3'>
							<textarea rows='4' className='border rounded-lg focus:outline-none px-3 py-2 w-full' placeholder='Your message' />
						</div>
						<div className='mb-3'>
							<button type='submit' className='rounded-full w-full text-white bg-primary px-3 py-2'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Agent;
