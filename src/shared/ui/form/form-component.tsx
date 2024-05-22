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

import type { ISchemeForForm } from '../../core';

function FormComponent<S extends ISchemeForForm, D extends Record<string, string | boolean>>({ children, data, onSubmit, schemeForValidator }: IFormComponentProps<S, D>) {
	const [dataForm, setDataForm] = useState<D>(data);

	const [errorState, setErrorState] = useState<Record<PropertyKey, string>>({});

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
