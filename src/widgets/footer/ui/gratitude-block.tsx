import React from 'react';
import './gratitude-block-style.css';
import { configForGratitudeBlockInFooter } from '../config';

const GratitudeBlock: React.FC = () => {
	const { text, icon } = configForGratitudeBlockInFooter;

	const { titleHover, alt, name } = icon;

	return (
		<div className='gratitude-block'>
			<p className='gratitude-block__text' title={titleHover}>{text}</p>
			<img className='gratitude-block__icon' src={`/assets/icons/${name}`} alt={alt} />
		</div>
	);
};

export { GratitudeBlock };
