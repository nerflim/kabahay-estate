import React from 'react';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
	const images = [
		{
			original: 'http://placekitten.com/200/300/',
			thumbnail: 'http://placekitten.com/200/300/',
			thumbnailClass: 'w-full m-0 thumbnail-item',
			originalClass: 'gallery-item border-l border-r'
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
			thumbnailClass: 'w-full m-0 thumbnail-item',
			originalClass: 'gallery-item border-l border-r'
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			thumbnailClass: 'w-full m-0 thumbnail-item',
			originalClass: 'gallery-item border-l border-r'
		}
	];

	const renderLeftNav = (onClick, disabled) => (
		<button className='focus:outline-none text-primary px-3 absolute z-10 h-full' disabled={disabled} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleLeft} size='2x' />
		</button>
	);

	const renderRightNav = (onClick, disabled) => (
		<button className='focus:outline-none text-primary px-3 absolute z-10 h-full right-0' disabled={disabled} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleRight} size='2x' />
		</button>
	);

	return (
		<ImageGallery
			items={images}
			thumbnailPosition='left'
			showPlayButton={false}
			showFullscreenButton={false}
			renderLeftNav={renderLeftNav}
			renderRightNav={renderRightNav}
			additionalClass='property-gallery'
		/>
	);
};

export default Gallery;
