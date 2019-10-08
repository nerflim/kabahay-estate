import React from 'react';
import Avatar from './Avatar';
import Description from './Description';
import Properties from './Properties';
import Reviews from './Reviews';

const View = () => {
	return (
		<div className='container mx-auto text-sm'>
			<Avatar />
			<Description />
			<Properties />
			<Reviews />
		</div>
	);
};

export default View;
