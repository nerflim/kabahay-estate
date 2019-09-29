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
		<div className='border rounded-lg overflow-hidden'>
			<div className='bg-primary p-3 text-white flex items-center'>
				<div className='h-16 w-16 rounded-full border-2 border-white shadow mr-3' style={agentThumbnail}></div>
				<div>
					<h3 className='text-xl'>{props.agent.name}</h3>
					<p className='text-sm'>{props.agent.title}</p>
				</div>
			</div>
			<div className='p-3'>
				<ul className='text-sm'>
					<li>
						<FontAwesomeIcon icon={faPhoneAlt} size='sm' className='mr-3' /> {props.agent.mobile}
					</li>
					<li>
						<FontAwesomeIcon icon={faEnvelope} size='sm' className='mr-3' /> {props.agent.email}
					</li>
				</ul>
				<Link to='/' className='p-2 border rounded-full border-primary text-center w-full block text-sm text-primary my-3'>
					Visit Agent's Profile
				</Link>
			</div>
		</div>
	);
};

export default Agent;
