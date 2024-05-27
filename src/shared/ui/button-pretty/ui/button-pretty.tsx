import React from 'react';
import './button-pretty-style.css';
import type { IPrettyButtonProps } from './interafaces';

const ButtonPretty: React.FC<IPrettyButtonProps> = ({ children, titleHover, type, typeElement, textBtn }) => {
	const childrenValue = textBtn ? textBtn : children;

	const handlerClick = (): void => {
		console.log('click prettyButton');
	};

	return (
		<button onClick={handlerClick} className='pretty-button' title={titleHover} type={type}>
			<div className='pretty-button__container'>
				{childrenValue}
			</div>
		</button>
	);
};

export { ButtonPretty };
