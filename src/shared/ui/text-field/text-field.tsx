import React from 'react';
import './text-field-style.css';
import type { ITextFieldProps } from '../interafaces';

const TextField: React.FC<ITextFieldProps> = ({ placeholder, label, type, name, error, isRequired }) => {
   return (
      <div className='text-field text-field__wrapper'>
         <div className='text-field__container'>
            <div className='text-field__label-container'>
               {isRequired &&
                  <span className='text-field__required-flag'>*</span>
               }
               <label htmlFor={name} className='text-field__label-input'>{label}</label>
            </div>
            <div className='text-field__block-input'>
               <input name={name} id={name} type={type} placeholder={placeholder} className='text-field__input' />
            </div>
            {error && 
               <div className='text-field__error-message-input'>{error}</div>
            }
         </div>
      </div>
   );
};

export { TextField };
