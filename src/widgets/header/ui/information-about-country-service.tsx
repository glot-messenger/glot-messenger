import React from 'react';
import './information-about-country-service-style.css';
import { configInformationAboutCountryService } from './config-information-about-country-service';

const InformationAboutCountryService: React.FC = () => {
	const { text, icon } = configInformationAboutCountryService;

	const { name, alt, titleHover } = icon;

	return (
		<div className='info-about-country-service'>
			<div className='info-about-country-service__container'>
				<p className='info-about-country-service__text' title={titleHover}>{text}</p>
				<img className='info-about-country-service__icon' src={`/assets/icons/${name}`} alt={alt} />
			</div>
		</div>
	);
};

export { InformationAboutCountryService };
