import React, { useState } from 'react';
import { configChildrensForFormSignInPage } from '../config';
import { useNavigate } from 'react-router-dom';
import { AuthBox } from '../../../widgets';

import {
	TextField,
	ButtonComponent,
	FormComponent,
	schemeFormSignInPage,
	SPACE
} from '../../../shared';

import type {
	IDataFormInOnSubmit,
	IDataFormComponent
} from '../../../shared';

const SignInPage: React.FC = () => {
	const [dataForm] = useState<IDataFormComponent>({
		login: '',
		password: ''
	});

	const navigate = useNavigate();

	function submitFn({ data, isErrors }: IDataFormInOnSubmit): void {
		if (!isErrors) {
			console.log('Отправляю данные формы для входа!', data);

			navigate(SPACE);
		}
	};

	return (
		<AuthBox>
			<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignInPage}>
				<TextField {...configChildrensForFormSignInPage.login} />
				<TextField {...configChildrensForFormSignInPage.password} />
				<ButtonComponent {...configChildrensForFormSignInPage.button} />
			</FormComponent>
		</AuthBox>
	);
};

export { SignInPage };
