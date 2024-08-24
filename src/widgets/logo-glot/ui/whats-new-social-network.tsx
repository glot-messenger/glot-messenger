import React from 'react';
import './whats-new-social-network-style.css';
import { configSocialNetworkWhatsNew } from '../config';

import {
	arraySocialNetworkLinks,
	LinkElement,
	config
} from '../../../shared';

const WhatsNewSocialNetwork: React.FC = () => {
	return (
		<div className='social-network-whats-new'>
			<p className='social-network-whats-new__text'>{configSocialNetworkWhatsNew.title}</p>
			<ul className='social-network-whats-new__links-list'>
				{arraySocialNetworkLinks.map(({ name, alt, titleHover, path }, index: number) => {
					const correctPath: string = path ? path : '#';

					return (
						<li className='social-network-whats-new__element' key={index}>
							<LinkElement to={correctPath} titleHover={titleHover} classesValue='social-network-whats-new__link' typeElement='nativeLink'>
								<img className='social-network-whats-new__img' src={`${config.endPointForStatics}assets/icons/social-network-icons/${name}`} alt={alt} />
							</LinkElement>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { WhatsNewSocialNetwork };
