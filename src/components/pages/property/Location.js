import React from 'react';
import GoogleMapReact from 'google-map-react';

const Location = () => {
	const loc = {
		center: {
			lat: 7.101118,
			lng: 125.632673
		},
		zoom: 10
	};
	console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

	return (
		<div className='map-container mb-8'>
			<GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} defaultCenter={loc.center} defaultZoom={loc.zoom} />
		</div>
	);
};

export default Location;
