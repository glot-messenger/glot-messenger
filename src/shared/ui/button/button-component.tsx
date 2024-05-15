import React from 'react';
import './button-component-style.css';
import type { IButtonComponentProps } from '../interafaces';

const ButtonComponent: React.FC<IButtonComponentProps> = ({ textBtn, type, titleHover }) => {
   return (
      <button className='btn' type={type} title={titleHover}>
         <div className='btn__container'>
            {textBtn}
         </div>
      </button>
   );
};

export { ButtonComponent };
