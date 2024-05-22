import React from 'react';
import './checkbox-field-style.css';
import type { ChangeEvent } from 'react';
import type { ICheckboxFieldProps } from './interafaces';

const CheckboxField: React.FC<ICheckboxFieldProps> = ({ label, name, error, isRequired, titleHover, onChange, description }) => {
	function inputChange(event: ChangeEvent<HTMLInputElement>): void {
		if (onChange !== undefined) {
			onChange({ key: name, value: event.target.checked });
		}
	};

	return (
		<div className='checkbox-field checkbox-field__wrapper'>
			<div className='checkbox-field__container'>
				<p className='checkbox-field__description'>{description}</p>
				<div title={titleHover} className='checkbox-field__content'>
					<div className='checkbox-field__input-wrapper'>
						<input className='checkbox-field__input' onChange={inputChange} type='checkbox' name={name} id={name} />
					</div>
					<div className='checkbox-field__label-wrapper'>
						<label className='checkbox-field__label' htmlFor={name}>{label}</label>
						{isRequired &&
							<span className='checkbox-field__required-flag'>*</span>
						}
					</div>
				</div>
				{error &&
					<p className='checkbox-field__error-message-checkbox'>{error}</p>
				}
			</div>
		</div>
	);
};

export { CheckboxField };
