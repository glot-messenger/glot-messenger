import React, { useContext } from 'react';
import './button-with-dynamic-background-style.css';
import type { IButtonWithDynamicBackgroundProps } from './interafaces';
import { EventEmitterContext } from '../../../../entities';
import { BUTTON_WITH_DYNAMIC_BACKGROUND } from '../../../core';

const ButtonWithDynamicBackground: React.FC<IButtonWithDynamicBackgroundProps> = ({ textBtn, type, titleHover, typeElement, classes, children, segmentEvent, payload }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const childrenContent = children ? children : textBtn;

	const handlerClick = (): void => {
		console.log(`Event full name: ${BUTTON_WITH_DYNAMIC_BACKGROUND + segmentEvent}`);
		console.log('Передаваемая нагрузка в кнопке', payload);

		eventEmitter.emit(BUTTON_WITH_DYNAMIC_BACKGROUND + segmentEvent, payload);
	};

	return (
		<button onClick={handlerClick} className={`btn-with-dynamic-background ${classes}`} title={titleHover} type={type}>
			<div className='btn-with-dynamic-background__container'>
				{childrenContent}
			</div>
		</button>
	);
};

export { ButtonWithDynamicBackground };
