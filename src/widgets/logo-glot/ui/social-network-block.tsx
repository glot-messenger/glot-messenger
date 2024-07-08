import React from 'react';
import './social-network-block-style.css';
import { configSocialNetworkBlock } from '../config';

import {
	arraySocialNetworkLinks,
	LinkElement,
	ButtonWithDynamicBackground
} from '../../../shared';

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
				<ul className='social-network-block__list-links'>
					{arraySocialNetworkLinks.map(({ name, alt, titleHover, path }, index: number) => {
						const correctPath: string = path ? path : '#';

						return (
							<li key={index} className='social-network-block__element'>
								<LinkElement to={correctPath} titleHover={titleHover} classesValue='social-network-block__link' typeElement='nativeLink'>
									<ButtonWithDynamicBackground type='button' titleHover={titleHover} typeElement='button' payload={{}} segmentEvent='nativeLink' classes='social-network-block__btn-link'>
										<img className='social-network-block__img-icon' src={`/assets/icons/social-network-icons/${name}`} alt={alt} />
									</ButtonWithDynamicBackground>
								</LinkElement>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export { SocialNetworkBlock };
