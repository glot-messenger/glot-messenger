import React from 'react';
import './button-component-style.css';
import type { IButtonComponentProps } from './interafaces';

const ButtonComponent: React.FC<IButtonComponentProps> = ({ textBtn, type, titleHover, typeElement, isDisabled }) => {
	const isDisabledStatus: boolean = type === 'submit' && isDisabled === true;

	const stylesBtn: string = 'btn' + (isDisabledStatus ? ' disabled' : '');

	return (
		<button disabled={isDisabledStatus} className={stylesBtn} type={type} title={titleHover}>
			<div className='btn__container'>
				{textBtn}
			</div>
		</button>
	);
};

export { ButtonComponent };
