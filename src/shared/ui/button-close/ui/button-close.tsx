import React, { useContext } from 'react';
import './button-close-style.css';
import type { IButtonCloseProps } from './interafaces';
import { configForButtonClose } from '../config';
import { BUTTON_CLOSE_EVENT_CLICK } from '../../../core';
import { EventEmitterContext } from '../../../../entities';

const ButtonClose: React.FC<IButtonCloseProps> = ({ segmentEvent }) => {
	const { icon } = configForButtonClose;

	const eventEmitter = useContext(EventEmitterContext);

	const handlerClickOnBtnClose = (): void => {
		eventEmitter.emit(BUTTON_CLOSE_EVENT_CLICK + segmentEvent);
	};

	return (
		<button onClick={handlerClickOnBtnClose} type='button' className='button-close' title={icon.titleHover}>
			<img src={`/assets/icons/${icon.name}`} alt={icon.alt} className='button-close__icon' />
		</button>
	);
};

export { ButtonClose };
