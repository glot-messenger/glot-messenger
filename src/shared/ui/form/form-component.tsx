import React, { useState } from 'react';
import './form-component-style.css';
import type { ReactNode, FormEvent } from 'react';
import type { IFormComponentProps, MyChild } from '../interafaces';
import { isNotPrimitive } from '../../lib/utils/is-not-primitive';
import { isNullable } from '../../lib/utils/is-nullable';


const FormComponent: React.FC<IFormComponentProps> = ({ children, data, onSubmit }) => {
	const [dataForm, setDataForm] = useState(data || {});

	const [error, setError] = useState({});

	const onChange = (name: string, value: string): void => {

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

		if (!child.props.typeElement) {
			return child;
		}

		let newProps;

		// if (child.props.typeElement === 'button' && (child.props.type === 'submit' || child.props.type === undefined)) {
		// 	return 
		// }

		return child;
	});

	return (
		<form className='form' onSubmit={submitForm}>
			{children}
		</form>
	);
};

export { FormComponent };
