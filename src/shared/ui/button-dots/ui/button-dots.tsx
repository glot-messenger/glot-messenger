import React, { useContext } from 'react';
import './button-dots-style.css';
import type { IButtonDotsProps } from './interafaces';
import { BUTTON_DOTS_EVENT_CLICK } from '../../../core';
import { EventEmitterContext } from '../../../../entities';

const ButtonDots: React.FC<IButtonDotsProps> = ({ classes, segmentEvent, data }) => {
	const eventEmitter = useContext(EventEmitterContext);

   const handlerClickBtn = (): void => {
		eventEmitter.emit(BUTTON_DOTS_EVENT_CLICK + segmentEvent, { data });
   };

	const classesValue: string = `button-dots ${classes}`;

   return (
      <button onClick={handlerClickBtn} type='button' className={classesValue}>
         <span className='button-dots__dot'>•</span>
         <span className='button-dots__dot'>•</span>
         <span className='button-dots__dot'>•</span>
      </button>
   );
};

export { ButtonDots };
