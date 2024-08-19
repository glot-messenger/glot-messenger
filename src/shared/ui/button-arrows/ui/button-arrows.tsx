import React, { useContext } from 'react';
import './button-arrows-style.css';
import type { IButtonArrowsProps } from './interafaces';
import { EventEmitterContext } from '../../../../entities';
import { BUTTON_ARROWS_EVENT_CLICK } from '../../../../shared';

const ButtonArrows: React.FC<IButtonArrowsProps> = ({ classes, type, titleHover, segmentEvent, typeElement }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const handlerClick = (): void => {
		console.log(`Event full name: ${BUTTON_ARROWS_EVENT_CLICK + segmentEvent}`);

		eventEmitter.emit(BUTTON_ARROWS_EVENT_CLICK + segmentEvent);
	};

	return (
		<button type={type} title={titleHover} className={`button-arrows ${classes}`} onClick={handlerClick}>
			<span className='button-arrows__arrow button-arrows__arrow_left'></span>
			<span className='button-arrows__arrow button-arrows__arrow_right'></span>
		</button>
	);
};

export { ButtonArrows };
