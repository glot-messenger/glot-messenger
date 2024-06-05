import React, { useState, cloneElement, useEffect, useCallback } from 'react';
import './form-component-style.css';
import type { FormEvent } from 'react';
import type { IFormComponentProps } from './interafaces';
import type { IInstanceWithKeyAndValue } from '../../../types';
import type { ISchemeForForm } from '../../../core';

import {
	isNotPrimitive,
	isNullable,
	KEY_FOR_MULTITON_VALIDATOR,
	isContainsPropertiesTypeAndPropsInChild,
	factoryMultiton,
	factoryValidator,
	Validator
} from '../../../lib';

function FormComponent<S extends ISchemeForForm, D extends Record<string, string | boolean>>({ children, data, onSubmit, schemeForValidator }: IFormComponentProps<S, D>) {
	const [dataForm, setDataForm] = useState<D>(data);

	const [errorState, setErrorState] = useState<Record<PropertyKey, string>>({});

	const isErrorsValidator: boolean = Object.keys(errorState).length > 0;

	const onChange = useCallback(({ key, value }: IInstanceWithKeyAndValue): void => {
		setDataForm((prevState: D) => ({ ...prevState, [key]: value }));
	}, []);

	const validation = useCallback((dataFormValue: D): boolean => {
		const validator: Validator = factoryMultiton().get(KEY_FOR_MULTITON_VALIDATOR);

		if (validator) {
			const errorsResult = validator.validate<D, S>(dataFormValue, schemeForValidator);

			setErrorState(errorsResult);

			return Object.keys(errorsResult).length === 0;
		}

		return false;
	}, [schemeForValidator, setErrorState]);

	function submitForm(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		// Уже перед самым сабмитом еще раз проверяются данные, на случай, если защита от верстки будет нивелирована клиентом
		const isValidData = validation(dataForm);

		if (!isValidData) {

			return;
		}

		onSubmit({
			data: dataForm,
		});
	};

	const newChildrens = React.Children.map(children, (child) => {
		if (isNullable(child)) {
			return child;
		}

		if (!isNotPrimitive(child)) {
			return child;
		}

		if (!isContainsPropertiesTypeAndPropsInChild(child)) {
			return child;
		}

		if (typeof child.type === 'string') {
			return child;
		}

		const typeEl = child.props.typeElement;

		if (!typeEl) {
			return child;
		}

		let newProps;

		if (typeEl === 'textField' || typeEl === 'checkboxField') {
			newProps = {
				...child.props,
				value: dataForm[child.props.name],
				error: errorState[child.props.name],
				onChange
			};

			return cloneElement(child, newProps);
		}

		if (typeEl === 'button' && child.props.type === 'submit') {
			newProps = {
				...child.props,
				isDisabled: isErrorsValidator
			};

			return cloneElement(child, newProps);
		}

		return child;
	});

	useEffect((): void => {
		const multiton = factoryMultiton();

		// Регистрируем в Multiton инстанс валидатора, если его там нет
		if (!multiton.get(KEY_FOR_MULTITON_VALIDATOR)) {
			multiton.set(KEY_FOR_MULTITON_VALIDATOR, factoryValidator())
		}

		validation(dataForm);
	}, [dataForm, validation]);

	useEffect(() => {
		return () => {
			// Освобождаем память, удаляем из Multiton инстанс Validator
			factoryMultiton().delete(KEY_FOR_MULTITON_VALIDATOR);
		};
	}, []);

	return (
		<form className='form' onSubmit={submitForm}>
			{newChildrens}
		</form>
	);
};

export { FormComponent };
