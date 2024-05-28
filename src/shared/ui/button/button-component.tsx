import React, { useEffect, useState } from 'react';
import './button-component-style.css';
import type { IButtonComponentProps } from './interafaces';

const ButtonComponent: React.FC<IButtonComponentProps> = ({ textBtn, type, titleHover, typeElement, isDisabled, classes, children }) => {
	const isDisabledStatus: boolean = type === 'submit' && isDisabled === true;

	const [classesBtn, setClassesBtnBtn] = useState('btn disabled');

	const childrenContent = textBtn ? textBtn : children;

	useEffect(() => {
		if (!isDisabledStatus) {
			setClassesBtnBtn('btn');

		} else {
			setClassesBtnBtn('btn disabled')
		}
	}, [isDisabled, type, isDisabledStatus]);

	return (
		<button disabled={isDisabledStatus} className={`${classesBtn} ${classes}`} type={type} title={titleHover}>
			<div className='btn__container'>
				{childrenContent}
			</div>
		</button>
	);
};

export { ButtonComponent };
