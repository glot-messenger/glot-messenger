import React from 'react';
import './checkbox-field-style.css';

const CheckboxField: React.FC = () => {
	return (
		<div className='checkbox-field checkbox-field__wrapper'>
			<div className='checkbox-field__container'>
				<div className='checkbox-field__content'>
					<div className='checkbox-field__input-wrapper'>
						<input />
					</div>
					<div className='checkbox-field__label-wrapper'>
						<label>LABEL CHECKBOX</label>
					</div>
				</div>
				<div className='checkbox-field__error-message-checkbox'>Error</div>
			</div>
		</div>
	);
};

export { CheckboxField };
