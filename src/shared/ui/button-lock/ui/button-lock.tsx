import React, { useContext } from 'react';
import './button-lock-style.css';
import type { IButtonLockProps } from './interafaces';
import { configForButtonLock } from '../config';
import { EventEmitterContext } from '../../../../entities';
import { BUTTON_LOCK_EVENT_CLICK } from '../../../core';

const ButtonLock: React.FC<IButtonLockProps> = ({ flagStatus, data, segmentEvent }) => {
	const eventEmitter = useContext(EventEmitterContext);

   const handlerClickBtnLock = (): void => {
      eventEmitter.emit(BUTTON_LOCK_EVENT_CLICK + segmentEvent, { data })
   };

   const dataConfig = flagStatus ? configForButtonLock['lock-open'] : configForButtonLock['lock-block'];

   const { icon } = dataConfig;

   return (
      <button onClick={handlerClickBtnLock} type='button' title={icon.titleHover} className='button-lock'>
         <img src={`/assets/icons/${icon.name}`} alt={icon.alt} className='button-lock__icon' />
      </button>
   );
};

export { ButtonLock };
