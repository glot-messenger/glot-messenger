import React, { useState, memo, useContext } from 'react';
import './text-field-style.css';
import type { ITextFieldProps } from './interafaces';
import { config } from '../../../../shared';
import { textFieldEyeData } from '../config';
import { EventEmitterContext } from '../../../../entities';
import { ToggleBlock } from '../../toggle-block';
import { APP_EVENT_CLICK } from '../../../core';

import type {
	IStylePadding,
	IStyleBorder
} from '../../../types';

const TextField: React.FC<ITextFieldProps> = memo(({ placeholder, label, type, name, error, isRequired, titleHover, onChange, value, nameIcon, alt, description }) => {
	// Получение контекста
	const eventEmitter = useContext(EventEmitterContext);

	// Для манипуляции с показом и сокрытием набираемого текста, а также любая сопутствующая динамическая стилистика
	const [typeInput, setTypeInput] = useState<string>(type);

	const isTextType: boolean = typeInput === 'text';

	const dataEye = isTextType ? textFieldEyeData['eye-hide'] : textFieldEyeData['eye-view'];

	const isPasswordTextField: boolean = (name === 'password' || name === 'repeatPassword') && type === 'password';

	const paddingStyleForPasswordInput: IStylePadding = isPasswordTextField ? { padding: '10px 60px 10px 45px' } : { padding: '10px 10px 10px 45px' };

	// Для манипуляции с фокусом и потерей фокуса на поле ввода, а также любая сопутствующая стилистика
	const [isFocusInput, setFocusInput] = useState<boolean>(false);

	const borderStyleForBlockInput: IStyleBorder = isFocusInput ? { border: '2px solid #049DEA' } : { border: '2px solid #2B303B' };

	function handlerClickTextField(event: React.MouseEvent<HTMLElement>): void {
		eventEmitter.on(APP_EVENT_CLICK, (payload) => {
			if (event.target === payload) {
				setFocusInput(true);

			} else {
				setFocusInput(false);
			}
		});
	};

	function inputChange(event: React.ChangeEvent<HTMLInputElement>): void {
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
					<ToggleBlock classes='text-field__label-description' text={description} isShown={isFocusInput} />
				</div>
				<div className='text-field__block-input' style={borderStyleForBlockInput}>
					<img className='text-field__icon-input' src={`${config.endPointForStatics}assets/icons/${nameIcon}`} alt={alt} />
					<input onClick={handlerClickTextField} className='text-field__input' style={paddingStyleForPasswordInput} value={value} onChange={inputChange} title={titleHover} name={name} id={name} type={typeInput} placeholder={placeholder} />
					{isPasswordTextField &&
						<button className='text-field__display-controller' title={dataEye.icon.titleHover} onClick={updateTypeInput} type='button'>
							<img className='text-field__flag-eye' src={`${config.endPointForStatics}assets/icons/${dataEye.icon.name}`} alt={dataEye.icon.alt} />
						</button>
					}
				</div>
				{error &&
					<ToggleBlock classes='text-field__error-message-input' text={error} isShown={isFocusInput} />
				}
			</div>
		</div>
	);
});

export { TextField };
