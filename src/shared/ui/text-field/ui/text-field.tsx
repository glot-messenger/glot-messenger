import React, { useState } from 'react';
import './text-field-style.css';
import type { ChangeEvent } from 'react';
import type { ITextFieldProps } from './interafaces';
import type { IStylePadding, IStyleBorder } from '../../../types';
import { textFieldEyeData } from '../../../core';

const TextField: React.FC<ITextFieldProps> = ({ placeholder, label, type, name, error, isRequired, titleHover, onChange, value, nameIcon, alt, description }) => {
	const [typeInput, setTypeInput] = useState<string>(type);

	const [isFocusInput, setFocusInput] = useState<boolean>(false);

	const isPasswordTextField: boolean = (name === 'password' || name === 'repeatPassword') && type === 'password';

	const paddingStyleForPasswordInput: IStylePadding = isPasswordTextField ? { padding: '10px 60px 10px 45px' } : { padding: '10px 10px 10px 45px' };

	const borderStyleForBlockInput: IStyleBorder = isFocusInput ? { border: '2px solid #049DEA' } : { border: '2px solid #2B303B' };

	const isTextType: boolean = typeInput === 'text';

	const dataEye = isTextType ? textFieldEyeData['eye-hide'] : textFieldEyeData['eye-view'];

	function inputChange(event: ChangeEvent<HTMLInputElement>): void {
		if (onChange !== undefined) {
			onChange({ key: name, value: event.target.value });
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
					<div className='text-field__label-group'>
						{isRequired &&
							<span className='text-field__required-flag'>*</span>
						}
						<label className='text-field__label-input' htmlFor={name}>{label}</label>
					</div>
					<p className='text-field__label-description'>{description}</p>
				</div>
				<div className='text-field__block-input' style={borderStyleForBlockInput}>
					<img className='text-field__icon-input' src={`/assets/icons/${nameIcon}`} alt={alt} />
					<input className='text-field__input' style={paddingStyleForPasswordInput} value={value} onChange={inputChange} title={titleHover} name={name} id={name} type={typeInput} placeholder={placeholder} />
					{isPasswordTextField &&
						<button className='text-field__display-controller' title={dataEye.icon.titleHover} onClick={updateTypeInput} type='button'>
							<img className='text-field__flag-eye' src={`/assets/icons/${dataEye.icon.name}`} alt={dataEye.icon.alt} />
						</button>
					}
				</div>
				{error && 
					<p className='text-field__error-message-input'>{error}</p>
				}
			</div>
		</div>
	);
};

export { TextField };
