import React from 'react';
import './not-found-style.css';
import { configForNotFoundPageDrawData } from '../config';

import {
	LinkElement,
	ButtonPretty
} from '../../../shared';

const NotFoundPage: React.FC = () => {
	const { title, subTitle, link, btn, icon: secondIcon } = configForNotFoundPageDrawData;

	const { titleHover, path } = link;

	const { icon, text } = btn;

	return (
		<div className='not-found not-found__container'>
			<div className='not-found__column'>
				<h1 className='not-found__title'>{title}</h1>
				<p className='not-found__sub-title'>{subTitle}</p>
				<LinkElement classesValue='not-found__link' to={path} titleHover={titleHover} typeElement='Link'>
					<ButtonPretty classes='not-found__btn' type='button' typeElement='button' titleHover={titleHover}>
						<img className='not-found__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} />
						<span>{text}</span>
					</ButtonPretty>
				</LinkElement>
			</div>
			<div className='not-found__column'>
				<img className='not-found__right-icon' src={`/assets/icons/${secondIcon.name}`} alt={secondIcon.alt} />
			</div>
		</div>
	);
};

export { NotFoundPage };
