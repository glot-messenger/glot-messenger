import React from 'react';
import { configSocialNetworkBlock } from '../config';

const SocialNetworkBlock: React.FC = () => {
	const { title, subTitle, text, icon } = configSocialNetworkBlock;

	return (
		<div className='social-network-block'>
			<div className='social-network-block__header'>
				<img src={`/assets/icons/${icon.name}`} alt={icon.alt} className='social-network-block__icon' />
				<h2 className='social-network-block__title'>{title}</h2>
				<p className='social-network-block__sub-title'>{subTitle}</p>
				<p className='social-network-block__text'>{text}</p>
			</div>
			<div className='social-network-block__container-links'>
				
			</div>
		</div>
	);
};

export { SocialNetworkBlock };
