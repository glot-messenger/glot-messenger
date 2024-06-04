import React from 'react';
import './home-page-style.css';
import { configForHomePageDrawData } from '../config';

import {
	ButtonComponent,
	ButtonPretty,
	LinkElement
} from '../../../shared';

const HomePage: React.FC = () => {
	const { title, subTitle, data } = configForHomePageDrawData;

	const { first, second } = title;

	return (
		<div className='home-page home-page__block'>
			<h1 className='home-page__title'>{first} <span>{second}</span></h1>
			<p className='home-page__sub-title'>{subTitle}</p>
			<div className='home-page__container-btns'>
				{data.map(({ link, btn }, index) => {
					const { typeBtn, icon, text } = btn;

					const content = (
						<div className='home-page__content-btn'>
							<img className='home-page__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} />
							<span>{text}</span>
						</div>
					);

					return (
						<LinkElement key={index} classesValue='home-page__link' titleHover={link.titleHover} typeElement='Link' to={link.path}>
							{typeBtn === 'pretty' ?
								<ButtonPretty classes='home-page__btn' type='button' typeElement='button' titleHover={link.titleHover}>
									{content}
								</ButtonPretty> :
								<ButtonComponent classes='home-page__btn' type='button' typeElement='button' titleHover={link.titleHover}>
									{content}
								</ButtonComponent>
							}
						</LinkElement>
					);
				})}
			</div>
		</div>
	);
};

export { HomePage };
