import React from 'react';
import './button-pretty-style.css';
import type { IPrettyButtonProps } from './interafaces';

const ButtonPretty: React.FC<IPrettyButtonProps> = ({ children, titleHover, type, typeElement, textBtn, classes }) => {
	const childrenValue = textBtn ? textBtn : children;

	const classesValue: string = `pretty-button ${classes}`;

	const handlerClick = (): void => {
		
	};

	return (
		<button onClick={handlerClick} className={classesValue} title={titleHover} type={type}>
			<div className='pretty-button__container'>
				{childrenValue}
			</div>
		</button>
	);
};

export { ButtonPretty };
