import React, { useEffect, useState } from 'react';
import './button-component-style.css';
import type { IButtonComponentProps } from './interafaces';

const ButtonComponent: React.FC<IButtonComponentProps> = ({ textBtn, type, titleHover, typeElement, isDisabled }) => {
	const isDisabledStatus: boolean = type === 'submit' && isDisabled === true;

	const [styleBtn, setStyleBtn] = useState('btn disabled');

	useEffect(() => {
		if (!isDisabledStatus) {
			setStyleBtn('btn');

		} else {
			setStyleBtn('btn disabled')
		}
	}, [isDisabled, type, isDisabledStatus]);

	return (
		<button disabled={isDisabledStatus} className={styleBtn} type={type} title={titleHover}>
			<div className='btn__container'>
				{textBtn}
			</div>
		</button>
	);
};

export { ButtonComponent };
