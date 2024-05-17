import React, { useState, cloneElement, useEffect } from 'react';
import './form-component-style.css';
import type { ReactNode, FormEvent } from 'react';
import type { IFormComponentProps } from '../interafaces';
import type { MyChild, IInstanceWithKeyAndValue } from '../../types/auxiliary';
import {
	isNotPrimitive,
	isNullable,
	validator
} from '../../lib';

function FormComponent<T>({ children, data, onSubmit, schemeForValidator }: IFormComponentProps<T>) {
	const [dataForm, setDataForm] = useState(data || {});

	const [errorState, setErrorState] = useState<any>({});

	const onChange = ({ key, value }: IInstanceWithKeyAndValue): void => {
		setDataForm({
			...dataForm,
			[key]: value
		});
	};

	function validation(): void {
		console.log(dataForm);

		const errorsResult = validator.validate(dataForm, schemeForValidator);

		console.log(errorsResult);

		setErrorState(errorsResult);
	};

	function submitForm(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		onSubmit(dataForm);
	};

	const newChildrens = React.Children.map(children, (child) => {
		if (isNullable(child)) {
			return child;
		}

		if (!isNotPrimitive(child)) {
			return child;
		}

		function isContainsPropertiesTypeAndPropsInChild(childInstance: MyChild): childInstance is Exclude<MyChild, Iterable<ReactNode>> {
			if (childInstance.hasOwnProperty('type') && childInstance.hasOwnProperty('props')) {
				return true;
			}

			return false;
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
			newProps = {
				...child.props,
				value: dataForm[child.props.name],
				error: errorState[child.props.name],
				onChange
			}

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
