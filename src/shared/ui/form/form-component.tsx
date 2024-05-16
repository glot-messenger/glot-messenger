import React, { useState, cloneElement } from 'react';
import './form-component-style.css';
import type { ReactNode, FormEvent } from 'react';
import type { IFormComponentProps, MyChild, IInstanceWithKeyAndValue } from '../interafaces';
import { isNotPrimitive } from '../../lib/utils/is-not-primitive';
import { isNullable } from '../../lib/utils/is-nullable';


const FormComponent: React.FC<IFormComponentProps> = ({ children, data, onSubmit }) => {
	const [dataForm, setDataForm] = useState(data || {});

	const [errorState, setErrorState] = useState<any>({});

	const onChange = ({ key, value }: IInstanceWithKeyAndValue): void => {
		setDataForm({
			...dataForm,
			[key]: value
		});
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

	return (
		<form className='form' onSubmit={submitForm}>
			{newChildrens}
		</form>
	);
};

export { FormComponent };
