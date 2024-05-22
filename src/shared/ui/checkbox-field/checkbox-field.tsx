import React from 'react';
import './checkbox-field-style.css';
import type { ChangeEvent } from 'react';
import type { ICheckboxFieldProps } from './interafaces';

const CheckboxField: React.FC<ICheckboxFieldProps> = ({ label, name, error, isRequired, titleHover, onChange, description, nameIcon, alt }) => {
	function inputChange(event: ChangeEvent<HTMLInputElement>): void {
		if (onChange !== undefined) {
			onChange({ key: name, value: event.target.checked });
		}
	};

	function handlerClickChecker() {

	};

	return (
		<div className='checkbox-field checkbox-field__wrapper'>
			<div className='checkbox-field__container'>
				<p className='checkbox-field__description'>{description}</p>
				<div title={titleHover} className='checkbox-field__content'>
					<div onClick={handlerClickChecker} className='checkbox-field__input-wrapper'>
						<input className='checkbox-field__input' onChange={inputChange} type='checkbox' name={name} id={name} />
						<div className='checkbox-field__checker'>
							<img className='checkbox-field__icon-checker' src={`/assets/icons/${nameIcon}`} alt={alt} />
						</div>
					</div>
					<div className='checkbox-field__label-wrapper'>
						<label className='checkbox-field__label' onClick={handlerClickChecker} htmlFor={name}>{label}</label>
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
