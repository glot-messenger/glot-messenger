import React, { useState, cloneElement, useEffect } from 'react';
import './form-component-style.css';
import type { FormEvent } from 'react';
import type { IFormComponentProps } from './interafaces';
import type { IInstanceWithKeyAndValue } from '../../types';

import {
	isNotPrimitive,
	isNullable,
	validator,
	isContainsPropertiesTypeAndPropsInChild
} from '../../lib';

import type { ISchemeFormSignInPage } from '../../core';

function FormComponent<S extends ISchemeFormSignInPage, D extends Record<keyof S, unknown>>({ children, data, onSubmit, schemeForValidator }: IFormComponentProps<S, D>) {
	const [dataForm, setDataForm] = useState<D>(data);

	const [errorState, setErrorState] = useState<Map<keyof D, string>>(new Map());

	const onChange = ({ key, value }: IInstanceWithKeyAndValue): void => {
		setDataForm({
			...dataForm,
			[key]: value
		});
	};

	function validation(): void {
		const errorsResult = validator.validate<S, D>(dataForm, schemeForValidator);

		setErrorState(errorsResult);
	};

	function submitForm(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		onSubmit(dataForm);
	};

	const isDisabledSubmitBtn: boolean = Object.keys(errorState).length > 0;

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

		if (typeEl === 'textField') {
			const valueNameChild = child.props.name as keyof S;

			newProps = {
				...child.props,
				value: dataForm[valueNameChild],
				error: errorState.get(valueNameChild),
				onChange
			};

			return cloneElement(child, newProps);
		}

		if (typeEl === 'button' && child.props.type === 'submit') {
			newProps = {
				...child.props,
				isDisabled: isDisabledSubmitBtn
			};

			return cloneElement(child, newProps);
		}

		return child;
	});

	useEffect((): void => {
		validation();
	}, [dataForm]);

	return (
		<form className='form' onSubmit={submitForm}>
			{newChildrens}
		</form>
	);
};

export { FormComponent };
