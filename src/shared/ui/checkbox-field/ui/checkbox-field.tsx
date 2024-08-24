import React, { memo } from 'react';
import './checkbox-field-style.css';
import type { ICheckboxFieldProps } from './interafaces';
import { config } from '../../../../shared';

const CheckboxField: React.FC<ICheckboxFieldProps> = memo(({ label, name, error, isRequired, titleHover, onChange, description, nameIcon, alt, value }) => {
	function checkboxClick(): void {
		if (onChange !== undefined) {
			onChange({ key: name, value: !value });
		}
	};

	const classesChecker: string = 'checkbox-field__checker' + (value ? ' active' : '');

	return (
		<div className='checkbox-field checkbox-field__wrapper'>
			<div className='checkbox-field__container'>
				<p className='checkbox-field__description'>{description}</p>
				<div title={titleHover} className='checkbox-field__content'>
					<div onClick={checkboxClick} className='checkbox-field__input-wrapper'>
						<input className='checkbox-field__input' type='checkbox' name={name} id={name} checked={value} value='' onChange={checkboxClick} />
						<div className={classesChecker}>
							{value &&
								<img className='checkbox-field__icon-checker' src={`${config.endPointForStatics}assets/icons/${nameIcon}`} alt={alt} />
							}
						</div>
					</div>
					<div className='checkbox-field__label-wrapper'>
						<label className='checkbox-field__label' onClick={checkboxClick}>{label}</label>
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
});

export { CheckboxField };
