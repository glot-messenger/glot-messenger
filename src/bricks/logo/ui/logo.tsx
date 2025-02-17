import React from 'react';
import './logo-style.css';

import {
	LinkElement,
	HOME,
	config
} from '../../../shared';

import type { ILogoProps } from './interafaces';

const Logo: React.FC<ILogoProps> = ({ text, icon }) => {
	const { alt, path, titleHover, name } = icon;

	const correctPath: string = path ? path : HOME;

	return (
		<div className='logo-block'>
			<LinkElement typeElement='Link' to={correctPath} titleHover={titleHover} classesValue='logo-block__link'>
				<img className='logo-block__icon' src={`${config.endPointForStatics}assets/icons/logo/${name}`} alt={alt} />
				<span className='logo-block__title'>{text}</span>
			</LinkElement>
		</div>
	);
};

export { Logo };
