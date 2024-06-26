import React from 'react';
import './button-lock-style.css';
import type { IButtonLockProps } from './interafaces';
import { configForButtonLock } from '../config';

const ButtonLock: React.FC<IButtonLockProps> = ({ flagStatus, data }) => {
   const handlerClickBtnLock = () => {
      console.log('Испускаю дата', data);
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
