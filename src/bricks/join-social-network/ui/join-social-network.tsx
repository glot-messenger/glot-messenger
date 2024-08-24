import React from 'react';
import './join-social-network-style.css';
import { configForJoinSocialNetworkDrawData } from '../config';
import type { IJoinSocialNetworkProps } from './interafaces';

import {
	LinkElement,
	ButtonPretty,
	config
} from '../../../shared';

const JoinSocialNetwork: React.FC<IJoinSocialNetworkProps> = ({ classesParent }) => {
	const { text, data } = configForJoinSocialNetworkDrawData;

	const classes: string = `${classesParent}__social-network-join join-social-network`;

	return (
		<div className={classes}>
			<div className='join-social-network__container'>
				<div className='join-social-network__column'>
					<p className='join-social-network__text'>{text}</p>
				</div>
				<div className='join-social-network__column'>
					<ul className='join-social-network__list'>
						{data.map(({ name, alt, titleHover, path }, index: number) => {
							const correctPath: string = path ? path : '#';

							return (
								<li className='join-social-network__element' key={index}>
									<LinkElement to={correctPath} titleHover={titleHover} classesValue='join-social-network__link' typeElement='nativeLink'>
										<ButtonPretty classes='join-social-network__btn' type='button' typeElement='button' titleHover={titleHover}>
											<img className='join-social-network__img' src={`${config.endPointForStatics}assets/icons/social-network-icons/${name}`} alt={alt} />
										</ButtonPretty>
									</LinkElement>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export { JoinSocialNetwork };
