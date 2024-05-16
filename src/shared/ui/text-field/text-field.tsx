import React, { useState } from 'react';
import './text-field-style.css';
import type { ChangeEvent } from 'react';
import type { ITextFieldProps } from '../interafaces';
import textFieldEyeData from '../../core/text-field-eye-data.json';

const TextField: React.FC<ITextFieldProps> = ({ placeholder, label, type, name, error, isRequired, titleHover, onChange, value }) => {
	const [typeInput, setTypeInput] = useState<string>(type);

	const isPasswordTextField: boolean = name === 'password' && type === 'password';

	const isTextType: boolean = typeInput === 'text';

	const dataEye = isTextType ? textFieldEyeData['eye-hide'] : textFieldEyeData['eye-view'];

	function inputChange(event: ChangeEvent<HTMLInputElement>): void {
		if (onChange !== undefined) {
			onChange({ key: name, value: event.target.value })
		}
	};

	function updateTypeInput(): void {
		if (typeInput === 'text') {
			setTypeInput('password');

			return;
		}

		setTypeInput('text');
	};

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
               <input value={value} onChange={inputChange} title={titleHover} name={name} id={name} type={typeInput} placeholder={placeholder} className='text-field__input' />
					{isPasswordTextField &&
						<button title={dataEye.icon.titleHover} onClick={updateTypeInput} className='text-field__display-controller' type='button'>
							<img className='text-field__flag-eye' src={`/assets/icons/${dataEye.icon.name}`} alt={dataEye.icon.alt} />
						</button>
					}
            </div>
            {error && 
               <div className='text-field__error-message-input'>{error}</div>
            }
         </div>
      </div>
   );
};

export { TextField };
