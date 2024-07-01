import React, { useContext } from 'react';
import './button-red-style.css';
import type { IButtonRedProps } from './interafaces';
import { EventEmitterContext } from '../../../../entities';
import { BUTTON_RED_EVENT_CLICK } from '../../../core';

const ButtonRed: React.FC<IButtonRedProps> = ({ children, textBtn, segmentEvent, titleHover, type, typeElement, classes }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const childrenContent = textBtn ? textBtn : children;

	const handlerClick = (): void => {
		eventEmitter.emit(BUTTON_RED_EVENT_CLICK + segmentEvent);
	};

	return (
		<button onClick={handlerClick} type={type} className='btn-red' title={titleHover}>
			<div className='btn-red__container'>
				{childrenContent}
			</div>
		</button>
	);
};

export { ButtonRed };
